import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TEXT_MEDIUM } from "../../styles/GlobalStyles";

const ModalItem = ({ item, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image
          source={require("../../../assets/dollar-coin-1--accounting-billing-payment-cash-coin-currency-money-finance.png")}
          style={styles.icon}
        />
        <Text style={styles.buttonText}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    padding: 20,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  buttonText: {
    fontSize: TEXT_MEDIUM,
    flexShrink: 1,
  },
});

export default ModalItem;
