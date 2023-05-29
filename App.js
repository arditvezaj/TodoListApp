import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredTodo, setEnteredTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const enteredTodoHandler = (enteredText) => {
    setEnteredTodo(enteredText);
  };

  const addTodoHandler = () => {
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      { id: Date.now().toString(), text: enteredTodo },
    ]);
    setEnteredTodo("");
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.title}>My TODO App</Text>
        <TextInput
          placeholder="Enter your todo!"
          value={enteredTodo}
          onChangeText={enteredTodoHandler}
          style={styles.enteredTodo}
        />
        <View style={styles.button}>
          <Button
            onPress={addTodoHandler}
            title="Add New Todo"
            color="tomato"
          />
        </View>
        <View style={styles.todoList}>
          <FlatList
            data={todoList}
            renderItem={(todo) => {
              return (
                <View style={styles.singleTodo}>
                  <Text style={styles.todoText}>{todo.item.text}</Text>
                </View>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
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
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "gray",
  },
  singleTodo: {
    backgroundColor: "red",
    marginVertical: 4,
    borderRadius: 6,
  },
  todoText: {
    color: "white",
    fontWeight: 500,
    padding: 8,
  },
  todoList: {
    flex: 3,
    marginTop: 50,
  },
  button: {
    marginTop: 5,
  },
});
