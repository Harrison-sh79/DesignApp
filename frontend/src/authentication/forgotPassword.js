import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../authentication/UserPool";

const forgotPassword = (navigation, username) => {
  const user = new CognitoUser({
    Username: username,
    Pool: UserPool,
  });

  user.forgotPassword({
    onSuccess: (data) => {
      navigation.navigate("VerifyEmail", {
        username,
        codeDestination: data?.CodeDeliveryDetails?.Destination,
      });
    },
    onFailure: (err) => {
      console.error(err);
      switch (err.name) {
        case "LimitExceededException":
          alert("Too many reset password attempts. Please try again later.");
          break;
        case "InvalidParameterException":
          alert("Invalid Email address.");
          break;
        default:
          alert("Failed to reset password. Unknown error.");
          break;
      }
    },
  });
};

export default forgotPassword;
