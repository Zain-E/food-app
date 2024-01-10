import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const SellerOnboarding = () => {
  const [kitchenName, setKitchenName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [location, setLocation] = useState(null);
  const navigation = useNavigation();

  const getLocation = () => {
    // logic to get location using Geolocation API
    setLocation(location);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create your kitchen</Text>

      <TextInput
        style={styles.input}
        placeholder="Kitchen name"
        value={kitchenName}
        onChangeText={setKitchenName}
      />

      <TextInput
        style={styles.input}
        placeholder="Contact name"
        value={contactName}
        onChangeText={setContactName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Mobile number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />

      <Button
        title="Get Location"
        onPress={getLocation}
        style={styles.button}
      />
      <br></br>
      <Button
        title="Continue"
        onPress={() => navigation.navigate("SellerKitchenAvailability")}
        style={styles.button}
      />
    </View>
  );
};

const styles = {
  container: {
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 6,
  },
};

export default SellerOnboarding;
