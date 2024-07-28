import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import {
  Appbar,
  Avatar,
  BottomNavigation,
  Searchbar,
  SegmentedButtons,
  Text,
} from "react-native-paper";
import RestaurantItems, {
  localRestaurants,
} from "../components/buyer/RestaurantItems";

import { View } from "react-native";
import { List } from "react-native-paper";
import ProfilePage from "../components/common/ProfilePage";

const Orders = () => {
  const orderList = [
    {
      id: 1,
      restaurant: "Joe's Pizza",
      item: "Pepperoni Pizza",
      date: "2024-06-01",
    },
    {
      id: 2,
      restaurant: "Mama's Kitchen",
      item: "Spaghetti Bolognese",
      date: "2024-06-03",
    },
    {
      id: 3,
      restaurant: "Sushi World",
      item: "California Roll",
      date: "2024-06-05",
    },
  ];

  return (
    <View style={{ padding: 10 }}>
      {orderList.map((order) => (
        <List.Item
          key={order.id}
          title={`${order.item} from ${order.restaurant}`}
          description={`Ordered on ${order.date}`}
          left={(props) => <Avatar.Icon {...props} icon="receipt" />}
        />
      ))}
    </View>
  );
};

const Profile = () => {
  return (
    <View style={{ padding: 10, alignItems: "center" }}>
      <Avatar.Icon size={100} icon="account" />
      <Text style={{ fontSize: 20, marginVertical: 10 }}>John Doe</Text>
      <Text>Email: john.doe@example.com</Text>
      <Text>Phone: +1234567890</Text>
      {/* Add more profile details as needed */}
    </View>
  );
};

const BuyerHome = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [searchQuery, setSearchQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    {
      key: "orders",
      title: "Orders",
      focusedIcon: "receipt",
      unfocusedIcon: "receipt",
    },
    {
      key: "profile",
      title: "Profile",
      focusedIcon: "account",
      unfocusedIcon: "account",
    },
  ]);

  useEffect(() => {
    // Fetch restaurant data if needed
  }, [city, activeTab]);

  const onChangeSearch = (query) => setSearchQuery(query);

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case "home":
        return (
          <ScrollView>
            {/* <Card style={{ margin: 10 }}>
              <Card.Content>
                <Button mode={activeTab === "Delivery" ? "contained" : "outlined"} onPress={() => setActiveTab("Delivery")}>
                  Delivery
                </Button>
                <Button mode={activeTab === "Pickup" ? "contained" : "outlined"} onPress={() => setActiveTab("Pickup")}>
                  Pickup
                </Button>
              </Card.Content>
            </Card> */}
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={{ margin: 10 }}
            />
            <SegmentedButtons
              style={{ margin: 10 }}
              buttons={[
                { value: "Delivery", label: "Delivery", icon: "bike" },
                { value: "Pickup", label: "Pickup", icon: "walk" },
              ]}
              // onSelectionChange={(option) => setActiveTab(option)}
              // selectedOption={activeTab}
            />

            {/* <Categories /> */}
            <RestaurantItems
              restaurantData={restaurantData}
              navigation={navigation}
            />
          </ScrollView>
        );
      case "orders":
        return <Orders />;
      case "profile":
        return <ProfilePage />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Food Delivery" subtitle={city} />
        <Avatar.Icon size={40} icon="account" style={{ marginRight: 10 }} />
      </Appbar.Header>

      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaView>
  );
};

export default BuyerHome;
