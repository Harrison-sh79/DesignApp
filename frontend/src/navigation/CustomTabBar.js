import React from "react";
import { View, StyleSheet } from "react-native";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { TAB_BAR_HEIGHT } from "../styles/GlobalStyles";

const CustomTabBar = (props) => {
  return (
    <BlurView intensity={50} style={styles.absolute}>
      <BottomTabBar {...props} />
    </BlurView>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: TAB_BAR_HEIGHT,
  },
});

export default CustomTabBar;
