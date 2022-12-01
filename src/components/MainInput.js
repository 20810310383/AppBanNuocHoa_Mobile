import React from "react";
import { View, Text, TextInput } from "react-native";

export default function MainInput(props) {
  const {
    title,
    value,
    onChangeText,
    placeholder,
    onEndEditing,
    secureTextEntry,
  } = props;
  return (
    <>
      <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10 }}>
        {title}
      </Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={{
          backgroundColor: "#f4f4f4",
          paddingVertical: 15,
          borderRadius: 20,
          paddingHorizontal: 20,
          marginBottom: 15,
        }}
        placeholder={placeholder}
        onEndEditing={onEndEditing}
        value={value}
        onChangeText={onChangeText}
      />
    </>
  );
}
