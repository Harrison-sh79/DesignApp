import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { Formik } from "formik";
import Button from "../components/Button/Button";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import Field from "../components/Form/Field";
import Label from "../components/Form/Label";
import globalStyles from "../styles/GlobalStyles";
import validationSchema from "../utils/validationSchema";
import * as Yup from "yup";
import Form from "../components/Form/Form";
import { isInvalidAndTouched } from "../utils/methods";
import { TEXT_LARGE } from "../styles/GlobalStyles";

const signupSchema = Yup.object().shape(validationSchema);

const DemoScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Formik
      initialValues={{ username: username, email: email, password: password }}
      validationSchema={signupSchema}
      onSubmit={(values, { setSubmitting, setFieldError }) => {
        setTimeout(() => {
          // Simulate a condition where the username 'vmax' is already taken
          if (values.username === "vmax") {
            setFieldError("username", "The username already exists");
          } else {
            navigation.navigate("RegisterEmailAndPhone", {
              username: values.username,
              password: values.password,
            });
          }
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
          <View style={globalStyles.formWrapper}>
            <View>
              <Field error={errors.username} touched={touched.username}>
                <Label>Create your username</Label>
                <Input
                  placeholder="Username"
                  onChangeText={(text) => {
                    setUsername(text);
                    handleChange("username")(text);
                  }}
                  value={values.username}
                  onBlur={handleBlur("username")}
                />
              </Field>

              <Field error={errors.email} touched={touched.email}>
                <Label>Enter Your Email</Label>
                <Input
                  placeholder="Your Email"
                  onChangeText={(text) => {
                    setEmail(text);
                    handleChange("email")(text);
                  }}
                  value={values.email}
                  onBlur={handleBlur("email")}
                />
              </Field>

              <Field error={errors.password} touched={touched.password}>
                <Label>Create Your Passwords</Label>
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
            </View>

            <View>
              <Text style={globalStyles.agreementText}>
                By registering, you agree to our Terms of Use and Privacy
                Policy.
              </Text>
              <Button
                title="Continue"
                style="largeButton"
                onPress={handleSubmit}
                disabled={isInvalidAndTouched(errors, touched)}
              ></Button>
            </View>
          </View>
        </Form>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: TEXT_LARGE,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 60,
    marginVertical: 10,
    borderWidth: 1,
    padding: 20,
    borderColor: "#ddd",
    borderRadius: 20,
    width: "100%",
  },
  field: {
    marginBottom: 10,
  },
});

export default DemoScreen;
