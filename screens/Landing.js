import { Button, Text } from "react-native-paper";
import { Pressable, SafeAreaView } from "react-native";

import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Landing() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text variant="headlineMedium">Welcome Foodie</Text>
      <br />
      <Button
        icon="food"
        mode="contained"
        contentStyle={{ flexDirection: "row-reverse", width: "300px" }}
        onPress={() => navigation.navigate("BuyerHome")}
      >
        I want food
      </Button>

      <br />
      <Button
        icon="food-turkey"
        mode="contained"
        contentStyle={{ flexDirection: "row-reverse", width: "300px" }}
        onPress={() => navigation.navigate("PP")}
      >
        I want to sell food
      </Button>
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
