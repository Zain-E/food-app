import { Text, View } from "react-native";

import About from "../components/sellerDetail/About";
import { Divider } from "react-native-elements";
import MenuItems from "../components/sellerDetail/MenuItems";
import React from "react";
import ProfileIcon from "../components/common/ProfileIcon";

const foods = [
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
  {
    title: "Chilaquiles",
    description:
      "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
    price: "£14.50",
    image:
      "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
    price: "£21.50",
    image:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "£13.50",
    image:
      "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
  },
];
export default function SellerHome() {
  return (
    <View>
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          position: "absolute",
          right: 0,
          zIndex: 100,
        }}
      >
        <ProfileIcon />
      </div>
      <About
        details={{
          name: "India's Grill",
          image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
          categories: ["Indian", "Bar"],
          price: "££",
          reviews: 700,
          rating: 4.9,
        }}
      />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems foods={foods} />
    </View>
  );
}
