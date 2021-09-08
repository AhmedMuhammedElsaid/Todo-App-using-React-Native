import React, { useState } from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";

const TodoInput = ({ onSubmit }) => {
  const [todo, setTodo] = useState("");
  const changeHandler = (text) => setTodo(text);
  return (
    <View>
      <TextInput
        placeholder="add new todo ...."
        onChangeText={changeHandler}
        style={styles.input}
        value={todo}
      />
      <Button
        title="Add todo..."
        color="coral"
        onPress={() => {
          onSubmit(todo);
          setTodo("");
        }}
      />
    </View>
  );
};
export default TodoInput;
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomColor: "#ddd",
  },
});
