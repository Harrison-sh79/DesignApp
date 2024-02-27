import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button/Button";
import globalStyles, { TEXT_MEDIUM } from "../../styles/GlobalStyles";

const PayBillScreen = ({ route, navigation }) => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const { name } = route.params;
  const handleSubmit = () => {
    navigation.navigate("Congrats", {
      text: "Your transaction is done!",
      nextPageName: "Tabs",
      buttonName: "Go Back to Home Page",
    });
  };

  return (
    <View style={globalStyles.formWrapper}>
      <Text style={globalStyles.formTitle}>Pay bill</Text>
      <Text style={styles.payeeName}>{name}</Text>
      <Input
        onChangeText={(text) => setAmount(text)}
        value={amount}
        placeholder="Amount"
      />
      <Input
        onChangeText={(text) => setMessage(text)}
        value={message}
        placeholder="Message"
      />
      <Button title="Pay" style="largeButton" onPress={handleSubmit} />
    </View>
  );
};
const styles = StyleSheet.create({
  payeeName: {
    height: 60,
    marginVertical: 10,
    borderWidth: 1,
    padding: 20,
    borderColor: "#ddd",
    fontSize: TEXT_MEDIUM,
    borderRadius: 20,
    width: "100%",
  },
});

export default PayBillScreen;
