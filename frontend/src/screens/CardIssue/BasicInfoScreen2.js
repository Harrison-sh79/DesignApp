import { View, Text } from "react-native";
import globalStyles from "../../styles/GlobalStyles";
import Button from "../../components/Button/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import validationSchema from "../../utils/validationSchema";
import DateInput from "../../components/DateInput";
import { isInvalidAndTouched } from "../../utils/methods";
import Form from "../../components/Form/Form";
import Label from "../../components/Form/Label";
import Field from "../../components/Form/Field";

const BasicInfoScreen2 = ({ navigation, route }) => {
  const { firstName, lastName } = route.params;

  return (
    <Formik
      initialValues={{ dob: "" }}
      validationSchema={Yup.object().shape({
        dob: validationSchema.dob,
      })}
      onSubmit={(values, { setSubmitting, setFieldError }) => {
        setTimeout(() => {
          navigation.navigate("BasicInfo3", {
            firstName: firstName,
            lastName: lastName,
            dob: values.dob,
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
              <Field error={errors.dob} touched={touched.dob}>
                <Label>Date of Birth</Label>
                <DateInput
                  onChangeDate={(dob) => {
                    const formattedDate = dob.toISOString().split("T")[0];
                    const event = {
                      target: {
                        name: "dob",
                        value: formattedDate,
                      },
                    };
                    handleChange(event);
                  }}
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

export default BasicInfoScreen2;
