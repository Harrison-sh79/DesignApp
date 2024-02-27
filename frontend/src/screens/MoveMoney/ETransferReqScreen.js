import React, { useState } from "react";
import { Text, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import validationSchema from "../../utils/validationSchema";
import Input from "../../components/Input";
import Field from "../../components/Form/Field";
import Button from "../../components/Button/Button";
import globalStyles from "../../styles/GlobalStyles";

const ETransferReqScreen = ({ navigation }) => {
  const [message, setMessage] = useState("");
  return (
    <Formik
      initialValues={{ email: "", amount: 0, question: "", answer: "" }}
      validationSchema={Yup.object().shape({
        amount: validationSchema.amount,
        question: validationSchema.question,
        answer: validationSchema.answer,
      })}
      onSubmit={(values, { setSubmitting, setFieldError }) => {
        setTimeout(() => {
          navigation.navigate("Congrats", {
            text: "Your transaction is done!",
            nextPageName: "Tabs",
            buttonName: "Go Back to Home Page",
          });
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ handleChange, handleSubmit, values, touched, errors }) => (
        <View style={globalStyles.formWrapper}>
          <Text style={globalStyles.formTitle}>Request e-transfer</Text>
          <View style={{ flex: 1 }}>
            <Field error={errors.amount} touched={touched.amount}>
              <Input
                placeholder="Amount"
                onChangeText={handleChange("amount")}
                value={values.amount === 0 ? "" : values.amount.toString()}
              />
            </Field>
            <Field error={errors.email} touched={touched.email}>
              <Input
                placeholder="Email"
                onChangeText={handleChange("email")}
                value={values.email}
              />
            </Field>
            <Field error={errors.question} touched={touched.question}>
              <Input
                placeholder="Question"
                onChangeText={handleChange("question")}
                value={values.question}
              />
            </Field>
            <Field error={errors.answer} touched={touched.answer}>
              <Input
                placeholder="Answer"
                onChangeText={handleChange("answer")}
                value={values.answer}
              />
            </Field>
            <Input
              onChangeText={setMessage}
              value={message}
              placeholder="Message (optional)"
            />
          </View>
          <Button title="Request" style="largeButton" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};
export default ETransferReqScreen;
