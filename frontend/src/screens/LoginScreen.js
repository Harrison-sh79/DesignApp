import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TextButton from "../components/Button/TextButton";
import globalStyles from "../styles/GlobalStyles";
import Label from "../components/Form/Label";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button/Button";
import Field from "../components/Form/Field";
import { Formik } from "formik";
import * as Yup from "yup";
import { login } from "../authentication/Login";
import validationSchema from "../utils/validationSchema";
import Form from "../components/Form/Form";
import { isInvalidAndTouched } from "../utils/methods";
import { BASE_URL } from "../utils/globalConstants";
import axios from "axios";
import { setValue } from "../redux/actions";
import { useDispatch } from "react-redux";

export const handleLogin = async (
  email,
  password,
  setFieldError,
  navigation,
  dispatch
) => {
  try {
    /** Use cognitoId to get userId */
    const { cognitoId } = await login(email, password);
    const userIdRes = await axios.get(`${BASE_URL}/v1/user_id`, {
      params: { cognito_id: cognitoId },
    });
    const userId = userIdRes.data?.data?.id;

    /** Utilize userId to load home page related data and put into redux state */
    const requestsConfig = [
      { url: `${BASE_URL}/v1/home_info`, params: { id: userId } },
      {
        url: `${BASE_URL}/v1/transactions/page`,
        params: { id: userId, page: 1, limit: 5 },
      },
    ];
    // Create a list of promises using axios.get for each URL and its parameters
    const requests = requestsConfig.map((config) =>
      axios.get(config.url, { params: config.params })
    );
    const [homeInfoRes, transactionRes] = await Promise.all(requests);
    const homeInfoData = homeInfoRes.data?.data;
    const previewTransactions = transactionRes.data?.data?.transactions;
    dispatch(setValue("userId", userId));
    dispatch(setValue("cardApplyStatus", homeInfoData?.["card_apply_status"]));
    dispatch(setValue("emailVerifiedStatus", homeInfoData?.["email_verified"]));
    if (homeInfoData.cards?.length > 0) {
      dispatch(setValue("card", homeInfoData.cards[0]));
    }
    dispatch(setValue("previewTransactions", previewTransactions));
    navigation.navigate("Tabs");
  } catch (err) {
    console.log(err);
    if (setFieldError) {
      setFieldError("password", "Incorrect email or password");
    }
  }
};

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Formik
      initialValues={{ email: email, password: password }}
      validationSchema={Yup.object().shape({
        email: validationSchema.email,
        password: validationSchema.password,
      })}
      onSubmit={async (values, { setSubmitting, setFieldError }) => {
        setLoading(true);
        await handleLogin(
          values.email,
          values.password,
          setFieldError,
          navigation,
          dispatch
        );
        setLoading(false);
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
            <View gap={16}>
              <Text style={globalStyles.mediumTitle}>Welcome Back!</Text>

              <View gap={32}>
                <Field error={errors.email} touched={touched.email}>
                  <Label>Enter Your Email</Label>
                  <Input
                    value={values.email}
                    onChangeText={(text) => {
                      setEmail(text);
                      handleChange("email")(text);
                    }}
                    placeholder="e.g. name@gmail.com"
                    onBlur={handleBlur("email")}
                  />
                </Field>
                <Field error={errors.password} touched={touched.password}>
                  <Label>Enter Your Password</Label>
                  <PasswordInput
                    placeholder="Your Password"
                    onChangeText={(text) => {
                      setPassword(text);
                      handleChange("password")(text);
                    }}
                    value={values.password}
                    onBlur={handleBlur("password")}
                  />
                </Field>
                <View style={styles.buttonContainer}>
                  <Button
                    style="largeButton"
                    title="Log in"
                    onPress={handleSubmit}
                    disabled={isInvalidAndTouched(errors, touched)}
                    loading={loading}
                  ></Button>
                </View>
              </View>

              <View style={styles.forgotPasswordContainer}>
                <TextButton
                  title="Forgot E-mail?"
                  onPress={() =>
                    navigation.navigate("ForgotUsername", {
                      title:
                        "Choose a verification method to get your username",
                    })
                  }
                />
                <TextButton
                  title="Forgot Password?"
                  onPress={() =>
                    navigation.navigate("ForgotPassword", {
                      title:
                        "Choose a verification method to reset your password",
                    })
                  }
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
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default LoginScreen;
