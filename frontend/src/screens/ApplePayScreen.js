import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import Button from "../components/Button/Button";
import globalStyles from "../styles/GlobalStyles";
import ApplePayIcon from "../../assets/apple-pay.svg";
import Field from "../components/Form/Field";
import Label from "../components/Form/Label";

const ApplePayScreen = ({ navigation, route }) => {
  return (
    <View style={globalStyles.formWrapper}>
      <View>
        <Field>
          <Label>Set up Apple Pay</Label>
          <ApplePayIcon width={80} />
        </Field>
        <Field>
          <View style={styles.descriptionContainer}>
            <Label>How to set up on your phone</Label>
            <Text style={globalStyles.descriptionText}>
              1. Open your Apple Wallet
            </Text>
            <Text style={globalStyles.descriptionText}>
              2. Tap the '+' icon to add a new card
            </Text>
            <Text style={globalStyles.descriptionText}>
              3. Scan your physical card or manually enter your Virtual Card
              details
            </Text>
            <Text style={globalStyles.descriptionText}>
              4. You will receive a verification email; follow the instructions
              to verify
            </Text>
          </View>
        </Field>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  descriptionContainer: {
    gap: 10,
  },
});

export default ApplePayScreen;
