import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  CUSTOM_HEADER_HEIGHT,
  PAGE_HORIZONTAL_PADDING,
  ROCK,
  PROCELAIN_BONE,
  DARK_TEXT,
  ICON_MEDIUM,
} from "../styles/GlobalStyles";
import { BlurView } from "expo-blur";
import Ionicons from "react-native-vector-icons/Ionicons";

const CustomHeader = ({ children, type = "main", navigation }) => {
  return (
    <BlurView intensity={50} style={styles.wrapper}>
      <View style={[styles.contentContainer, styles[type]]}>
        {type === "back" && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-outline"
              size={ICON_MEDIUM}
              color={DARK_TEXT}
            />
          </TouchableOpacity>
        )}
        {children}
      </View>
      <View
        style={[backgroundStyles.backgroundContainer, backgroundStyles[type]]}
      ></View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: CUSTOM_HEADER_HEIGHT,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
    width: "100%",
    height: CUSTOM_HEADER_HEIGHT,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  main: {
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
  },
  back: {
    paddingHorizontal: PAGE_HORIZONTAL_PADDING - 10,
  },
});

const backgroundStyles = StyleSheet.create({
  backgroundContainer: {
    width: "100%",
    height: CUSTOM_HEADER_HEIGHT,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    opacity: 0.5,
  },
  main: {
    backgroundColor: ROCK,
  },
  back: {
    backgroundColor: PROCELAIN_BONE,
  },
});

export default CustomHeader;
