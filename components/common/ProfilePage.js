import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

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
    <SafeAreaView>
      <View>
        <br />
        <Pressable style={styles.button} onPress={navigateToPage1}>
          <Text style={styles.text}>Login</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={navigateToPage2}>
          <Text style={styles.text}>Need Help</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={navigateToPage2}>
          <Text style={styles.text}>Edit Account</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("OrderHistory")}
        >
          <Text style={styles.text}>Order History</Text>
        </Pressable>
      </View>
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
