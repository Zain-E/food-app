import BuyerHome from "./screens/BuyerHome";
import CreateSeller from "./components/seller/SellerOnboarding";
import EditItem from "./components/seller/AddOrEditItem";
import Landing from "./screens/Landing";
import Login from "./screens/common/account/login";
import { NavigationContainer } from "@react-navigation/native";
import OrderCompleted from "./screens/OrderCompleted";
import PrivacyPolicy from "./components/common/PrivacyPolicy";
import ProfilePage from "./components/common/ProfilePage";
import { default as React } from "react";
import { Provider as ReduxProvider } from "react-redux";
import RestaurantDetail from "./screens/RestaurantDetail";
import SellerHome from "./screens/SellerHome";
import configureStore from "./redux/store";
import { createStackNavigator } from "@react-navigation/stack";
import SellerKitchenAvailability from "./components/seller/SellerKitchenAvailability";
import AddOrEditItem from "./components/seller/AddOrEditItem";
import OrderHistory from "./screens/common/OrderHistory";

const store = configureStore();
const Stack = createStackNavigator();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Landing"
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
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
          <Stack.Screen name="PP" component={PrivacyPolicy} />
          <Stack.Screen
            options={{ headerShown: true }}
            name="OrderHistory"
            component={OrderHistory}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
