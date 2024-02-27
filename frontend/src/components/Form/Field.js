import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import globalStyles, { ERROR_RED } from "../../styles/GlobalStyles";
import Icon from "react-native-vector-icons/Ionicons";

const Field = ({ children, error, touched, extraStyles }) => {
  return (
    <View style={[styles.field, extraStyles]}>
      {children}
      {error && touched && (
        <View style={styles.errorContainer}>
          <Icon name="alert-circle-outline" size={20} color={ERROR_RED} />
          <Text style={[globalStyles.errorText, styles.text]}>{error}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    position: "relative",
  },
  errorContainer: {
    position: "absolute",
    bottom: -22,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 20,
  },
  text: {
    marginLeft: 2,
    lineHeight: 22,
  },
});

export default Field;
