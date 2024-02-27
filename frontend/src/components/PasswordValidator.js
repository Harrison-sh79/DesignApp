import { useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import globalStyles from "../styles/GlobalStyles";

const PasswordValidator = ({ password, isPasswordValid }) => {
  const requirements = [
    { regex: /^.{8,64}$/, label: "Between 8-64 characters" },
    { regex: /^(?=.*[a-z]).*$/, label: "One lowercase" },
    { regex: /^(?=.*[A-Z]).*$/, label: "One uppercase" },
    { regex: /^(?=.*[0-9]).*$/, label: "One number (0-9)" },
    {
      regex: /^(?=.*[!@#$%^&*]).*$/,
      label: "One special character (!@#$%^&*)",
    },
  ];
  const passwordRequirements = requirements.map((requirement) => {
    return { ...requirement, isMet: requirement.regex.test(password) };
  });
  useEffect(() => {
    if (isPasswordValid) {
      const allRequirementsMet = passwordRequirements.every(
        (requirement) => requirement.isMet
      );
      isPasswordValid(allRequirementsMet);
    }
  }, [password, isPasswordValid]);

  return (
    <View>
      <View>
        <Text style={[globalStyles.hintText, styles.textStyleMedium]}>
          Password Requirements:
        </Text>
        {passwordRequirements.map((requirement, index) => {
          return (
            <Text
              key={index}
              style={[
                globalStyles.hintText,
                password && (requirement.isMet ? styles.met : styles.notMet),
              ]}
            >
              {requirement.isMet ? "✓" : "✕"} {requirement.label}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyleMedium: {
    fontFamily: "Inter-Medium",
    marginBottom: 5,
  },
  met: {
    color: "green",
  },
  notMet: {
    color: "red",
  },
});
export default PasswordValidator;
