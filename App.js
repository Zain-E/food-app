import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

import AddOrEditItem from "./components/seller/AddOrEditItem";
import BuyerHome from "./screens/BuyerHome";
import CreateSeller from "./components/seller/SellerOnboarding";
import Landing from "./screens/Landing";
import Login from "./screens/common/account/Login";
import { NavigationContainer } from "@react-navigation/native";
import OrderCompleted from "./screens/OrderCompleted";
import OrderHistory from "./screens/common/OrderHistory";
import PrivacyPolicy from "./components/common/PrivacyPolicy";
import ProfilePage from "./components/common/ProfilePage";
import { default as React } from "react";
import { Provider as ReduxProvider } from "react-redux";
import RestaurantDetail from "./screens/RestaurantDetail";
import SellerHome from "./screens/SellerHome";
import SellerKitchenAvailability from "./components/seller/SellerKitchenAvailability";
import configureStore from "./redux/store";
import { createStackNavigator } from "@react-navigation/stack";

const store = configureStore();
const Stack = createStackNavigator();
const theme = {
  colors: {
    primary: "rgb(0, 104, 116)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(151, 240, 255)",
    onPrimaryContainer: "rgb(0, 31, 36)",
    secondary: "rgb(0, 103, 131)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(188, 233, 255)",
    onSecondaryContainer: "rgb(0, 31, 42)",
    tertiary: "rgb(0, 103, 126)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(180, 235, 255)",
    onTertiaryContainer: "rgb(0, 31, 40)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(250, 253, 253)",
    onBackground: "rgb(25, 28, 29)",
    surface: "rgb(250, 253, 253)",
    onSurface: "rgb(25, 28, 29)",
    surfaceVariant: "rgb(219, 228, 230)",
    onSurfaceVariant: "rgb(63, 72, 74)",
    outline: "rgb(111, 121, 122)",
    outlineVariant: "rgb(191, 200, 202)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(46, 49, 50)",
    inverseOnSurface: "rgb(239, 241, 241)",
    inversePrimary: "rgb(79, 216, 235)",
    elevation: {
      level0: "transparent",
      level1: "rgb(238, 246, 246)",
      level2: "rgb(230, 241, 242)",
      level3: "rgb(223, 237, 238)",
      level4: "rgb(220, 235, 237)",
      level5: "rgb(215, 232, 234)",
    },
    surfaceDisabled: "rgba(25, 28, 29, 0.12)",
    onSurfaceDisabled: "rgba(25, 28, 29, 0.38)",
    backdrop: "rgba(41, 50, 52, 0.4)",
  },
};
export default function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <PaperProvider theme={theme}>
          <Stack.Navigator
            initialRouteName="AddOrEditItem"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen
              name="SellerKitchenAvailability"
              component={SellerKitchenAvailability}
            />
            <Stack.Screen name="CreateSeller" component={CreateSeller} />
            <Stack.Screen name="BuyerHome" component={BuyerHome} />
            <Stack.Screen name="SellerHome" component={SellerHome} />
            <Stack.Screen name="AddOrEditItem" component={AddOrEditItem} />
            <Stack.Screen
              options={{ headerShown: true }}
              name="Your Account"
              component={ProfilePage}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen
              name="RestaurantDetail"
              component={RestaurantDetail}
            />
            <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
            <Stack.Screen name="PP" component={PrivacyPolicy} />
            <Stack.Screen
              options={{ headerShown: true }}
              name="OrderHistory"
              component={OrderHistory}
            />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </ReduxProvider>
  );
}
