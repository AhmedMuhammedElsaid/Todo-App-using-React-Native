import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Alert,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
export default function App() {
  const [people, setPpl] = useState([
    { name: "Ahmed", id: "1 " },
    { name: "youshi", id: "2 " },
    { name: "mario", id: "3 " },
    { name: "luigi", id: "4 " },
    { name: "peach", id: "5 " },
    { name: "toad", id: "6 " },
    { name: "bowser", id: "7 " },
    { name: "inna", id: "8 " },
    { name: "kiko", id: "9 " },
    { name: "lalo", id: "10" },
    { name: "Angle", id: "11" },
  ]);
  const submitHandler = (text) => {
    if (text.length > 2) {
      setPpl((prevState) => [
        ...prevState,
        { name: text, id: Math.random().toString() },
      ]);
    } else {
      Alert.alert("Oops", "Todos must be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("Alert Closed") },
        { text: "What's that!!!", onPress: () => console.log("Alert Closed") },
      ]);
    }
  };
  const pressHandler = (id) => {
    setPpl((ppl) => [...ppl.filter((item) => item.id !== id)]);
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("pressed");
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <TodoInput onSubmit={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={people}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
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
