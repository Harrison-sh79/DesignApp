import { useState } from "react";
import { payees } from "./data/payeesDummyData";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Input from "../../components/Input";
import globalStyles, { TEXT_MEDIUM } from "../../styles/GlobalStyles";

const PayBillSearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const renderItem = ({ item }) => {
    const onPress = () => {
      navigation.navigate("Payee", item);
    };
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.payee}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={globalStyles.formWrapper}>
      <Text style={globalStyles.formTitle}>Pay bill</Text>
      <Input
        onChangeText={setSearchQuery}
        value={searchQuery}
        placeholder="name of payee"
      />
      <FlatList
        data={payees.filter((payee) => {
          return payee.name.toLowerCase().includes(searchQuery.toLowerCase());
        })}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  payee: {
    fontSize: TEXT_MEDIUM,
    fontWeight: "bold",
    marginVertical: 20,
  },
});

export default PayBillSearchScreen;
