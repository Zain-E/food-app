import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MenuItemsAdd from "../sellerDetail/MenuItemsAdd";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";

export default function AddOrEditItem() {
  const navigation = useNavigation();
  const [foods, setFoods] = useState([
    {
      title: "Lasagna",
      description: "With butter lettuce, tomato and sauce bechamel",
      price: "£13.50",
      image:
        "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    },
    {
      title: "Tandoori Chicken",
      description:
        "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
      price: "£19.20",
      image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
    },
  ]);

  const addItem = () => {
    setFoods([
      ...foods,
      {
        title: "Chilaquiles",
        description:
          "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
        price: "£14.50",
        image:
          "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
      },
    ]);
  };

  return (
    <View>
      <h1 style={styles.titleStyle}>Add / Edit Item</h1>
      <br></br>
      <Button onPress={() => addItem()} title="Add Item" />
      {/* <Divider width={1.8} style={{ marginVertical: 20 }} /> */}
      <MenuItemsAdd foods={foods} />
      <Button
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "green",
        }}
        onPress={() => navigation.navigate("SellerHome")}
        title="Preview"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#2196F3",
    color: "white",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.5,
  },
});
