import React, { useState } from "react";
import { View, Text } from "react-native";
import Button from "../components/Button/Button";
import Label from "../components/Form/Label";
import Field from "../components/Form/Field";
import globalStyles from "../styles/GlobalStyles";
import PasswordInput from "../components/PasswordInput";
import VerificationCode from "../components/VerificationCode";
import { CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "../authentication/UserPool";
import { Formik } from "formik";
import validationSchema from "../utils/validationSchema";
import * as Yup from "yup";
import ResendVerificationCode from "../components/ResendVerificationCode";
import forgotPassword from "../authentication/forgotPassword";
import Form from "../components/Form/Form";
import { isInvalidAndTouched } from "../utils/methods";

const ResetPasswordScreen = ({ route, navigation }) => {
  const { username, codeDestination } = route.params;
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  return (
    <Formik
      initialValues={{ verificationCode, password, verifyPassword }}
      validationSchema={Yup.object().shape({
        password: validationSchema.password,
        verifyPassword: validationSchema.password,
      })}
      onSubmit={(values, { setSubmitting, setFieldError }) => {
        const resetPassword = () => {
          console.log("resetting password");
          const user = new CognitoUser({
            Username: username,
            Pool: UserPool,
          });
          user.confirmPassword(verificationCode, password, {
            onFailure(err) {
              switch (err.name) {
                case "ExpiredCodeException":
                  setFieldError(
                    "verificationCode",
                    "Verification code has expired"
                  );
                  break;
                case "CodeMismatchException":
                  setFieldError(
                    "verificationCode",
                    "Invalid verification code"
                  );
                  break;
                case "LimitExceededException":
                  setFieldError(
                    "verificationCode",
                    "Too many reset password attempts. Please try again later."
                  );
                  break;
                default:
                  setFieldError(
                    "verificationCode",
                    "Failed to reset password. Unknown error."
                  );
                  break;
              }
            },
            onSuccess() {
              console.log("Successfully reset password");
              navigation.navigate("Congrats", {
                text: "You have successfully reset your password!",
                nextPageName: "Login",
                buttonName: "Login",
              });
            },
          });
        };
        if (values.password !== values.verifyPassword) {
          setFieldError("verifyPassword", "The passwords do not match");
          return;
        }
        resetPassword();
        setSubmitting(false);
      }}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        touched,
        errors,
        handleBlur,
      }) => (
        <Form>
          <View style={globalStyles.formWrapper}>
            <View>
              <Field
                error={errors.verificationCode}
                touched={touched.verificationCode}
              >
                <Label>Enter your verification code</Label>
                <Text>The code has been sent to {codeDestination}</Text>
                <VerificationCode
                  value={values.verificationCode}
                  onChangeText={(text) => {
                    setVerificationCode(text);
                    handleChange("verificationCode")(text);
                  }}
                  onBlur={handleBlur("verificationCode")}
                />
              </Field>
              <Field error={errors.password} touched={touched.password}>
                <Label>New password</Label>
                <PasswordInput
                  placeholder="New password"
                  onChangeText={(text) => {
                    setPassword(text);
                    handleChange("password")(text);
                  }}
                  value={values.password}
                  onBlur={handleBlur("password")}
                />
              </Field>
              <Field
                error={errors.verifyPassword}
                touched={touched.verifyPassword}
              >
                <Label>Reenter password</Label>
                <PasswordInput
                  placeholder="Verify your password"
                  onChangeText={(text) => {
                    setVerifyPassword(text);
                    handleChange("verifyPassword")(text);
                  }}
                  value={values.verifyPassword}
                  onBlur={handleBlur("verifyPassword")}
                />
              </Field>
            </View>
            <ResendVerificationCode
              onPress={() => forgotPassword(navigation, username)}
            />
            <Button
              title="Reset password"
              onPress={handleSubmit}
              style="largeButton"
              disabled={isInvalidAndTouched(errors, touched)}
            ></Button>
          </View>
        </Form>
      )}
    </Formik>
  );
};

export default ResetPasswordScreen;
