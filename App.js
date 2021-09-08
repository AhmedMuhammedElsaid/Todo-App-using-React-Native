import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Alert,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
export default function App() {
  // dummy state for learning purpose 
  const [people, setPpl] = useState([
    { name: "Ahmed", id: "1 " },
    { name: "youshi", id: "2 " },
    { name: "mario", id: "3 " },
    { name: "luigi", id: "4 " },
    { name: "peach", id: "5 " },
    { name: "toad", id: "6 " },
    { name: "Muhammed", id: "7 " },
    { name: "inna", id: "8 " },
    { name: "kiko", id: "9 " },
    { name: "lalo", id: "10" },
    { name: "Angle", id: "11" },
  ]);
  // Add New Todo Item to the List
  const submitHandler = (newTodoItem) => {
    if (newTodoItem.length > 2) {
      setPpl((prevState) => [
        ...prevState,
        { name: newTodoItem, id: Math.random().toString() },
      ]);
    } else {
      // in case the new item length less than 3 chars ,
      Alert.alert("Oops", "Todos must be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("Alert Closed") },
      ]);
    }
  };

  // delete item from the list using filter method
  const handleDeleteItem = (id) => {
    setPpl((prevState) => [...prevState.filter((item) => item.id !== id)]);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <TodoInput onSubmit={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={people}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TodoItem item={item} handleDeleteItem={handleDeleteItem} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: { padding: 40, flex: 1 },
  list: { marginTop: 20, flex: 1 },
});
