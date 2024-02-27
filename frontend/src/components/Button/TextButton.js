import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import globalStyles, {
  DRAGON_GREEN,
  TEXT_SMALLER,
} from "../../styles/GlobalStyles";

const TextButton = ({ onPress, title, style = "small", extraStyles }) => {
  const styles = StyleSheet.create({
    small: {
      ...globalStyles.buttonText,
    },
    smaller: {
      fontFamily: "Inter-Medium",
      fontSize: TEXT_SMALLER,
      color: DRAGON_GREEN,
    },
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles[style], extraStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
