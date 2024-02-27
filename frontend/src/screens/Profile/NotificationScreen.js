import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import globalStyles, { TEXT_MEDIUM } from "../../styles/GlobalStyles";
import Button from "../../components/Button/Button";
import { Avatar } from "react-native-elements";
import ListNotificationItem from "../../components/ListItem/ListNotificationItem";

const NotificationScreen = ({ navigation }) => {
  const listItems = [
    {
      imageSrc: require("../../../assets/noti1.png"),
      title: "Apple stocks just increased. Check it out now.",
      time: "15min ago",
    },
    {
      imageSrc: require("../../../assets/noti2.png"),
      title: "Check out today’s best investor. You’ll learn from him",
      time: "3min ago",
    },
    {
      imageSrc: require("../../../assets/noti3.png"),
      title: "Where do you see yourselfin the next ages.",
      time: "30 secs ago",
    },
  ];

  return (
    <ScrollView
      style={globalStyles.scrollPageWrapper}
      contentContainerStyle={{ paddingVertical: 20 }}
    >
      <View>
        <View style={{ gap: 10 }}>
          <View>
            {listItems.map((item, index) => {
              return (
                <ListNotificationItem
                  key={index}
                  imageSrc={item.imageSrc}
                  title={item.title}
                  time={item.time}
                ></ListNotificationItem>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default NotificationScreen;

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
