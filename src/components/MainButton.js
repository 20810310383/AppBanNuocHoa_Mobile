import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function MainButton(props) {
  const { title, onPress, style, isSubButton } = props;

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...style,
        ...(isSubButton && styles.subButton),
      }}
      onPress={onPress}
    >
      <Text
        style={{ ...styles.title, color: isSubButton ? "black" : "#fff" }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "black",
    borderRadius: 100,
    width: "60%",
    marginLeft: "20%",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
  subButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 100,
  },
});
