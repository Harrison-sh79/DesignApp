import { View, Text, StyleSheet } from "react-native";
import globalStyles, {
  DARK_TEXT,
  FORM_INPUT_GREY,
  INPUT_HEIGHT,
  INPUT_RADIUS,
  TEXT_MEDIUM,
} from "../../styles/GlobalStyles";
import Button from "../../components/Button/Button";
import Input from "../../components/Input";
import { Formik } from "formik";
import * as Yup from "yup";
import validationSchema from "../../utils/validationSchema";
import Field from "../../components/Form/Field";
import { useState } from "react";
import { isInvalidAndTouched } from "../../utils/methods";
import Form from "../../components/Form/Form";
import Label from "../../components/Form/Label";
import RNPickerSelect from "react-native-picker-select";
import { provinceList } from "./data/provinceList";
import axios from "axios";

const baseUrl = process.env.EXPO_PUBLIC_PRODUCTION;

const BasicInfoScreen3 = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const { firstName, lastName, dob } = route.params;
  const userID = 1;

  const handleUserInfo = async (values) => {
    setLoading(true);
    console.log({
      first_name: firstName,
      last_name: lastName,
      date_of_birth: dob,
      physical_address: {
        address1: values.address1,
        address2: values.address2,
        city: values.city,
        province: values.province,
        postal: values.postalCode,
      },
    });
    try {
      const response = await axios.post(`${baseUrl}/v1/user_info/${userID}`, {
        first_name: firstName,
        last_name: lastName,
        date_of_birth: dob,
        physical_address: {
          address1: values.address1,
          address2: values.address2,
          city: values.city,
          province: values.province,
          postal: values.postalCode,
        },
      });
      console.log(response.data);
      setLoading(false);
      navigation.navigate("SelectStatus");
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <Formik
      initialValues={{
        address1: "",
        address2: "",
        city: "",
        province: "",
        postalCode: "",
      }}
      validationSchema={Yup.object().shape({
        address1: validationSchema.address,
        city: validationSchema.city,
        province: validationSchema.province,
        postalCode: validationSchema.postalCode,
      })}
      onSubmit={(values, { setSubmitting, setFieldError }) => {
        setTimeout(() => {
          handleUserInfo(values);
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
            <Text style={[globalStyles.formTitle, { textAlign: "left" }]}>
              Personal Information
            </Text>
            <View gap={32} style={{ flex: 1 }}>
              <Field error={errors.address1} touched={touched.address1}>
                <Label>Street Address (No P.O.Box)</Label>
                <Input
                  onChangeText={handleChange("address1")}
                  value={values.address1}
                  onBlur={handleBlur("address1")}
                />
              </Field>
              <View>
                <Input
                  placeholder="Apt/Suite #"
                  onChangeText={handleChange("address2")}
                  value={values.address2}
                  onBlur={handleBlur("address2")}
                />
              </View>
              <Field error={errors.city} touched={touched.city}>
                <Label>City</Label>
                <Input
                  onChangeText={handleChange("city")}
                  value={values.city}
                  onBlur={handleBlur("city")}
                />
              </Field>
              <View style={styles.container}>
                <View style={{ flex: 1, marginRight: 8 }}>
                  <Field
                    error={errors.province}
                    touched={touched.province}
                    onBlur={handleBlur("province")}
                  >
                    <Label>Province</Label>
                    <RNPickerSelect
                      onValueChange={handleChange("province")}
                      items={provinceList}
                      style={{ ...pickerSelectStyles, flex: 1 }}
                    />
                  </Field>
                </View>
                <View style={{ flex: 1 }}>
                  <Field error={errors.postalCode} touched={touched.postalCode}>
                    <Label>Postal Code</Label>
                    <Input
                      onChangeText={handleChange("postalCode")}
                      value={values.postalCode}
                      onBlur={handleBlur("postalCode")}
                    />
                  </Field>
                </View>
              </View>
              <View style={{ flex: 1, marginTop: 20 }}>
                <Button
                  title="Continue"
                  style="largeButton"
                  onPress={handleSubmit}
                  disabled={isInvalidAndTouched(errors, touched)}
                  loading={loading}
                />
              </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: INPUT_HEIGHT,
    borderWidth: 0.5,
    paddingHorizontal: 20,
    borderColor: FORM_INPUT_GREY,
    borderRadius: INPUT_RADIUS,
    width: "100%",
    fontFamily: "Inter-Regular",
    fontSize: TEXT_MEDIUM,
    color: DARK_TEXT,
  },
  inputAndroid: {
    height: INPUT_HEIGHT,
    borderWidth: 0.5,
    paddingHorizontal: 20,
    borderColor: FORM_INPUT_GREY,
    borderRadius: INPUT_RADIUS,
    width: "100%",
    fontFamily: "Inter-Regular",
    fontSize: TEXT_MEDIUM,
    color: DARK_TEXT,
  },
});

export default BasicInfoScreen3;
