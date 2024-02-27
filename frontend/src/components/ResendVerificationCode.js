import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { TEXT_SMALL } from "../styles/GlobalStyles";
import TextButton from "./Button/TextButton";
import { useState, useEffect } from "react";

const ResendVerificationCode = ({ onPress }) => {
  const resendDelay = 60;
  const [sendable, setSendable] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else {
      setSendable(true);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const startTimer = () => {
    setSendable(false);
    setTimer(resendDelay);
  };

  const onTextButtonPress = () => {
    startTimer();
    onPress();
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Didn't receive a code?</Text>
      {sendable ? (
        <TextButton
          title="Resend verification code"
          onPress={onTextButtonPress}
          extraStyles={styles.textButton}
        ></TextButton>
      ) : (
        <Text style={styles.text}>Resend code in {timer} seconds</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  textButton: {
    fontWeight: "bold",
    fontSize: TEXT_SMALL,
  },
  text: {
    fontWeight: "bold",
    fontSize: TEXT_SMALL,
  },
});

export default ResendVerificationCode;
