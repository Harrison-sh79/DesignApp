import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  WINTER_TREE,
  DRAGON_GREEN,
  TEXT_LARGE,
  TEXT_MEDIUM,
} from "../../styles/GlobalStyles";
import Icon from "react-native-vector-icons/Ionicons";

const SelectButton = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        mode="contained"
        style={styles.selectBtn}
        onPress={onPress}
      >
        <Text style={styles.textStyle}>{title}</Text>
        <Icon
          name="arrow-forward-circle"
          size={TEXT_LARGE}
          color={DRAGON_GREEN}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 64,
    padding: 20,
    backgroundColor: WINTER_TREE,
    marginBottom: 20,
  },
  selectBtn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textStyle: {
    fontSize: TEXT_MEDIUM,
    fontFamily: "Inter-Medium",
    color: "#000",
  },
});

export default SelectButton;
