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

export default function App() {
  const [enteredTodo, setEnteredTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const enteredTodoHandler = (enteredText) => {
    setEnteredTodo(enteredText);
  };

  const addTodoHandler = () => {
    if (enteredTodo.trim().length === 0) {
      return;
    }
    setTodoList((prevTodoList) => [
      { id: Date.now().toString(), text: enteredTodo },
      ...prevTodoList,
    ]);
    setEnteredTodo("");
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.title}>My TODO App</Text>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            placeholder="Enter your todo!"
            value={enteredTodo}
            onChangeText={enteredTodoHandler}
            style={styles.enteredTodo}
          />
          <Pressable style={styles.button} onPress={addTodoHandler}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
          {/* <Button onPress={addTodoHandler} title="Add New Todo" color="white" /> */}
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
  enteredTodo: {
    padding: 12,
    marginTop: 30,
    width: "70%",
    borderRadius: 6,
    borderColor: "white",
    backgroundColor: "white",
  },
  singleTodo: {
    backgroundColor: "#E95670",
    marginVertical: 7,
    borderRadius: 6,
    marginHorizontal: 2,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  todoText: {
    color: "white",
    fontWeight: 600,
    padding: 8,
    fontSize: 15,
  },
  todoList: {
    flex: 2,
    margin: 30,
    width: "90%",
  },
  button: {
    backgroundColor: "#FB8DA0",
    width: 50,
    height: 50,
    borderRadius: "100%",
    marginLeft: 20,
    marginTop: 30,
    fontWeight: 500,
    fontSize: 23,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 600,
    color: "white",
    marginBottom: 3,
  },
});
