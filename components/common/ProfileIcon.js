import { Image, StyleSheet, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProfileIcon = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.icon}
      onPress={() => navigation.navigate("Your Account")}
    >
      <Icon name="user" size={20} color="#000" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    border: "1px solid #fff",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileIcon;
