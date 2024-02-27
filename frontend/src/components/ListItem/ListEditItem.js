import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import ListItem from "./ListItem";
import TextButton from "../Button/TextButton";
import { TEXT_SMALL, TEXT_MEDIUM } from "../../styles/GlobalStyles";

const ListEditItem = ({ label, value, onPress }) => {
  return (
    <ListItem>
      <View style={styles.editItem} onPress={onPress}>
        <View style={styles.textContainer}>
          <Text style={styles.labelText}>{label}</Text>
          <Text style={styles.optionText}>{value}</Text>
        </View>
        <TextButton title="Change" extraStyles={{ fontSize: TEXT_MEDIUM }} />
      </View>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  labelText: {
    fontSize: TEXT_SMALL,
    marginBottom: 5,
  },
  optionText: {
    fontSize: TEXT_MEDIUM,
  },
  textContainer: { flex: 1 },
  editItem: {
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: "100%",
    borderBottomWidth: 1,
    borderBlockColor: "#333",
  },
});

export default ListEditItem;
