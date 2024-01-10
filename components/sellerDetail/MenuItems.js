import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

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
});


export default function MenuItems({ foods }) {
  const dispatch = useDispatch();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft="0" />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
    <View style={{ flexDirection: "column" }}>
      <BouncyCheckbox isChecked={true} style={{ padding: 10 }} text="Halal" />
      <BouncyCheckbox style={{ padding: 10 }} text="Veg" />
      <BouncyCheckbox style={{ padding: 10 }} text="Gluten Free" />
      <BouncyCheckbox style={{ padding: 10 }} text="Keto" />
      <BouncyCheckbox style={{ padding: 10 }} text="Vegan" />
    </View>
  </View>
);

const FoodImage = ({ marginLeft, ...props }) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: marginLeft,
      }}
    />
  </View>
);
