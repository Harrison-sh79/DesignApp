import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import Button from "../components/Button/Button";
import globalStyles from "../styles/GlobalStyles";

const ReplaceCardScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.formWrapper}>
      <View style={styles.textContainer}>
        <Text style={globalStyles.formTitle}>Replace Card</Text>
        <Text style={globalStyles.descriptionText}>
          You need to make a new card application to replace your card.
        </Text>
        <Text style={globalStyles.descriptionText}>
          After activating your new card, your current card will be deactivated.
        </Text>
      </View>
      <Button
        title={"Apply for a new card"}
        style={"largeButton"}
        onPress={() => navigation.navigate("BasicInfo")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    gap: 10,
  },
});

export default ReplaceCardScreen;
