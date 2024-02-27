import { View } from "react-native";
import { Text } from "react-native-paper";
import Button from "../components/Button/Button";
import globalStyles from "../styles/GlobalStyles";
import { useState } from "react";
import { Formik } from "formik";
import validationSchema from "../utils/validationSchema";
import * as Yup from "yup";
import Field from "../components/Form/Field";
import PasswordInput from "../components/PasswordInput";
import Form from "../components/Form/Form";
import { isInvalidAndTouched } from "../utils/methods";

const ChangePinScreen = ({ navigation }) => {
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");

  const changePin = (pin) => {
    // TODO: Add code to change pin here.
    alert("Your PIN has been changed");
    navigation.navigate("ManageCard");
  };

  return (
    <Formik
      initialValues={{ pin, confirmPin }}
      validationSchema={Yup.object().shape({
        pin: validationSchema.pin,
        confirmPin: validationSchema.pin,
      })}
      onSubmit={(values, { setSubmitting, setFieldError }) => {
        if (values.pin !== values.confirmPin) {
          setFieldError("confirmPin", "The PINs do not match");
          return;
        }
        changePin(values.pin);
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
              <Text style={globalStyles.formTitle}>Change PIN</Text>
              <Field error={errors.pin} touched={touched.pin}>
                <PasswordInput
                  placeholder={"Set new PIN"}
                  value={values.pin}
                  onChangeText={(text) => {
                    setPin(pin);
                    handleChange("pin")(text);
                  }}
                  onBlur={handleBlur("pin")}
                />
              </Field>
              <Field error={errors.confirmPin} touched={touched.confirmPin}>
                <PasswordInput
                  placeholder={"Confirm new PIN"}
                  value={values.confirmPin}
                  onChangeText={(text) => {
                    setConfirmPin(text);
                    handleChange("confirmPin")(text);
                  }}
                  onBlur={handleBlur("confirmPin")}
                />
              </Field>
            </View>
            <Button
              title={"Done"}
              style={"largeButton"}
              onPress={handleSubmit}
              disabled={isInvalidAndTouched(errors, touched)}
            ></Button>
          </View>
        </Form>
      )}
    </Formik>
  );
};

export default ChangePinScreen;
