import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function MyTabBar({ state, descriptors, navigation }) {
  var imgArr = [
    require("../../assets/Home.png"),
    require("../../assets/search.png"),
    require("../../assets/Basket.png"),
    require("../../assets/profile.png"),
  ];
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            onPress={onPress}
            style={{ flex: 1, alignItems: "center" }}
          >
            <Image
              style={{
                tintColor: isFocused ? "orange" : "#222",
                height: 26,
                width: 26,
                resizeMode: "contain",
              }}
              source={imgArr[index]}
            />
            <View
              style={{
                marginTop: 4,
                height: 2,
                width: 50,
                borderRadius: 10,
                backgroundColor: isFocused ? "orange" : "transparent",
              }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
