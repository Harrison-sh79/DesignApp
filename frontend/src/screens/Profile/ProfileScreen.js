import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import globalStyles, { TEXT_MEDIUM } from "../../styles/GlobalStyles";
import Button from "../../components/Button/Button";
import { Avatar } from "react-native-elements";
import ListButtonItem from "../../components/ListItem/ListButtonItem";
import { useDispatch } from "react-redux";
import { clearState } from "../../redux/actions";

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const listItems = [
    {
      icon: "people",
      name: "Contact Info",
      nextPageName: "ContactInfo",
    },
    {
      icon: "wallet",
      name: "Source of Funding info",
      nextPageName: "SourceFunding",
    },
    {
      icon: "help-circle",
      name: "Help",
      nextPageName: "Help",
    },
    {
      icon: "settings",
      name: "Settings",
      nextPageName: "Settings",
    },
    {
      icon: "document",
      name: "Statement and report",
      nextPageName: "Statements",
    },
  ];

  return (
    <ScrollView
      style={globalStyles.scrollPageWrapper}
      contentContainerStyle={{ paddingVertical: 20 }}
    >
      <View>
        <View style={styles.avatarContainer}>
          <Avatar
            rounded
            source={require("../../../assets/avatar-demo.png")}
            size={120}
          />
          <Text style={styles.name}>Jonas Macroni</Text>
        </View>
        <View style={{ gap: 10 }}>
          <View>
            {listItems.map((item, index) => {
              return (
                <ListButtonItem
                  key={index}
                  icon={item.icon}
                  name={item.name}
                  style="whiteBG"
                  onPress={() => navigation.navigate(item.nextPageName)}
                ></ListButtonItem>
              );
            })}
          </View>
          <Button
            title="Log Out"
            style="largeButtonWhite"
            textStyle="black"
            onPress={() => {
              dispatch(clearState());
              navigation.navigate("Welcome");
            }}
          ></Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  avatarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginVertical: 20,
  },
  name: {
    width: "100%",
    textAlign: "center",
    fontSize: TEXT_MEDIUM,
    marginTop: 15,
    color: "#666",
  },
});
