import React from "react";
import { View, Text } from "react-native";
import Input from "../../components/Input";
import globalStyles from "../../styles/GlobalStyles";
import Button from "../../components/Button/Button";

const EmailVerificationScreen = ({ navigation, route }) => {
  return (
    <View style={globalStyles.formWrapper}>
      <View>
        <Text style={globalStyles.formTitle}>Enter your email address</Text>
        <Input placeholder="Email Address"></Input>
      </View>
      <Button style="largeButton" title="Continue"></Button>
    </View>
  );
};

export default EmailVerificationScreen;
