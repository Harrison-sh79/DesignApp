import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import Button from "../components/Button/Button";
import ImageItem from "../components/ImageItem";
import globalStyles, {
  TEXT_SMALL,
  PAGE_HORIZONTAL_PADDING,
  getScreenType,
} from "../styles/GlobalStyles";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View
      style={[
        styles.pageWrapper,
        getScreenType() === "se" && styles.smallPageVerticalPadding,
      ]}
    >
      <ImageItem
        source={require("../../assets/welcome.png")}
        extraStyles={styles.image}
      />
      <View gap={16}>
        <Text style={[globalStyles.largeTitle, { textAlign: "center" }]}>
          Stay on Top of Your Finance with Hero.
        </Text>
        <Text style={styles.bodyText}>
          Whether you're juggling different currencies or just keeping track of
          your daily spending,{"\n"}Hero App does it all.
        </Text>
      </View>
      <View style={{ width: "100%" }}>
        <View gap={16}>
          <Button
            title="Login"
            style="loginButton"
            textStyle="green"
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            title="Create Account"
            style="largeButton"
            onPress={() => {
              navigation.navigate("CreateAccount");
            }}
          ></Button>
        </View>
        <View>
          <Text style={[globalStyles.agreementText, styles.welcomeAgreement]}>
            By creating an account, you agree to our{" "}
            <Text style={styles.undeline}>Terms of Use</Text> and{" "}
            <Text style={styles.undeline}>Privacy Policy</Text>.
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    paddingTop: 100,
    paddingBottom: 60,
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    justifyContent: "space-between",
    alignItems: "center",
  },
  smallPageVerticalPadding: {
    paddingTop: 50,
    paddingBottom: 40,
  },
  image: {
    width: 300,
    maxWidth: "85%",
  },
  bodyText: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: TEXT_SMALL,
    fontFamily: "Inter-Medium",
    fontWeight: 200,
  },
  welcomeAgreement: {
    marginTop: 10,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  undeline: {
    textDecorationLine: "underline",
    ...globalStyles.agreementText,
  },
});

export default WelcomeScreen;
