import { Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

const TodoInput = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const enteredTodoHandler = (enteredText) => {
    setEnteredTodo(enteredText);
  };

  const addTodoHandler = () => {
    props.onAddTodo(enteredTodo);
    setEnteredTodo("");
  };

  return (
    <>
      <TextInput
        placeholder="Enter your todo!"
        value={enteredTodo}
        onChangeText={enteredTodoHandler}
        style={styles.enteredTodo}
      />
      <Pressable style={styles.button} onPress={addTodoHandler}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  enteredTodo: {
    padding: 12,
    marginTop: 30,
    width: "70%",
    borderRadius: 6,
    borderColor: "white",
    backgroundColor: "white",
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

export default TodoInput;
