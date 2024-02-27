import { View, Text } from "react-native";
import globalStyles from "../../styles/GlobalStyles";
import Button from "../../components/Button/Button";
import Input from "../../components/Input";
import { Formik } from "formik";
import * as Yup from "yup";
import validationSchema from "../../utils/validationSchema";
import Field from "../../components/Form/Field";
import { isInvalidAndTouched } from "../../utils/methods";
import Form from "../../components/Form/Form";
import Label from "../../components/Form/Label";

const BasicInfoScreen = ({ navigation }) => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "" }}
      validationSchema={Yup.object().shape({
        firstName: validationSchema.firstName,
        lastName: validationSchema.lastName,
      })}
      onSubmit={(values, { setSubmitting, setFieldError }) => {
        setTimeout(() => {
          navigation.navigate("BasicInfo2", {
            firstName: values.firstName,
            lastName: values.lastName,
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
          <View style={globalStyles.formWrapper}>
            <Text style={[globalStyles.formTitle, { textAlign: "left" }]}>
              Personal Information
            </Text>
            <View gap={32}>
              <Field error={errors.lastName} touched={touched.lastName}>
                <Label>Legal Last Name</Label>
                <Input
                  onChangeText={handleChange("lastName")}
                  value={values.lastName}
                  onBlur={handleBlur("lastName")}
                />
              </Field>
              <Field error={errors.firstName} touched={touched.firstName}>
                <Label>Legal First Name</Label>
                <Input
                  onChangeText={handleChange("firstName")}
                  value={values.firstName}
                  onBlur={handleBlur("firstName")}
                />
              </Field>
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

export default BasicInfoScreen;
