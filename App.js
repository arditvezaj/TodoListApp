import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Pressable,
} from "react-native";

import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodoHandler = (enteredTodo) => {
    if (enteredTodo.trim().length === 0) {
      return;
    }
    setTodoList((prevTodoList) => [
      { id: Date.now().toString(), text: enteredTodo },
      ...prevTodoList,
    ]);
  };

  const deleteTodoHandler = (todoId) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text style={styles.title}>My TODO App</Text>
        <View style={{ flexDirection: "row" }}>
          <TodoInput onAddTodo={addTodoHandler} />
        </View>
        <View style={styles.todoList}>
          <FlatList
            data={todoList}
            renderItem={(todo) => {
              return (
                <TodoItem
                  id={todo.item.id}
                  index={todo.index}
                  text={todo.item.text}
                  onDeleteTodo={deleteTodoHandler}
                />
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
    backgroundColor: "#713770",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: 600,
    marginTop: 60,
    color: "white",
  },
  todoList: {
    flex: 2,
    margin: 30,
    width: "90%",
  },
});
