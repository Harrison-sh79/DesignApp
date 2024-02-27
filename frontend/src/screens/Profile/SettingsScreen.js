import React, { useState } from "react";
import globalStyles, {
  TEXT_SMALLER,
  TEXT_MEDIUM,
} from "../../styles/GlobalStyles";
import { View, Text, StyleSheet } from "react-native";
import ListButtonItem from "../../components/ListItem/ListButtonItem";
import ListItem from "../../components/ListItem/ListItem";
import Icon from "react-native-vector-icons/Ionicons";

const SettingsScreen = ({ navigation }) => {
  const listItems = [
    {
      icon: "notifications",
      name: "Notifications",
      nextPageName: "NotificationSetting",
    },
    {
      icon: "bug",
      name: "Report a bug",
      nextPageName: "BugReport",
    },
    {
      icon: "copy",
      name: "Agreement",
      nextPageName: "Agreement",
    },
    {
      icon: "desktop",
      name: "About",
      nextPageName: "About",
    },
    {
      icon: "moon",
      name: "Appearance",
      nextPageName: "Appearance",
    },
  ];

  return (
    <View style={[globalStyles.formWrapper]}>
      <View style={styles.container}>
        {listItems.map((item, index) => {
          return (
            <ListButtonItem
              key={index}
              icon={item.icon}
              name={item.name}
              onPress={() => navigation.navigate(item.nextPageName)}
            ></ListButtonItem>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  optionText: {
    fontSize: TEXT_MEDIUM,
  },
  subText: {
    fontSize: TEXT_SMALLER,
    color: "grey",
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
});

export default SettingsScreen;
