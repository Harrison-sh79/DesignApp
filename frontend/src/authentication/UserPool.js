import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-2_mXt5ELBjo",
  ClientId: "23160ctpin2ao4t2m8se29jmoo",
};

export default new CognitoUserPool(poolData);
