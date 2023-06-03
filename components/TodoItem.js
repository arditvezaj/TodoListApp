import { View, Text, Pressable, StyleSheet } from "react-native";

const TodoItem = (props) => {
  return (
    <Pressable onPress={props.onDeleteTodo.bind(this, props.id)}>
      <View style={styles.singleTodo}>
        <Text style={styles.todoText}>{props.text}</Text>
      </View>
    </Pressable>
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
