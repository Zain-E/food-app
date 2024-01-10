import { Button, Pressable, SafeAreaView, Text } from "react-native";

import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Landing() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text>
        <h1>Welcome Foodie !!!</h1>
      </Text>
      <br />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("BuyerHome")}
      >
        <Text style={styles.text}>I want food</Text>
      </Pressable>

      <br />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("PP")}
      >
        <Text style={styles.text}>I want to sell food</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    width: 200,
  },
});
