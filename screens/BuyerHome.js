import React, { useEffect, useState } from "react";
import RestaurantItems, {
  localRestaurants,
} from "../components/buyer/RestaurantItems";
import { SafeAreaView, Text, View } from "react-native";

import HeaderTabs from "../components/buyer/HeaderTabs";
import ProfileIcon from "../components/common/ProfileIcon";
import { ScrollView } from "react-native-web";
import SearchBar from "../components/buyer/SearchBar";

export default function BuyerHome() {
  const [activeTab, setActiveTab] = useState("Delivery");
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");

  // const getRestaurantsFromYelp = () => {
  //   const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

  //   const apiOptions = {
  //     headers: {
  //       // Authorization: `Bearer ${YELP_API_KEY}`,
  //     },
  //   };

  //   return fetch(yelpUrl, apiOptions)
  //     .then((res) => res.json())
  //     .then((json) =>
  //       setRestaurantData(
  //         json.businesses.filter((business) =>
  //           business.transactions.includes(activeTab.toLowerCase())
  //         )
  //       )
  //     );
  // };

  useEffect(() => {
    // getRestaurantsFromYelp();
  }, [city, activeTab]);
  return (
    <SafeAreaView>
      <br></br>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <ProfileIcon />
      </div>
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <Categories /> */}
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
