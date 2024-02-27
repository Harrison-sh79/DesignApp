import { Text, View } from "react-native";
import globalStyles from "../../styles/GlobalStyles";
import SelectButton from "../../components/Button/SelectButton";

const SelectStatusScreen = ({ navigation }) => {
  return (
    <View style={[globalStyles.formWrapper, { justifyContent: "flex-start" }]}>
      <Text style={[globalStyles.formTitle, { textAlign: "left" }]}>
        Select your status
      </Text>
      <SelectButton
        title="Canadian Citizen / PR"
        onPress={() => navigation.navigate("SelectID")}
      />

      <SelectButton
        title="International Student / Worker"
        onPress={() => navigation.navigate("SelectDocument")}
      />
    </View>
  );
};

export default SelectStatusScreen;
