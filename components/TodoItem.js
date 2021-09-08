import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const TodoItem = ({ item,  handleDeleteItem }) => {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <MaterialIcons
          name="delete"
          size={18}
          color="#333"
          onPress={() => handleDeleteItem(item.id)}
        />
        <Text style={styles.itemText}> {item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default TodoItem;
const styles = StyleSheet.create({
  item: {
    marginTop: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
    borderWidth: 1,
  },
  itemText: {
    marginLeft: 10,
  },
});
