import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import ListItem from "./ListItem";
import { TEXT_MEDIUM } from "../../styles/GlobalStyles";

const ListNotificationItem = ({ imageSrc, title, time }) => {
  return (
    <ListItem extraStyles={styles.list}>
      <Image source={imageSrc} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.notiTitle}>{title}</Text>
      </View>
      <Text style={styles.optionText}>{time}</Text>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: 20,
    borderBottomColor: "#aaa",
    borderBottomWidth: 1,
  },
  image: {
    width: 70,
    height: 70,
  },
  notiTitle: {
    fontSize: TEXT_MEDIUM,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  optionText: {
    color: "#333",
  },
});

export default ListNotificationItem;
