import CreateAccountScreen from "../screens/Register/CreateAccountScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import ForgotUsernameScreen from "../screens/ForgotUsernameScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import VerifyScreen from "../screens/Register/VerifyScreen";
import VerifyEmailScreen from "../screens/VerifyEmailScreen";
import CongratsScreen from "../screens/CongratsScreen";
import DemoScreen from "../screens/DemoScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import BasicInfoScreen from "../screens/CardIssue/BasicInfoScreen";
import UploadScreen from "../screens/CardIssue/UploadScreen";
import TabNavigator from "./TabNavigator";
import ManageCardScreen from "../screens/ManageCard/ManageCardScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import ContactInfoScreen from "../screens/Profile/ContactInfoScreen";
import NotificationScreen from "../screens/Profile/NotificationScreen";
import SettingsScreen from "../screens/Profile/SettingsScreen";
import ApplePayScreen from "../screens/ApplePayScreen";
import ChangePinScreen from "../screens/ChangePinScreen";
import ReplaceCardScreen from "../screens/ReplaceCardScreen";
import ETransferReqScreen from "../screens/MoveMoney/ETransferReqScreen";
import ETransferScreen from "../screens/MoveMoney/ETransferScreen";
import P2PReqScreen from "../screens/MoveMoney/P2PReqScreen";
import P2PScreen from "../screens/MoveMoney/P2PScreen";
import PayBillSearchScreen from "../screens/MoveMoney/PayBillSearchScreen";
import PayBillScreen from "../screens/MoveMoney/PayBillScreen";
import CreatePasswordScreen from "../screens/Register/CreatePasswordScreen";
import ConfirmPasswordScreen from "../screens/Register/ConfirmPassword";
import PhoneVerificationScreen from "../screens/Register/PhoneVerificationScreen";
import SelectStatusScreen from "../screens/CardIssue/SelectStatusScreen";
import SelectIDScreen from "../screens/CardIssue/SelectIDScreen";
import UploadLicenseScreen from "../screens/CardIssue/UploadLicenseScreen";
import SelectDocumentScreen from "../screens/CardIssue/SelectDocumentScreen";
import BasicInfoScreen2 from "../screens/CardIssue/BasicInfoScreen2";
import BasicInfoScreen3 from "../screens/CardIssue/BasicInfoScreen3";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontFamily: "Inter-Medium",
        },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Group
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{ title: "Create Account" }}
        />
        <Stack.Screen
          name="CreatePassword"
          component={CreatePasswordScreen}
          options={{ title: "Create Account" }}
        />
        <Stack.Screen
          name="ConfirmPassword"
          component={ConfirmPasswordScreen}
          options={{ title: "Create Account" }}
        />
        <Stack.Screen
          name="PhoneVerification"
          component={PhoneVerificationScreen}
          options={{ title: "Create Account" }}
        />
        <Stack.Screen
          name="Verification"
          component={VerifyScreen}
          options={{ title: "Create Account" }}
        />
      </Stack.Group>

      <Stack.Screen
        name="Congrats"
        component={CongratsScreen}
        options={{ title: "Congrats" }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="ForgotUsername"
        component={ForgotUsernameScreen}
        options={{ title: "Forgot Email" }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ title: "Forgot Password" }}
      />
      <Stack.Screen
        name="VerifyEmail"
        component={VerifyEmailScreen}
        options={{ title: "Recover Password" }}
      />
      <Stack.Screen
        name="BasicInfo"
        component={BasicInfoScreen}
        options={{ title: "Apply Digital Card" }}
      />
      <Stack.Screen
        name="BasicInfo2"
        component={BasicInfoScreen2}
        options={{ title: "Apply Digital Card" }}
      />
      <Stack.Screen
        name="BasicInfo3"
        component={BasicInfoScreen3}
        options={{ title: "Apply Digital Card" }}
      />
      <Stack.Screen
        name="SelectStatus"
        component={SelectStatusScreen}
        options={{ title: "Apply Digital Card" }}
      />
      <Stack.Screen
        name="SelectID"
        component={SelectIDScreen}
        options={{ title: "Apply Digital Card" }}
      />
      <Stack.Screen
        name="SelectDocument"
        component={SelectDocumentScreen}
        options={{ title: "Apply Digital Card" }}
      />
      <Stack.Screen
        name="UploadLicense"
        component={UploadLicenseScreen}
        options={{ title: "Apply Digital Card" }}
      />
      <Stack.Screen
        name="Upload"
        component={UploadScreen}
        options={{ title: "Apply Digital Card" }}
      />
      <Stack.Screen
        name="Demo"
        component={DemoScreen}
        options={{ title: "Verification Demo" }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={{ title: "Reset password" }}
      />
      <Stack.Screen
        name="ManageCard"
        component={ManageCardScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
      <Stack.Screen
        name="ContactInfo"
        component={ContactInfoScreen}
        options={{ title: "Contact Info" }}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{ title: "Notification" }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
      <Stack.Screen
        name="ApplePay"
        component={ApplePayScreen}
        options={{ title: "Apple pay" }}
      />
      <Stack.Screen
        name="ChangePin"
        component={ChangePinScreen}
        options={{ title: "Change PIN" }}
      />
      <Stack.Screen
        name="ReplaceCard"
        component={ReplaceCardScreen}
        options={{ title: "Replace Card" }}
      />
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Tabs" component={TabNavigator} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen
          name="E-transfer Request"
          component={ETransferReqScreen}
        />
        <Stack.Screen name="E-transfer" component={ETransferScreen} />
        <Stack.Screen name="P2P Request" component={P2PReqScreen} />
        <Stack.Screen name="P2P" component={P2PScreen} />
        <Stack.Screen name="Pay bill" component={PayBillSearchScreen} />
        <Stack.Screen name="Payee" component={PayBillScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
