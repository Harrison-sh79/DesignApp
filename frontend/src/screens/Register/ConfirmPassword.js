import { View, Text } from "react-native";
import globalStyles from "../../styles/GlobalStyles";
import Button from "../../components/Button/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import Field from "../../components/Form/Field";
import Label from "../../components/Form/Label";
import PasswordInput from "../../components/PasswordInput";
import Form from "../../components/Form/Form";
import { isInvalidAndTouched } from "../../utils/methods";

const ConfirmPasswordScreen = ({ navigation, route }) => {
  const { email, password } = route.params;

  return (
    <Formik
      initialValues={{
        confirmPassword: "",
      }}
      validationSchema={Yup.object().shape({
        confirmPassword: Yup.string()
          .oneOf([password], "Passwords must match")
          .required("Confirm Password is required"),
      })}
      onSubmit={(values, { setSubmitting, setFieldError }) => {
        setTimeout(() => {
          navigation.navigate("PhoneVerification", {
            email: email,
            password: values.confirmPassword,
          });
          setSubmitting(false);
        }, 200);
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
          <View style={globalStyles.formWrapper} gap={16}>
            <Field
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
            >
              <Label>Confirm Your Password</Label>
              <PasswordInput
                placeholder="Retype password"
                onChangeText={handleChange("confirmPassword")}
                value={values.confirmPassword}
                onBlur={handleBlur("confirmPassword")}
              />
            </Field>
            <View style={{ flex: 1, marginTop: 16 }}>
              <Button
                title="Continue"
                style="largeButton"
                onPress={handleSubmit}
                disabled={isInvalidAndTouched(errors, touched)}
              />
            </View>
          </View>
        </Form>
      )}
    </Formik>
  );
};
export default ConfirmPasswordScreen;
