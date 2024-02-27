import * as React from "react";
import { StyleSheet, TextInput } from "react-native";
import globalStyles, { FORM_INPUT_GREY } from "../styles/GlobalStyles";

const Input = ({
  placeholder,
  value,
  onChangeText,
  extraStyle,
  autoFocus = false,
  onBlur,
}) => {
  return (
    <TextInput
      style={[globalStyles.input, extraStyle]}
      placeholder={placeholder}
      placeholderTextColor={FORM_INPUT_GREY}
      value={value}
      onChangeText={onChangeText}
      autoFocus={autoFocus}
      mode="outlined"
      autoCapitalize="none"
      onBlur={onBlur}
    ></TextInput>
  );
};

export default Input;
