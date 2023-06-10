import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import BouncyCheckBox from "react-native-bouncy-checkbox";

const TodoItem = ({ onDeleteTodo, text, id, index }) => {
  const [checkbox, setCheckBox] = useState(false);

  return (
    <Pressable onPress={onDeleteTodo.bind(this, id)}>
      <View style={styles.singleTodo}>
        <View style={styles.todo}>
          <BouncyCheckBox
            isChecked={checkbox}
            onPress={() => {
              setCheckBox(!checkbox);
            }}
            size={30}
            innerIconStyle={{
              backgroundColor: "#713770",
              borderColor: "white",
            }}
          />
          <Text style={styles.todoText}>
            {index + 1}){"  "}
            {text}
          </Text>
        </View>
        <View>{checkbox && <Text style={styles.isChecked}>Done</Text>}</View>
      </View>
    </Pressable>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  singleTodo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E95670",
    marginVertical: 7,
    borderRadius: 6,
    marginHorizontal: 2,
    paddingHorizontal: 10,
    paddingVertical: 13,
  },
  todo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  isChecked: {
    color: "#1ED92E",
    fontSize: 16,
  },
  todoText: {
    color: "white",
    fontWeight: 600,
    fontSize: 16,
  },
});
