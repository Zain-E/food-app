import { Button, Text, TextInput } from "react-native-paper";
import React, { useState } from "react";

import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const cuisines = [
  "American",
  "Chinese",
  "Indian",
  "Italian",
  "Japanese",
  "Korean",
  "Mexican",
  "Thai",
  "Vietnamese",
  "French",
  "German",
  "Greek",
  "Mediterranean",
  "Spanish",
  "Middle Eastern",
  "Nordic",
  "Southern",
  "Caribbean",
  "Latin American",
  "African",
  "Moroccan",
  "Ethiopian",
  "Turkish",
  "Lebanese",
  "Israeli",
  "Egyptian",
  "Tunisian",
  "Algerian",
  "Nigerian",
  "South African",
  "Kenyan",
  "Ghanaian",
  "Senegalese",
  "Ethiopian",
  "Ivorian",
  "Cameroonian",
  "Ugandan",
  "Zimbabwean",
  "Zambian",
  "Tanzanian",
  "Mozambican",
  "Angolan",
  "Namibian",
  "Madagascan",
  "Malagasy",
  "Mauritian",
  "Seychellois",
  "Somali",
  "Djiboutian",
  "Eritrean",
  "Sudanese",
  "South Sudanese",
  "Chadian",
  "Central African",
  "Gabonese",
  "Congolese",
  "Equatorial Guinean",
  "Sao Tomean",
  "Cape Verdean",
  "Algerian",
  "Tunisian",
  "Libyan",
  "Moroccan",
  "Mauritanian",
  "Sahrawi",
  "Egyptian",
  "Sudanese",
  "South Sudanese",
  "Chadian",
  "Nigerien",
  "Malian",
  "Burkinabe",
  "Guinean",
  "Ivorian",
  "Ghanaian",
  "Togolese",
  "Beninese",
  "Nigerian",
  "Cameroonian",
  "Equatorial Guinean",
  "Gabonese",
  "Congolese",
  "Sao Tomean",
  "Angolan",
  "Namibian",
  "South African",
  "Swazi",
  "Lesoth"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function MultipleSelectChip() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{   width: "100%" }}>
        <InputLabel id="demo-multiple-chip-label">Cuisine type </InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {cuisines.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

const SellerOnboarding = () => {
  const [kitchenName, setKitchenName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [location, setLocation] = useState(null);
  const navigation = useNavigation();

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
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

<TextInput
          style={{ marginBottom: 10 }}
          placeholder="Description"
          multiline
          // value={mobileNumber}
          // onChangeText={setMobileNumber}
        />

       <MultipleSelectChip />
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
          {location
            ? `Location: ${location.latitude}, ${location.longitude}`
            : "Get location"}
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
