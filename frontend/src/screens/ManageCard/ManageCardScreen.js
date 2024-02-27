import React, { useState } from "react";
import globalStyles, {
  PROCELAIN_BONE,
  TEXT_MEDIUM,
  TEXT_SMALL,
  CUSTOM_HEADER_HEIGHT,
  TAB_BAR_HEIGHT,
  PAGE_HORIZONTAL_PADDING,
  DARK_TEXT,
} from "../../styles/GlobalStyles";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomHeader from "../../navigation/CustomHeader";
import ImageItem from "../../components/ImageItem";

const ManageCardScreen = ({ navigation }) => {
  const [isCardLocked, setIsCardLocked] = useState(false);

  const listItems = [
    {
      icon: "ios-wallet",
      name: "Add to apple wallet",
      nextPageName: "ApplePay",
    },
    {
      icon: "checkmark",
      name: "Activate card",
      nextPageName: "ActivateCard",
    },
    {
      icon: "keypad",
      name: "Change pin",
      nextPageName: "ChangePin",
    },
    {
      icon: "ios-refresh",
      name: "Replace / Renew card",
      nextPageName: "ReplaceCard",
    },
  ];

  return (
    <View style={styles.pageWrapper}>
      <CustomHeader type="back" navigation={navigation} />

      <ScrollView>
        <View style={styles.scrollWrapper} gap={16}>
          <Text style={globalStyles.pageTitle}>ManageCard</Text>
          <ImageItem source={require("../../../assets/hero-card.png")} />
        </View>
      </ScrollView>
    </View>
  );
};

{
  /* <View style={styles.container}>
<ListItem>
  <Icon name="ios-lock-closed" size={24} color="#000" />
  <View style={styles.textContainer}>
    <Text style={styles.optionText}>Lock Card</Text>
    <Text style={styles.subText}>
      {isCardLocked ? "Card is inactive" : "Card is active"}
    </Text>
  </View>
  <Switch
    value={isCardLocked}
    onValueChangeHandler={setIsCardLocked}
  ></Switch>
</ListItem>
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
</View> */
}

const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: PROCELAIN_BONE,
  },
  scrollWrapper: {
    paddingTop: CUSTOM_HEADER_HEIGHT,
    paddingBottom: TAB_BAR_HEIGHT + 40,
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
  },
});

export default ManageCardScreen;
