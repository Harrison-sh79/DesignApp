import TextBox from "react-native-password-eye";
import globalStyles from "../styles/GlobalStyles";
import { TEXT_MEDIUM, FORM_INPUT_GREY } from "../styles/GlobalStyles";

const PasswordInput = ({ placeholder, value, onChangeText, onBlur }) => {
  return (
    <TextBox
      containerStyles={globalStyles.input}
      inputStyle={{ fontSize: TEXT_MEDIUM }}
      placeholder={placeholder}
      placeholderTextColor={FORM_INPUT_GREY}
      eyeColor={FORM_INPUT_GREY}
      onChangeText={(text) => onChangeText(text)}
      secureTextEntry
      value={value}
      onBlur={onBlur}
      blurOnSubmit
    />
  );
};

export default PasswordInput;
