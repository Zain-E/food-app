import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

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

export default function MenuItemsAdd({ foods }) {
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
    <TextInput defaultValue={props.food.title} style={styles.titleStyle} />
    <TextInput defaultValue={props.food.description} />
    <TextInput defaultValue={props.food.price} />
    <View style={{ flexDirection: "column" }}>
      <BouncyCheckbox style={{ padding: 10 }} text="Halal" />
      <BouncyCheckbox style={{ padding: 10 }} text="Veg" />
      <BouncyCheckbox style={{ padding: 10 }} text="Gluten Free" />
      <BouncyCheckbox style={{ padding: 10 }} text="Keto" />
      <BouncyCheckbox style={{ padding: 10 }} text="Vegan" />
    </View>
  </View>
);

const FoodImage = ({ marginLeft, ...props }) => {
  return (
    <View>
      <ImageBackground
        source={{ uri: props.food.image }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 8,
          marginLeft: marginLeft,
        }}
      >
        <Text
          style={{
            position: "absolute",
            textAlign: "center",
            verticalAlign: "center",
            color: "white",
            width: "100%",
            bottom: 0,

            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          Upload Image
        </Text>
      </ImageBackground>
    </View>
  );
};
