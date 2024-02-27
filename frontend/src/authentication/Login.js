import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "./UserPool";

export const login = async (Username, Password) => {
  return new Promise((resolve, reject) => {
    const user = new CognitoUser({
      Username,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username,
      Password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (result) => {
        user.getUserData((err, userData) => {
          if (err) {
            console.error("Error fetching user attributes: " + err);
          } else {
            const cognitoId = userData.UserAttributes?.find(
              (obj) => obj.Name === "sub"
            )?.Value;
            resolve({ cognitoId });
          }
        });
      },
      onFailure: (err) => {
        console.log("login failure", err);
        reject(err);
        console.log(err);
      },
      newPasswordRequired: (data) => {
        // console.log("new password required", data);
        resolve(data);
      },
    });
  });
};
