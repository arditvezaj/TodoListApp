import { View, Text, Pressable, StyleSheet } from "react-native";

const TodoItem = () => {
  return (
    <View id={todo.item.id} style={styles.singleTodo}>
      <Pressable onPress={deleteTodoHandler.bind(todo.item.id)}>
        <Text style={styles.todoText}>{todo.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
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
});
