import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CountryPicker } from "react-native-country-codes-picker";
import Form from "../components/Form/Form";
import { Formik } from "formik";
import Label from "../components/Form/Label";
import Button from "../components/Button/Button";
import globalStyles from "../styles/GlobalStyles";
import Field from "../components/Form/Field.js";
import Input from "../components/Input";
import validationSchema from "../utils/validationSchema.js";
import * as Yup from "yup";
import { isInvalidAndTouched } from "../utils/methods";

const ForgotUsernameScreen = ({ navigation, route }) => {
  const [countryCode, setCountryCode] = useState("+1");
  const [number, setNumber] = useState("");
  const [showCountryCode, setShowCountryCode] = useState(false);

  return (
    <Formik
      initialValues={{
        phone: countryCode + number,
      }}
      validationSchema={Yup.object().shape({
        phone: validationSchema.phone,
      })}
    >
      {({
          handleChange,
          handleSubmit,
          errors,
          touched
        }) => (
          <Form>
            <View style={globalStyles.formWrapper}>
              <Field error={errors.phone} touched={touched.phone}>
              
                <View style={{ marginBottom: 16 }}>
                  <Text style={globalStyles.mediumTitle}>
                    Let's make sure it's you.
                  </Text>
                  <Text style={globalStyles.recoverySubText}>
                    We will text your email to your number once you are verified
                  </Text>
                </View>

                <View>
                  <Label>Verify your phone number</Label>
                  <View
                    columnGap={10}
                    style={{
                      flexDirection: "row"
                    }}>

                    <View style={{ flex: 2 }}>
                      <TouchableOpacity style={globalStyles.countryCodeContainer}
                        onPress={() => setShowCountryCode(true)}
                        onChangeText={(text) => setCountryCode(text)}
                      >
                        <Text>{countryCode}</Text>
                      </TouchableOpacity>

                      <CountryPicker
                        show={showCountryCode}
                        style={{
                          modal: {
                            height: 500,
                          },
                        }}
                        pickerButtonOnPress={(item) => {
                          setCountryCode(item.dial_code);
                          handleChange("phone")(item.dial_code + number);
                          setShowCountryCode(false);
                        }} />
                    </View>

                    <View style={{ flex: 8 }}>
                      <Input
                        placeholder="Phone number"
                        onChangeText={(text) => {
                          setNumber(text)
                          handleChange("phone")(countryCode + text);
                        }}
                      />
                    </View>

                  </View>
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
        )
      }
    </Formik>
  );
};

export default ForgotUsernameScreen;