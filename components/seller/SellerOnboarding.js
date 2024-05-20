import { Button, Text, TextInput } from "react-native-paper";
import React, { useState } from "react";

import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
    <>
     <View style={styles.container}>
      <Text variant="headlineSmall">Create your kitchen</Text>
      <br></br>
      <TextInput
        style={{ marginBottom: 10 }}
        placeholder="Kitchen name"
        value={kitchenName}
        onChangeText={setKitchenName}
      />

      <TextInput
        style={{ marginBottom: 10 }}
        placeholder="Contact name"
        value={contactName}
        onChangeText={setContactName}
      />

      <TextInput
        style={{ marginBottom: 10 }}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={{ marginBottom: 10 }}
        placeholder="Mobile number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      
    </View>
    <View style={styles.container}>
      <Text variant="headlineSmall">Account Details</Text>
      <br></br>
      <TextInput
        style={{ marginBottom: 10 }}
        placeholder="Account number"
        value={kitchenName}
        onChangeText={setKitchenName}
      />

      <TextInput
        style={{ marginBottom: 10 }}
        placeholder="Sort Code"
        value={contactName}
        onChangeText={setContactName}
      />
      <br></br>
      <Button mode="outlined" onPress={getLocation}>
        Get location
      </Button>
      <br></br>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("SellerKitchenAvailability")}
      >
        Continue
      </Button>
    </View>
    </>
   
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
