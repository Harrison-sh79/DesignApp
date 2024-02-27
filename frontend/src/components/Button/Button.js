import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import globalStyles, {
  DRAGON_GREEN,
  ROCK,
  FORM_INPUT_GREY,
  BUTTON_RADIUS,
  TEXT_MEDIUM,
  BUTTON_HEIGHT,
  PROCELAIN_BONE,
} from "../../styles/GlobalStyles";
import LottieView from "lottie-react-native";

const sharedButtonStyle = {
  borderRadius: BUTTON_RADIUS,
  // display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: BUTTON_HEIGHT,
};

const sharedTextStyle = {
  fontSize: TEXT_MEDIUM,
  fontFamily: "Inter-Medium",
};

const buttonStyles = StyleSheet.create({
  button1: {
    ...sharedButtonStyle,
    backgroundColor: DRAGON_GREEN,
    width: "30%",
  },
  largeButton: {
    ...sharedButtonStyle,
    backgroundColor: DRAGON_GREEN,
    width: "100%",
  },
  largeButtonWhite: {
    ...sharedButtonStyle,
    backgroundColor: "#FFF",
    width: "100%",
    borderRadius: BUTTON_RADIUS,
    ...globalStyles.shadowBox,
  },
  loginButton: {
    ...sharedButtonStyle,
    width: "100%",
    borderWidth: 1,
    borderColor: DRAGON_GREEN,
  },
  disabled: {
    backgroundColor: ROCK,
  },
});

const textStyles = StyleSheet.create({
  white: {
    ...sharedTextStyle,
    color: PROCELAIN_BONE,
  },
  black: {
    ...sharedTextStyle,
    color: "#000",
  },
  green: {
    ...sharedTextStyle,
    color: DRAGON_GREEN,
  },
  grey: {
    ...sharedTextStyle,
    color: FORM_INPUT_GREY,
  },
});

const Button = ({
  title,
  onPress,
  style = "button1",
  textStyle = "white",
  disabled = false,
  loading = false,
}) => {
  return (
    <TouchableOpacity
      mode="contained"
      onPress={onPress}
      style={[buttonStyles[style], disabled && buttonStyles.disabled]}
      disabled={disabled || loading}
    >
      {loading ? (
        <LottieView
          source={require("../../../assets/lottie/loading-animation.json")}
          style={{ width: "100%", height: "100%" }}
          autoPlay
          loop
        />
      ) : (
        <Text style={[textStyles[textStyle], disabled && textStyles.grey]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
