import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [enteredTodo, setEnteredTodo] = useState("");

  const todoHandler = (event) => {
    setEnteredTodo(event.target.value);
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.title}>My TODO App</Text>
        <TextInput
          placeholder="Enter your todo!"
          value={enteredTodo}
          onChange={todoHandler}
          style={styles.enteredTodo}
        />
        <Text style={styles.todoList}>Todo List!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 0.5,
    fontSize: 23,
    marginTop: 60,
    color: "orange",
  },
  enteredTodo: {
    flex: 0,
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "gray",
  },
  todoList: {
    flex: 3,
    marginTop: 50,
  },
});
