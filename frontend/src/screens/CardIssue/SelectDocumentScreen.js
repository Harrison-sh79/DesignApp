import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import globalStyles, {
  DRAGON_GREEN,
  TEXT_MEDIUM,
  TEXT_SMALL,
} from "../../styles/GlobalStyles";
import SelectButton from "../../components/Button/SelectButton";
import Icon from "react-native-vector-icons/Ionicons";

const SelectDocumentScreen = ({ navigation }) => {
  return (
    <View style={[globalStyles.formWrapper]}>
      <Text style={[globalStyles.formTitle, { textAlign: "left" }]}>
        Select Documents to Upload
      </Text>
      <Text style={[globalStyles.descriptionText, { marginBottom: 20 }]}>
        To verify your status in Canada, you will need to upload one of the two
        permits and your passport.
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
        title="Study Permit"
        onPress={() => navigation.navigate("UploadLicense")}
      />
      <SelectButton
        title="Work Permit"
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

export default SelectDocumentScreen;
