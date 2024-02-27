import React, { useEffect } from "react";
import { Text, View } from "react-native";
import globalStyles from "../../../styles/GlobalStyles";
import ImageItem from "../../../components/ImageItem";
import Button from "../../../components/Button/Button";
import {
  CARD_APPLY_STATUS,
  EMAIL_VERIFIED_STATUS,
  CARD_FORM,
} from "../../../utils/globalConstants";

const CardSection = ({
  navigation,
  cardImgSource,
  card,
  cardApplyStatus,
  emailVerifiedStatus,
}) => {
  return (
    <View gap={16}>
      <ImageItem source={cardImgSource} />
      <View gap={16}>
        {emailVerifiedStatus === EMAIL_VERIFIED_STATUS.NOT_VERIFIED && (
          <Text style={[globalStyles.errorText, { textAlign: "center" }]}>
            Email Not Verified!
          </Text>
        )}
        {!card && cardApplyStatus === CARD_APPLY_STATUS.NO_APPLICATION && (
          <Button
            title="Apply Your Card Now"
            style="largeButton"
            onPress={() => navigation.navigate("BasicInfo")}
          />
        )}
        {card && card["card_form"] === CARD_FORM.VIRTUAL && (
          <Button title="Get a Physical Card" style="largeButton" />
        )}
        {card && (
          <Button
            title="Manage Card"
            style="largeButton"
            onPress={() => navigation.navigate("ManageCard")}
          />
        )}
      </View>
    </View>
  );
};

export default CardSection;
