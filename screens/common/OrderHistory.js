import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { SegmentedButtons } from "react-native-paper";
import { DataTable } from "react-native-paper";
import { RadioButton } from "react-native-paper";

const OrderHistory = () => {
  const [checked, setChecked] = React.useState("first");

  const [value, setValue] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState([
    {
      order_id: "1",
      date: "2021-07-25",
      item_name: "Chicken Biryani",
      quantity: "2",
      price: "200",
      kitchen_name: "Tasty Bites",
    },
    {
      order_id: "2",
      date: "2021-07-26",
      item_name: "Gobi Manchurian",
      quantity: "1",
      price: "120",
      kitchen_name: "Hot Wok",
    },
    {
      order_id: "3",
      date: "2021-07-27",
      item_name: "Tandoori Chicken",
      quantity: "3",
      price: "300",
      kitchen_name: "Tandoor Flames",
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: "Selling History",
            label: "Selling History",
          },
          {
            value: "Purchasing History",
            label: "Purchasing History",
          },
        ]}
      />
      <br></br>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Order id</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title>Item Name</DataTable.Title>
          <DataTable.Title numeric>Quantity</DataTable.Title>
          <DataTable.Title>Kitchen Name</DataTable.Title>
          <DataTable.Title numeric>Cost</DataTable.Title>
        </DataTable.Header>

        {items.slice(from, to).map((item) => (
          <DataTable.Row key={item.key}>
            <DataTable.Cell>{item.order_id}</DataTable.Cell>
            <DataTable.Cell>{item.date}</DataTable.Cell>
            <DataTable.Cell>{item.item_name}</DataTable.Cell>
            <DataTable.Cell numeric>{item.quantity}</DataTable.Cell>
            <DataTable.Cell>{item.kitchen_name}</DataTable.Cell>
            <DataTable.Cell numeric>{item.price}</DataTable.Cell>
          </DataTable.Row>
        ))}

        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(items.length / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${items.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={"Rows per page"}
        />
      </DataTable>
      <br></br>
      <Button title="Export to Excel" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
  },
});

export default OrderHistory;
