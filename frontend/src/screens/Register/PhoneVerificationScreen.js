import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import globalStyles, { TEXT_MEDIUM } from "../../styles/GlobalStyles";
import Button from "../../components/Button/Button";
import Input from "../../components/Input";
import { CountryPicker } from "react-native-country-codes-picker";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import UserPool from "../../authentication/UserPool";
import { Formik } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import Field from "../../components/Form/Field";
import Label from "../../components/Form/Label";
import validationSchema from "../../utils/validationSchema";
import {
  FORM_INPUT_GREY,
  INPUT_RADIUS,
  TEXT_SMALL,
  DARK_TEXT,
  INPUT_HEIGHT,
} from "../../styles/GlobalStyles";
import Form from "../../components/Form/Form";
import { isInvalidAndTouched } from "../../utils/methods";

const PhoneVerificationScreen = ({ navigation, route }) => {
  const { email, password } = route.params;
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Formik
      initialValues={{
        phone: countryCode + phoneNumber,
      }}
      validationSchema={Yup.object().shape({
        phone: validationSchema.phone,
      })}
      onSubmit={async (values, { setSubmitting, setFieldError }) => {
        setLoading(true);
        setSubmitting(true);
        const attributeList = [
          new CognitoUserAttribute({ Name: "email", Value: email }),
          new CognitoUserAttribute({
            Name: "phone_number",
            Value: values.phone,
          }),
        ];

        try {
          // Sign up the user using the provided credentials and attribute list
          await new Promise((resolve, reject) => {
            UserPool.signUp(
              email,
              password,
              attributeList,
              null,
              (err, result) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(result);
                }
              }
            );
          });

          // If signUp is successful, navigate to the Verification screen
          setLoading(false);
          navigation.navigate("Verification", {
            username: email,
            phoneNumber: phoneNumber,
            password: password,
          });
        } catch (err) {
          // If there is an error, log it and set an error message
          console.error(err);
          setLoading(false);
          setFieldError("general", err.message || "Failed to register.");
        }
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
          <View style={globalStyles.formWrapper} gap={16}>
            <Field error={errors.phone} touched={touched.phone}>
              <Label>Verify your phone number</Label>
              <View style={styles.phoneContainer}>
                <TouchableOpacity
                  style={styles.countryCodeContainer}
                  onPress={() => setShow(true)}
                >
                  <Text>{countryCode}</Text>
                </TouchableOpacity>
                <CountryPicker
                  show={show}
                  style={{
                    modal: {
                      height: 500,
                    },
                  }}
                  pickerButtonOnPress={(item) => {
                    setCountryCode(item.dial_code);
                    handleChange("phone")(item.dial_code + phoneNumber);
                    setShow(false);
                  }}
                />
                <Input
                  placeholder="phone number"
                  value={phoneNumber}
                  onChangeText={(text) => {
                    setPhoneNumber(text);
                    handleChange("phone")(countryCode + text);
                  }}
                  extraStyle={{ width: "75%" }}
                  onBlur={handleBlur("phone")}
                />
              </View>
            </Field>
            <View style={{ marginTop: 16 }}>
              <Button
                title="Send Verification Code"
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

const styles = StyleSheet.create({
  agreementText: {
    fontSize: TEXT_SMALL,
    color: "grey",
    marginTop: 40,
    marginBottom: 40,
  },
  phoneContainer: {
    flexDirection: "row",
  },
  countryCodeContainer: {
    width: "22%",
    justifyContent: "center",
    paddingLeft: 20,
    height: INPUT_HEIGHT,
    borderWidth: 0.5,
    borderColor: FORM_INPUT_GREY,
    fontSize: TEXT_MEDIUM,
    borderRadius: INPUT_RADIUS,
    color: DARK_TEXT,
    marginRight: "3%",
  },
});

export default PhoneVerificationScreen;
