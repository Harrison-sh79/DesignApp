import { CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "../authentication/UserPool";

const confirmForgotPassword = (navigation, username, code) => {
    const user = new CognitoUser({
        Username: username,
        Pool: UserPool,
    });

    user.getAttributeVerificationCode('email', {
        onSuccess: (data) => {
            navigation.navigate("ResetPassword", {
                username,
                data
            });
        },
        onFailure: (error) => {
            console.log(error);
            alert(error);
        },
        inputVerificationCode: () => {
            console.log(user.ConfirmationCode);
            user.verifyAttribute('email', code, this);
        }
    });
};

export default confirmForgotPassword;