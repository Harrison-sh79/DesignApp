import React, { useState } from "react";
import { View, Text } from "react-native";
import Button from "../components/Button/Button";
import globalStyles from "../styles/GlobalStyles";
import Input from "../components/Input";
import forgotPassword from "../authentication/forgotPassword";
import Field from "../components/Form/Field";
import Label from "../components/Form/Label";
import { Formik } from "formik";
import validationSchema from "../utils/validationSchema";
import * as Yup from "yup";
import Form from "../components/Form/Form";
import { isInvalidAndTouched } from "../utils/methods";

const ForgotPasswordScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState("");

  return (
    <Formik
      initialValues={{ email }}
      validationSchema={Yup.object().shape({ email: validationSchema.email })}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        forgotPassword(navigation, values.email);
      }}
    >
      {({
        handleChange,
        handleSubmit,
        touched,
        errors
      }) => (
        <Form>
          <View style={globalStyles.formWrapper}>
            <Field error={errors.email} touched={touched.email}>
              <View>
                <Text style={globalStyles.mediumTitle}>
                  Let's make sure it's you.
                </Text>
                <Text style={globalStyles.recoverySubText}>
                  You can reset your password once you verify your email.
                </Text>
              </View>

              <View style={{ marginTop: 16 }}>
                <Label>Verify your email</Label>

                <Input
                  placeholder="e.g. name@gmail.com"
                  onChangeText={(text) => {
                    setEmail(text);
                    handleChange("email")(text);
                  }}
                />

              </View>
            </Field>

            <View style={{ marginTop: 32 }}>
              <Button
                title="Send Verification Code"
                onPress={handleSubmit}
                disabled={isInvalidAndTouched(errors, touched)}
                style="largeButton"
              ></Button>
            </View>
          </View>
        </Form>
      )}
    </Formik>
  );
};

export default ForgotPasswordScreen;