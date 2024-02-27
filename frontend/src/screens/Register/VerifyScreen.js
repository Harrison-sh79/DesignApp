import { useState } from "react";
import { Image, View } from "react-native";
import { Text } from "react-native-paper";
import UserPool from "../../authentication/UserPool";
import { CognitoUser } from "amazon-cognito-identity-js";
import globalStyles from "../../styles/GlobalStyles";
import Button from "../../components/Button/Button";
import VerificationCode from "../../components/VerificationCode";
import ResendVerificationCode from "../../components/ResendVerificationCode";

const VerifyScreen = ({ route, navigation }) => {
  const { username, phoneNumber, password } = route.params;
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerification = async () => {
    setLoading(true);
    try {
      const user = new CognitoUser({
        Username: username,
        Pool: UserPool,
      });
      user.confirmRegistration(code, true, (err, data) => {
        if (err) {
          setLoading(false);
          console.log(err);
          alert("Couldn't verify account");
        } else {
          setLoading(false);
          console.log(data);
          navigation.navigate("Congrats", {
            text: "You have created your account!",
            nextPageName: "Tabs",
            buttonName: "Enter app",
            username: username,
            password: password,
          });
        }
      });
    } catch (error) {
      console.error("Verification failed: ", error);
    }
  };

  const resendVerificationCode = () => {
    setLoading(true);
    try {
      const user = new CognitoUser({
        Username: username,
        Pool: UserPool,
      });
      user.resendConfirmationCode((err, result) => {
        if (err) {
          console.log(err);
          setLoading(false);
          alert("Couldn't resend code");
        } else {
          console.log("Sent verification code " + result);
          setLoading(false);
          alert("Verification code sent");
        }
      });
    } catch (error) {
      setLoading(false);
      console.error("Resending verification code failed.");
    }
  };

  return (
    <View style={[globalStyles.formWrapper]}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image source={require("../../../assets/phone-portrait-sharp.png")} />
      </View>
      <View style={{ flex: 2 }}>
        <Text style={globalStyles.formTitle}>Enter the 6-digit code.</Text>
        <Text>A verification code has been sent to {phoneNumber}</Text>
        <VerificationCode value={code} setValue={(text) => setCode(text)} />
      </View>
      <ResendVerificationCode
        onPress={() => resendVerificationCode()}
      ></ResendVerificationCode>
      <View style={{ flex: 2, alignItems: "center", marginTop: 20 }}>
        <Button
          title="Create Account"
          style="largeButton"
          onPress={handleVerification}
          loading={loading}
        />
      </View>
    </View>
  );
};

export default VerifyScreen;
