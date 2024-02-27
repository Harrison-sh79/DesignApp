import React, { useState } from "react";
import { View, Text } from "react-native";
import globalStyles from "../../styles/GlobalStyles";
import Input from "../../components/Input";
import Button from "../../components/Button/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import Field from "../../components/Form/Field";
import Label from "../../components/Form/Label";
import validationSchema from "../../utils/validationSchema";
import Form from "../../components/Form/Form";
import { isInvalidAndTouched } from "../../utils/methods";
import axios from "axios";

const baseUrl = process.env.EXPO_PUBLIC_PRODUCTION;

const CreateAccountScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const checkIfEmailExists = async (email, setFieldError) => {
    setLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/v1/check_email_exists`, {
        email: email,
      });
      const { data } = response.data;
      if (data.exists) {
        setLoading(false);
        setFieldError("email", "Email is already associated with an account");
      } else {
        setLoading(false);
        navigation.navigate("CreatePassword", { email: email });
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={Yup.object().shape({
        email: validationSchema.email,
      })}
      onSubmit={(values, { setSubmitting, setFieldError }) => {
        checkIfEmailExists(values.email, setFieldError);
        setSubmitting(false);
      }}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
        handleBlur,
      }) => (
        <Form>
          <View style={globalStyles.formWrapper} gap={16}>
            <Text style={globalStyles.largeTitle}>Let's Get Started.</Text>
            <Field error={errors.email} touched={touched.email}>
              <Label>Enter Your Email</Label>
              <Input
                placeholder="Your Email"
                onChangeText={handleChange("email")}
                value={values.email}
                onBlur={handleBlur("email")}
              />
            </Field>
            <View style={{ marginTop: 16 }}>
              <Button
                title="Continue"
                style="largeButton"
                onPress={handleSubmit}
                disabled={isInvalidAndTouched(errors, touched)}
                loading={loading}
              />
            </View>
          </View>
        </Form>
      )}
    </Formik>
  );
};

export default CreateAccountScreen;
