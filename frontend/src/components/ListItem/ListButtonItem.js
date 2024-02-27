import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import ListItem from "./ListItem";
import globalStyles, {
  BUTTON_RADIUS,
  TEXT_MEDIUM,
} from "../../styles/GlobalStyles";

const ListButtonItem = ({ icon, name, onPress, style = "button" }) => {
  return (
    <ListItem>
      <TouchableOpacity style={styles[style]} onPress={onPress}>
        <Icon name={icon} size={24} color="#000" />
        <View style={styles.textContainer}>
          <Text style={styles.optionText}>{name}</Text>
        </View>
        <Icon name="ios-chevron-forward" size={24} color="#000" />
      </TouchableOpacity>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  optionText: {
    fontSize: TEXT_MEDIUM,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: "100%",
  },
  whiteBG: {
    borderRadius: BUTTON_RADIUS,
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    backgroundColor: "#FFFFFF",
    width: "100%",
    ...globalStyles.shadowBox,
    paddingHorizontal: "8%",
  },
});

export default ListButtonItem;
