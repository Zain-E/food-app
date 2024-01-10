import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import { CheckBox } from "react-native-elements";

const SellerKitchenAvailability = () => {
  const [kitchenOpen, setKitchenOpen] = useState(true);
  const navigation = useNavigation();
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [selectedDays, setSelectedDays] = useState([]);

  const [timing, setTiming] = useState({
    Monday: {
      open: null,
      close: null,
    },
    Tuesday: {
      open: null,
      close: null,
    },
    Wednesday: {
      open: null,
      close: null,
    },
    Thursday: {
      open: null,
      close: null,
    },
    Friday: {
      open: null,
      close: null,
    },
    Saturday: {
      open: null,
      close: null,
    },
    Sunday: {
      open: null,
      close: null,
    },
  });

  const handleDayChange = (day) => {
    // update selectedDays state
  };

  const handleTimeChange = (day, openOrClose, time) => {
    // update timing state
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kitchen Availability</Text>

      <View style={styles.toggle}>
        <Text>Open / Closed</Text>
        <Switch
          value={kitchenOpen}
          onValueChange={() => setKitchenOpen(!kitchenOpen)}
        />
      </View>

      <ScrollView style={styles.days}>
        {days.map((day) => (
          <View key={day} style={styles.day}>
            <View style={styles.dayOptions}>
              <Text style={styles.dayText}>{day}</Text>

              <Switch
                value={selectedDays.includes(day)}
                onValueChange={() => handleDayChange(day)}
              />
            </View>
            <View style={styles.timing}>
              {/* <Text>Open</Text> */}
              <TextInput
                style={styles.timeInput}
                placeholder="Open"
                value={timing[day].open}
                onChangeText={(time) => handleTimeChange(day, "open", time)}
              />

              {/* <Text>Close</Text> */}
              <TextInput
                style={styles.timeInput}
                placeholder="Close"
                value={timing[day].close}
                onChangeText={(time) => handleTimeChange(day, "close", time)}
              />
            </View>
          </View>
        ))}
      </ScrollView>
      <CheckBox title={"Delivery"} />
      <CheckBox title={"Pickup"} />
      <br></br>
      <Button
        title="Continue"
        onPress={() => navigation.navigate("AddOrEditItem")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  days: {
    flex: 1,
  },
  day: {
    marginBottom: 20,
  },
  dayText: {
    fontSize: 18,
    fontWeight: "500",
  },
  timing: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  dayOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  timeInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
    width: "45%",
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default SellerKitchenAvailability;
