import { Button, Switch, Text, TextInput } from "react-native-paper";
import { DatePickerModal, TimePickerModal } from "react-native-paper-dates";
import React, { useCallback, useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { CheckBox } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const SellerKitchenAvailability = () => {
  const [kitchenOpen, setKitchenOpen] = useState(true);
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [visibleCloseTime, setVisibleCloseTime] = useState(false);
  const onDismiss = useCallback(() => {
    setVisible(false);
    setVisibleCloseTime(false);
  }, [setVisible, setVisibleCloseTime]);

  const onConfirm = useCallback(
    ({ hours, minutes }) => {
      setVisible(false);
      console.log({ hours, minutes });
    },
    [setVisible]
  );
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [selectedDays, setSelectedDays] = useState([]);

  const [timing, setTiming] = useState({
    Monday: {
      startTimeHours: "10",
      startTimeMinutes: "00",
      endTimeHours: "8",
      endTimeMinutes: "30",
      isOpen: true,
    },
    Tuesday: {
      startTimeHours: "10",
      startTimeMinutes: "00",
      endTimeHours: "8",
      endTimeMinutes: "30",
      isOpen: false,
    },
    Wednesday: {
      startTimeHours: "10",
      startTimeMinutes: "00",
      endTimeHours: "8",
      endTimeMinutes: "30",
      isOpen: true,
    },
    Thursday: {
      startTimeHours: "10",
      startTimeMinutes: "00",
      endTimeHours: "8",
      endTimeMinutes: "30",
      isOpen: false,
    },
    Friday: {
      startTimeHours: "10",
      startTimeMinutes: "00",
      endTimeHours: "8",
      endTimeMinutes: "30",
      isOpen: true,
    },
    Saturday: {
      startTimeHours: "10",
      startTimeMinutes: "00",
      endTimeHours: "8",
      endTimeMinutes: "30",
      isOpen: true,
    },
    Sunday: {
      startTimeHours: "10",
      startTimeMinutes: "00",
      endTimeHours: "8",
      endTimeMinutes: "30",
      isOpen: true,
    },
  });

  const handleDayChange = (day) => {
    // update selectedDays state
  };

  const handleTimeChange = (day, openOrClose, hours, minutes) => {
    console.log(day, openOrClose, hours, minutes);
    if (openOrClose === "open") {
      setTiming({
        ...timing,
        [day]: {
          ...timing[day],
          startTimeHours: hours,
          startTimeMinutes: minutes,
        },
      });
    } else {
      setTiming({
        ...timing,
        [day]: {
          ...timing[day],
          endTimeHours: hours,
          endTimeMinutes: minutes,
        },
      });
    }
    setVisible(false);
    setVisibleCloseTime(false);
  };

  const Day = ({ day, timing }) => {
    const ref = useRef();
    return (
      <View style={styles.day}>
        <View style={styles.dayOptions}>
          <Text style={styles.dayText}>{day}</Text>

          <Switch
            value={timing[day].isOpen}
            onValueChange={() => handleDayChange(day)}
          />
        </View>
        <View style={styles.timing}>
          {/* <Text>Open</Text> */}
          <Button
            onPress={() => setVisible(true)}
            uppercase={false}
            mode="outlined"
          >
            {`Start time ${timing[day].startTimeHours}:${timing[day].startTimeMinutes}`}
          </Button>
          <TimePickerModal
            ref={ref}
            visible={visible}
            style={styles.timeInput}
            placeholder="Open"
            hours={timing[day].startTimeHours}
            minutes={timing[day].startTimeMinutes}
            onDismiss={onDismiss}
            onConfirm={({ hours, minutes }) =>
              handleTimeChange(day, "open", hours, minutes)
            }
          />

          <Button
            onPress={() => setVisibleCloseTime(true)}
            uppercase={false}
            mode="outlined"
          >
            {`End time ${timing[day].endTimeHours}:${timing[day].endTimeMinutes}`}
          </Button>
          <TimePickerModal
            visible={visibleCloseTime}
            style={styles.timeInput}
            placeholder="Open"
            hours={timing[day].endTimeHours}
            minutes={timing[day].endTimeMinutes}
            onDismiss={onDismiss}
            onConfirm={({ hours, minutes }) =>
              handleTimeChange(day, "close", hours, minutes)
            }
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text variant="headlineSmall">Kitchen Availability</Text>
      <View style={styles.toggle}>
        <Text variant="bodyMedium">Open / Closed</Text>
        <Switch
          value={kitchenOpen}
          onValueChange={() => setKitchenOpen(!kitchenOpen)}
        />
      </View>

      <ScrollView style={styles.days}>
        {days.map((day) => (
          <Day key={day} day={day} timing={timing} />
        ))}
      </ScrollView>
      <CheckBox title={"Delivery"} />
      <CheckBox title={"Pickup"} />
      <br></br>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("AddOrEditItem")}
      >
        Continue
      </Button>
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
