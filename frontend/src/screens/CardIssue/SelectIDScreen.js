import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import globalStyles, {
  TEXT_LARGE,
  DRAGON_GREEN,
  TEXT_MEDIUM,
  TEXT_SMALL,
} from "../../styles/GlobalStyles";
import SelectButton from "../../components/Button/SelectButton";
import Icon from "react-native-vector-icons/Ionicons";

const SelectIDScreen = ({ navigation }) => {
  return (
    <View style={[globalStyles.formWrapper]}>
      <Text style={[globalStyles.formTitle, { textAlign: "left" }]}>
        Select an ID to Upload
      </Text>
      <View style={styles.container}>
        <TouchableOpacity mode="contained" style={styles.help}>
          <Icon
            name="help-circle-outline"
            size={TEXT_MEDIUM}
            color={DRAGON_GREEN}
          />
          <Text style={styles.textStyle}>Why we need this?</Text>
        </TouchableOpacity>
      </View>
      <SelectButton
        title="Driver's License"
        onPress={() => navigation.navigate("UploadLicense")}
      />
      <SelectButton
        title="Canadian Passport"
        onPress={() => navigation.navigate("UploadLicense")}
      />
      <SelectButton
        title="Permanent Residence Card"
        onPress={() => navigation.navigate("UploadLicense")}
      />
      <View style={styles.lockContainerStyle}>
        <Icon name="lock-closed-sharp" size={TEXT_MEDIUM} />
        <Text style={styles.lockTextStyle}>
          Your information is secured with encryption
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    marginBottom: 20,
  },
  help: {
    width: 156,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textStyle: {
    fontSize: TEXT_MEDIUM,
    fontFamily: "Inter-Medium",
  },
  lockContainerStyle: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  lockTextStyle: {
    fontSize: TEXT_SMALL,
    fontFamily: "Inter-Medium",
  },
});

export default SelectIDScreen;
