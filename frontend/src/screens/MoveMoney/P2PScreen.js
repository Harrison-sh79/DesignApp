import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import validationSchema from "../../utils/validationSchema";
import Input from "../../components/Input";
import Field from "../../components/Form/Field";
import Button from "../../components/Button/Button";
import globalStyles from "../../styles/GlobalStyles";

const etransferSchema = Yup.object().shape(validationSchema);

const P2PScreen = () => {
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Formik
      initialValues={{ email: email }}
      validationSchema={etransferSchema}
      onSubmit={(values, { setSubmitting, setFieldError }) => {
        setTimeout(() => {
          navigation.navigate("RegisterEmailAndPhone", {
            username: values.username,
            password: values.password,
          });
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ handleChange, handleSubmit, values, touched, errors }) => (
        <View style={globalStyles.formWrapper}>
          <Text style={globalStyles.formTitle}>Send p2p</Text>
          <View style={{ flex: 1 }}>
            <Input
              onChangeText={setAmount}
              value={amount}
              placeholder="Amount"
            />
            <Field error={errors.email} touched={touched.email}>
              <Input
                placeholder="Email"
                onChangeText={(text) => {
                  setEmail(text);
                  handleChange("email")(text);
                }}
                value={values.email}
              />
            </Field>
            <Input
              onChangeText={setName}
              value={name}
              placeholder="Full name"
            />
            <Input
              onChangeText={setMessage}
              value={message}
              placeholder="Message"
            />
          </View>
          <Button title="Send" style="largeButton" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
export default P2PScreen;
