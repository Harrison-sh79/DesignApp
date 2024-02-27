import { StyleSheet } from "react-native";
import { fontSizes, heights, iconSizes, paddings } from "./StyleConstants";

import { Dimensions } from "react-native";

export const getScreenType = () => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  if (screenHeight <= 667) {
    return "se";
  } else if (screenHeight > 1133) {
    return "tablet";
  } else {
    return "normal";
  }
};

/** Colors */
export const DARK_TEXT = "#27292A";
export const FORM_INPUT_GREY = "#828282";
export const DRAGON_GREEN = "#0F4734";
export const ERROR_RED = "#CF0808";
export const ROCK = "#F0F0F0";
export const PROCELAIN_BONE = "#F9F9F9";
export const WINTER_TREE = "#F2F7F4";

/** Font Sizes */
export const TEXT_SMALLER = fontSizes[getScreenType()].textSmaller;
export const TEXT_SMALL = fontSizes[getScreenType()].textSmall;
export const TEXT_MEDIUM = fontSizes[getScreenType()].textMedium;
export const TEXT_LARGE = fontSizes[getScreenType()].textLarge;
export const TEXT_LARGER = fontSizes[getScreenType()].textLarger;

/** Icon Sizese */
export const ICON_MEDIUM = iconSizes[getScreenType()].iconMedium;
export const ICON_LARGE = iconSizes[getScreenType()].iconLarge;

/** Heights */
export const BUTTON_HEIGHT = heights[getScreenType()].buttonHeight;
export const INPUT_HEIGHT = heights[getScreenType()].inputHeight;
export const CUSTOM_HEADER_HEIGHT = heights[getScreenType()].headerHeight;
export const TAB_BAR_HEIGHT = heights[getScreenType()].tabBarHeight;

/** Paddings */
export const PAGE_HORIZONTAL_PADDING =
  paddings[getScreenType()].pageHorizontalPadding;
export const TAB_TOP_PADDING = paddings[getScreenType()].tabTopPadding;
export const TAB_BOTTOM_PADDING = paddings[getScreenType()].tabBottomPadding;
export const SCROLL_BOTTOM_PADDING = 24;

/** Border Radius */
export const BUTTON_RADIUS = 8;
export const INPUT_RADIUS = 8;

/** Icon Sizes */
export const LARGER_ICONS = 44;

const globalStyles = StyleSheet.create({
  /** Texts */
  largeTitle: {
    fontFamily: "Inter-Bold",
    fontSize: TEXT_LARGER,
    color: DARK_TEXT,
  },
  mediumTitle: {
    fontFamily: "Inter-Bold",
    fontSize: TEXT_LARGE,
    color: DARK_TEXT,
  },
  labelTitle: {
    fontFamily: "Inter-Bold",
    fontSize: TEXT_MEDIUM,
    color: DARK_TEXT,
  },
  subText: {
    fontFamily: "Inter-Regular",
    fontSize: TEXT_MEDIUM,
    color: DARK_TEXT,
  },
  recoverySubText: {
    fontFamily: "Inter-Regular",
    fontSize: TEXT_MEDIUM,
    color: FORM_INPUT_GREY,
  },
  countryCodeContainer: {
    height: INPUT_HEIGHT,
    borderWidth: 0.5,
    borderColor: FORM_INPUT_GREY,
    borderRadius: INPUT_RADIUS,
    justifyContent: "center",
    fontSize: TEXT_MEDIUM,
    paddingLeft: 20,
  },
  agreementText: {
    fontFamily: "Inter-Medium",
    fontSize: TEXT_SMALLER,
    color: FORM_INPUT_GREY,
  },
  buttonText: {
    fontFamily: "Inter-Bold",
    fontSize: TEXT_SMALL,
    color: DRAGON_GREEN,
  },
  hintText: {
    fontFamily: "Inter-Regular",
    fontSize: TEXT_SMALLER,
  },
  errorText: {
    fontFamily: "Inter-Regular",
    fontSize: TEXT_SMALLER,
    color: ERROR_RED,
  },
  formWrapper: {
    flex: 1,
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    paddingTop: 32,
    paddingBottom: 60,
    backgroundColor: "#fff",
    color: DARK_TEXT,
  },
  formTitle: {
    fontSize: TEXT_LARGE,
    fontFamily: "Inter-Bold",
    marginBottom: 30,
    textAlign: "center",
    color: DARK_TEXT,
  },
  pageTitle: {
    fontSize: TEXT_LARGER,
    fontFamily: "Inter-Bold",
    color: DARK_TEXT,
  },
  pageWrapper: {
    flex: 1,
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    paddingTop: 60,
  },
  scrollPageWrapper: {
    flex: 1,
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
  },
  shadowBox: {
    // iOS shadow properties
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,

    // Android elevation
    elevation: 5,
  },
  descriptionText: {
    fontSize: 17,
  },
  input: {
    height: INPUT_HEIGHT,
    borderWidth: 0.5,
    paddingHorizontal: 20,
    borderColor: FORM_INPUT_GREY,
    borderRadius: INPUT_RADIUS,
    width: "100%",
    fontFamily: "Inter-Regular",
    fontSize: TEXT_MEDIUM,
    color: DARK_TEXT,
  },
});

export default globalStyles;
