import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import Button from "../components/Button/Button";
import globalStyles from "../styles/GlobalStyles";
import { handleLogin } from "./LoginScreen";
import { useDispatch } from "react-redux";

const CongratsScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { text, nextPageName, buttonName, username, password } = route.params;
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (text.toLowerCase().includes("created your account")) {
      setLoading(true);
      await handleLogin(
        username,
        password,
        (setFieldError = null),
        navigation,
        dispatch
      );
      setLoading(false);
    } else {
      navigation.navigate(nextPageName);
    }
  };

  return (
    <View style={globalStyles.formWrapper}>
      <View style={styles.container}>
        <Image source={require("../../assets/congrats.png")} />
        <Text style={globalStyles.formTitle}>{text}</Text>
        <Button
          title={buttonName}
          onPress={handleSubmit}
          style="largeButton"
          loading={loading}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    marginBottom: 20,
  },
});

export default CongratsScreen;
