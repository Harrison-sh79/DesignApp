import { useState } from "react";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomTabBar from "./CustomTabBar";
import {
  TAB_BAR_HEIGHT,
  TEXT_SMALLER,
  FORM_INPUT_GREY,
  DRAGON_GREEN,
  TAB_TOP_PADDING,
  TAB_BOTTOM_PADDING,
} from "../styles/GlobalStyles";
import { moveMoneyData } from "../screens/MoveMoney/data/moveMoneyData";

// Screens
import HomeScreen from "../screens/Home/HomeScreen";
import OffersScreen from "../screens/OffersScreen";
import ModalList from "../components/Modal/ModalList";
import ExchangeScreen from "../screens/Exchange/ExchangeScreen";

//Screen names
const home = "Home";
const moveMoney = "Move Money";
const exchange = "Exchange";
const offers = "Offers";

//Colors
const activeColor = DRAGON_GREEN;
const inactiveColor = FORM_INPUT_GREY;

const Tab = createBottomTabNavigator();

const TabNavigator = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Tab.Navigator
        initialRouteName={home}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === home) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === moveMoney) {
              iconName = focused ? "cash" : "cash-outline";
            } else if (rn === exchange) {
              iconName = focused
                ? "ios-sync-circle"
                : "ios-sync-circle-outline";
            } else if (rn === offers) {
              iconName = focused ? "gift" : "gift-outline";
            }
            const iconColor = focused ? activeColor : inactiveColor;

            return <Ionicons name={iconName} size={size} color={iconColor} />;
          },
          tabBarIconStyle: { marginBottom: 0 },
          tabBarLabelStyle: {
            fontSize: TEXT_SMALLER,
            marginTop: 0,
            fontFamily: "Inter-Medium",
          },
          tabBarActiveTintColor: activeColor,
          tabBarInactiveTintColor: inactiveColor,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            position: "absolute",
            height: TAB_BAR_HEIGHT,
            justifyContent: "center",
            alignItems: "center",
            borderTopWidth: 0, // Removes the top border
            elevation: 0, // Removes shadow on Android
            shadowOpacity: 0, // Removes shadow on iOS
            paddingTop: TAB_TOP_PADDING,
            paddingBottom: TAB_BOTTOM_PADDING,
          },
        })}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tab.Screen name={home} component={HomeScreen} />
        <Tab.Screen
          name={moveMoney}
          component={HomeScreen}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              setModalVisible(true);
            },
          }}
        />
        <Tab.Screen name={exchange} component={ExchangeScreen} />
        <Tab.Screen name={offers} component={OffersScreen} />
      </Tab.Navigator>
      {isModalVisible && (
        <ModalList
          data={moveMoneyData}
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
          navigation={navigation}
        />
      )}
    </>
  );
};

export default TabNavigator;
