import { Alert, FlatList, StyleSheet, View } from "react-native";
import {
  Button,
  FAB,
  List,
  Modal,
  Portal,
  Provider,
  Text,
  TextInput,
} from "react-native-paper";
import React, { useEffect, useState } from "react";

import { supabase } from "../../lib/supabase";

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
        const { error } = await supabase
          .from("menu_items")
          .update(updatedItem)
          .match({ id: selectedFood.id }); 

        if (error) throw error;
      } else {
        // Add new item
        const { error } = await supabase
          .from("menu_items")
          .insert(updatedItem);
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

        <FlatList
          data={foods}
          keyExtractor={(item) => item.id.toString()} // Assuming items have an 'id'
          renderItem={({ item }) => (
            <List.Item
              title={item.title}
              description={item.description}
              right={() => (
                <Button onPress={() => editItem(item)}>Edit</Button>
              )}
            />
          )}
        />

        <Portal>
          <Modal visible={modalVisible} onDismiss={() => setModalVisible(false)}>
            <View style={styles.modalContent}>
              <TextInput label="Title" value={selectedFood?.title} />
              <TextInput label="Description" value={selectedFood?.description} />
              <TextInput label="Price" value={selectedFood?.price} />
              

              <Button onPress={() => saveItem(selectedFood)}>Save</Button>
            </View>
          </Modal>
        </Portal>

        <FAB
          icon="plus"
          style={styles.fab}
          onPress={addItem}
        />

        <Button onPress={() => navigation.navigate("SellerHome")}>Preview</Button>
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
