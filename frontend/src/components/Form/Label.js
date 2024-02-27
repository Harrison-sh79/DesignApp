import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import globalStyles from "../../styles/GlobalStyles";

const Label = ({ children }) => {
  return (
    <Text style={[globalStyles.labelTitle, { marginBottom: 10 }]}>
      {children}
    </Text>
  );
};

export default Label;
