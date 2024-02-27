import React, { useState } from "react";
import { View, Text } from "react-native";
import Button from "../components/Button/Button";
import globalStyles from "../styles/GlobalStyles";
import VerificationCode from "../components/VerificationCode";
import ResendVerificationCode from "../components/ResendVerificationCode";
import confirmForgotPassword from "../authentication/confirmForgotPassword";
import UserPool from "../authentication/UserPool";
import Icon from "react-native-vector-icons/Ionicons";
import { CognitoUser } from "amazon-cognito-identity-js";
import { LARGER_ICONS } from "../styles/GlobalStyles";

const VerifyEmailScreen = ({ navigation, route }) => {
    const { username } = route.params;
    const [code, setCode] = useState("");

    const resendVerificationCode = () => {
        try {
            const user = new CognitoUser({
                Username: username,
                Pool: UserPool
            })
    
            user.resendConfirmationCode((error, result) => {
                if (error) {
                    alert(error);
                } else {
                    alert("Verification code resent");
                }
            })
        } catch (error) {
            alert("Cannot send verification code, please try again.");
        }
    };

    const handleVerification = async () => {
        confirmForgotPassword(navigation, username, code);
    };

    return (
        <View style={globalStyles.formWrapper}>
            <View style={{ alignItems: "center", marginTop: 16 }}>
                <Icon name="mail-unread-outline" size={LARGER_ICONS} />
            </View>

            <View style={{ alignItems: "center", marginTop: 16 }}>
                <Text style={globalStyles.formTitle}>Enter the 6-digit code.</Text>
                <Text>A verification code has been sent to</Text>
                <Text> {username}.</Text>
                <VerificationCode
                    value={code}
                    setValue={(text) => setCode(text)}
                />
            </View>


            <View style={{ marginTop: 32, alignItems: "center" }} gap={5}>
                <ResendVerificationCode
                  onPress={resendVerificationCode}
                >
                </ResendVerificationCode>
                <Button
                    title="Continue"
                    style="largeButton"
                    onPress={handleVerification} 
                />
            </View>
        </View>
    )
};


export default VerifyEmailScreen;