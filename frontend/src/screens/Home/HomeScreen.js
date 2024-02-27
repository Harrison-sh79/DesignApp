import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import globalStyles, { BUTTON_RADIUS, ROCK } from "../../styles/GlobalStyles";
import { Avatar } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import {
  PAGE_HORIZONTAL_PADDING,
  CUSTOM_HEADER_HEIGHT,
  TAB_BAR_HEIGHT,
  DRAGON_GREEN,
  TEXT_SMALLER,
  SCROLL_BOTTOM_PADDING,
  ICON_MEDIUM,
  ICON_LARGE,
  FORM_INPUT_GREY,
} from "../../styles/GlobalStyles";
import { CARD_APPLY_STATUS } from "../../utils/globalConstants";
import CustomHeader from "../../navigation/CustomHeader";
import axios from "axios";
import CardSection from "./components/CardSection";
import TextButton from "../../components/Button/TextButton";
import ListItem from "../../components/ListItem/ListItem";

const cardApplyStatusDict = {
  [CARD_APPLY_STATUS.NO_APPLICATION]: "Not Applied",
  [CARD_APPLY_STATUS.PENDING]: "Processing",
  [CARD_APPLY_STATUS.PASSED_INACTIVE]: "Passed",
  [CARD_APPLY_STATUS.REFUSED]: "Refused",
};

export const transactionTypeDict = {
  "e-transfer": "e-Transfer",
  p2p: "P2P",
};

export const getTransactionName = (transaction) => {
  const transactionType = transactionTypeDict[transaction["type"]];
  if (transactionType === "e-Transfer" || transactionType === "P2P") {
    if (transaction["funds_flow"] === "sending") {
      return `${transactionType} to ${transaction["receiver_name"]}`;
    } else {
      return `${transactionType} from ${transaction["initiator_name"]}`;
    }
  } else {
    return transaction["receiver_name"];
  }
};

const HomeScreen = ({ navigation }) => {
  const cardApplyStatus = useSelector((state) => state.cardApplyStatus);
  const emailVerifiedStatus = useSelector((state) => state.emailVerifiedStatus);
  const card = useSelector((state) => state.card);
  const previewTransactions = useSelector((state) => state.previewTransactions);

  return (
    <View style={styles.pageWrapper}>
      <CustomHeader>
        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
          <Ionicons
            name="notifications"
            size={ICON_MEDIUM}
            color={DRAGON_GREEN}
          />
        </TouchableOpacity>
        <Avatar
          rounded
          source={require("../../../assets/avatar-demo.png")}
          size={ICON_LARGE}
          onPress={() => navigation.navigate("Profile")}
        />
      </CustomHeader>

      <ScrollView>
        <View style={styles.scrollWrapper} gap={16}>
          <Text style={globalStyles.pageTitle}>Home</Text>
          <CardSection
            navigation={navigation}
            cardImgSource={require("../../../assets/hero-card.png")}
            card={card}
            cardApplyStatus={cardApplyStatus}
            emailVerifiedStatus={emailVerifiedStatus}
          />
          <View gap={16}>
            <View style={[styles.summaryBox]} gap={16}>
              <ListItem>
                <Text style={globalStyles.labelTitle}>Card Status</Text>
                <Text style={globalStyles.labelTitle}>Card Balance</Text>
              </ListItem>
              <ListItem>
                <Text style={globalStyles.labelTitle}>
                  {card ? "Active" : cardApplyStatusDict[cardApplyStatus]}
                </Text>
                <Text style={globalStyles.labelTitle}>
                  {card ? `$${card.balance}` : "Not Available"}
                </Text>
              </ListItem>
            </View>
          </View>
          <View gap={16}>
            <View style={styles.labelWrapper}>
              <Text style={globalStyles.labelTitle}>Transaction History</Text>
              {card && (
                <TextButton title="View All Transactions" style="smaller" />
              )}
            </View>
            <View style={[styles.transactionBox]}>
              {previewTransactions.length ? (
                previewTransactions.map((transaction, index) => (
                  <ListItem
                    key={index}
                    extraStyles={[
                      styles.transactionItem,
                      index === previewTransactions.length - 1 &&
                        styles.lastTransactionItem,
                    ]}
                  >
                    <Text
                      style={[globalStyles.subText, styles.transactionNameText]}
                      numberOfLines={2}
                      ellipsizeMode="tail"
                    >
                      {getTransactionName(transaction)}
                    </Text>
                    <Text
                      style={[globalStyles.subText]}
                    >{`$${transaction["amount"]}`}</Text>
                  </ListItem>
                ))
              ) : (
                <Text
                  style={[
                    globalStyles.subText,
                    { paddingVertical: 16, textAlign: "center" },
                  ]}
                >
                  No Record
                </Text>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: ROCK,
  },
  scrollWrapper: {
    paddingTop: CUSTOM_HEADER_HEIGHT,
    paddingBottom: TAB_BAR_HEIGHT + SCROLL_BOTTOM_PADDING,
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
  },
  labelWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  smallerTextButton: {
    fontFamily: "Inter-Medium",
    fontSize: TEXT_SMALLER,
  },
  summaryBox: {
    backgroundColor: "#fff",
    borderRadius: BUTTON_RADIUS,
    justifyContent: "center",
    padding: 16,
  },
  transactionBox: {
    backgroundColor: "#fff",
    borderRadius: BUTTON_RADIUS,
    paddingHorizontal: 16,
  },
  transactionItem: {
    borderBottomWidth: 0.5,
    borderBottomColor: ROCK,
    paddingVertical: 16,
  },
  lastTransactionItem: {
    borderBottomWidth: 0,
  },
  transactionNameText: { width: "70%" },
});
