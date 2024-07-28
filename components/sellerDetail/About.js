import { Image, Text, View } from "react-native";

import { Button } from "react-native-elements";
import React from "react";

export default function About({ details }) {
  const { name, image_url, price, reviews, rating, categories } = details;
  console.log(image_url);

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image_url} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <View>
    <Image
      source={{ uri: props.image }}
      style={{ width: "100%", height: 180 }}
    />
    {/* <Button title="Edit Image" onPress={() => console.log("Edit Image")} /> */}
  </View>
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
