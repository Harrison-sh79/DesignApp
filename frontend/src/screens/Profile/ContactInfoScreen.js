import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import globalStyles from "../../styles/GlobalStyles";
import AvatarButton from "../../components/Button/AvatarButton";
import ListEditItem from "../../components/ListItem/ListEditItem";
import { useSelector } from "react-redux";

const ContactInfoScreen = ({ navigation }) => {
  const user = useSelector((state) => state.user);

  const listItems = [
    {
      label: "Name",
      mockValue: "Jonas Macroni",
    },
    {
      label: "Birthdate",
      mockValue: "05 November 1993",
    },
    {
      label: "Gender",
      mockValue: "Male",
    },
    {
      label: "Email",
      value: "Username",
    },
    {
      label: "Phone Number",
      mockValue: "-",
    },
    {
      label: "Address",
      mockValue: "-",
    },
  ];

  return (
    <ScrollView
      style={globalStyles.scrollPageWrapper}
      contentContainerStyle={{ paddingVertical: 20 }}
    >
      <View style={styles.avatarSection}>
        <AvatarButton
          size={130}
          source={require("../../../assets/avatar-demo.png")}
        />
      </View>
      <View>
        {listItems.map((item, index) => {
          return (
            <ListEditItem
              key={index}
              label={item.label}
              value={item.value ? user[item.value] : item.mockValue}
            ></ListEditItem>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default ContactInfoScreen;

const styles = StyleSheet.create({
  avatarSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginVertical: 20,
  },
});
