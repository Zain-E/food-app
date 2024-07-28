import { Alert, FlatList, StyleSheet, View } from "react-native";
import {
  Button,
  FAB,
  List,
  Modal,
  Portal,
  Provider,
  Text,
  TextInput,Searchbar
} from "react-native-paper";
import React, { useEffect, useState } from "react";

import { supabase } from "../../lib/supabase";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

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

const tags = [
  'Vegan',
  'Halal',
  'Vegetarian',
  'Gluten Free',
  'Dairy Free',
  'Nut Free',
  'Keto',
  'Paleo',
  'Whole 30',
  'Low Carb',
  'Low Fat',
  'Low Sodium',
  'Low Sugar',
  'Organic',
  'Non-GMO',
  'Local',
  'Sustainable',
  'Fair Trade',
  'Cage Free',
  'Grass Fed',
  'Free Range',
  'Wild Caught',
  'Farm to Table',
  'Handmade',
  'Artisanal',
  'Craft',
  'Small Batch',
  'Family Owned',


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
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{  width: `100%` }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {tags.map((name) => (
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

const AddOrEditItem = ({ navigation }) => {
  const [foods, setFoods] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [cuisineTypes, setCuisineTypes] = useState([]); // List of cuisines
  const [selectedCuisine, setSelectedCuisine] = useState([]); // For multi-select
  const [cuisineSearchQuery, setCuisineSearchQuery] = useState("");

  useEffect(() => {
    fetchMenuItems();
    fetchCuisineTypes();
  }, []);

  const fetchCuisineTypes = async () => {
    try {
      const { data, error } = await supabase
        .from("cuisine_types") // Assuming your table name
        .select("*");

      if (error) {
        console.error("Error fetching cuisine types:", error);
        return;
      }

      setCuisineTypes(data);
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };
  const fetchMenuItems = async () => {
    try {
      const { data, error } = await supabase
        .from("menu_items") // Replace with your table name
        .select("*");

      if (error) {
        console.error("Error fetching menu items:", error);
        return;
      }

      setFoods(data);
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  const filteredCuisineTypes = cuisineTypes.filter((cuisine) =>
    cuisine.name.toLowerCase().includes(cuisineSearchQuery.toLowerCase())
  );
  const addItem = () => {
    setSelectedFood(null); // Clear for new item
    setModalVisible(true);
  };

  const editItem = (item) => {
    setSelectedFood(item);
    setModalVisible(true);
  };

  const saveItem = async (updatedItem) => {
    try {
      if (selectedFood) {
        // Update existing item
        updatedItem.cuisine_type = selectedCuisine;
        const { error } = await supabase
          .from("menu_items")
          .update(updatedItem)
          .match({ id: selectedFood.id });

        if (error) throw error;
      } else {
        // Add new item
        const { error } = await supabase.from("menu_items").insert(updatedItem);
        if (error) throw error;
      }

      fetchMenuItems();
      setModalVisible(false);
    } catch (error) {
      Alert.alert("Error", error.message || "An error occurred");
    }
  };

  return (
    <Provider>
      <View style={styles.container}>
        <Text variant="headlineLarge" style={styles.title}>

          Add / Edit Item
         
        </Text>
        <br></br>
        <Button mode="contained" onPress={addItem}>
          Add
        </Button>
        <br></br>
        <Button onPress={() => navigation.navigate("SellerHome")}>
          Preview
        </Button>
        <FlatList
          data={foods}
          keyExtractor={(item) => item.id.toString()} // Assuming items have an 'id'
          renderItem={({ item }) => (
            <List.Item
              title={item.title}
              description={item.description}
              right={() => <Button onPress={() => editItem(item)}>Edit</Button>}
            />
          )}
        />

        <Portal>
          <Modal
            visible={modalVisible}
            onDismiss={() => setModalVisible(false)}
          >
            <View style={styles.modalContent}>
              <TextInput label="Title" value={selectedFood?.title} />
              <TextInput
                label="Description"
                value={selectedFood?.description}
              />
              <TextInput label="Price" value={selectedFood?.price} />
            <br></br>
<MultipleSelectChip/>
<br></br>
              

<Button  >Upload Image</Button>
              
<br></br>
              <Button mode="contained" onPress={() => saveItem(selectedFood)}>Save</Button>
            </View>
          </Modal>
        </Portal>

        <FAB icon="plus" style={styles.fab} onPress={addItem} />

        
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { marginBottom: 16 },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    margin: 20,
    borderRadius: 4,
  },
});

export default AddOrEditItem;
