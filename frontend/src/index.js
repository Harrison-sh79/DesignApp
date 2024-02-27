import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useFonts } from "expo-font";
import { PROCELAIN_BONE } from "./styles/GlobalStyles";

const Main = () => {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Bold": require("../assets/fonts/Inter/Inter-Bold.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter/Inter-Medium.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter/Inter-Regular.ttf"),
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: PROCELAIN_BONE,
    },
  };
  return (
    <Provider store={store}>
      <NavigationContainer theme={navTheme}>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default Main;
