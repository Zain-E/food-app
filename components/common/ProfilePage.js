import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { Menu } from "react-native-paper";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function ProfilePage() {
  const navigation = useNavigation();

  const navigateToPage1 = () => {
    navigation.navigate("Login");
  };

  const navigateToPage2 = () => {
    navigation.navigate("Page2");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Menu.Item
        leadingIcon="account"
        onPress={() => {
          navigation.navigate("Login");
        }}
        title="Login"
      />

      <Menu.Item
        leadingIcon="account-edit"
        onPress={() => {
          navigation.navigate("EditAccount");
        }}
        title="Edit Account"
      />
      <Menu.Item
        leadingIcon="help-circle"
        onPress={() => {
          navigation.navigate("SignUp");
        }}
        title="Need Help"
      />
      <Menu.Item
        leadingIcon="history"
        onPress={() => {
          navigation.navigate("Order History");
        }}
        title="Order History"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 1,
    borderRadius: 5,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#D3D3D3",
  },
  text: {
    fontSize: 16,
    color: "#000",
  },
});
