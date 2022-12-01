import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import MainButton from "../../components/MainButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProductDetailScreen({ navigation, route }) {
  const params = route.params;
  const { item } = params;
  const [amount, setAmount] = useState(1);
  const onGoBack = () => {
    navigation.goBack();
  };
  const addToCart = async () => {
    let cartData = await AsyncStorage.getItem("cartData");
    if (cartData) {
      cartData = JSON.parse(cartData);
      cartData.push({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        amount: amount,
        owner: item.owner,
      });
    } else {
      cartData = [];
      cartData.push({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        amount: amount,
        owner: item.owner,
      });
    }
    AsyncStorage.setItem("cartData", JSON.stringify(cartData));
    navigation.navigate("CartScreen");
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ position: "relative" }}>
        <Image
          style={{ width: "100%", height: 400 }}
          source={{ uri: item.image }}
        />
        <TouchableOpacity
          onPress={onGoBack}
          style={{
            backgroundColor: "black",
            position: "absolute",
            top: 30,
            left: 12,
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
        >
          <Ionicons name="chevron-back-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 12, marginTop: 12 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>{item.name}</Text>
        <Text style={{ color: "#F99928", fontSize: 16 }}>{item.owner}</Text>
        <Text
          style={{
            color: "#000",
            fontSize: 12,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          MÔ TẢ
        </Text>
        <ScrollView style={{ width: "100%", height: 150 }}>
          <Text
            style={{
              color: "gray",
            }}
          >
            {item.description}
          </Text>
        </ScrollView>


        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <View>
            <Text
              style={{
                color: "black",
                fontSize: 12,
                fontWeight: "bold",
                marginLeft: 12,
              }}
            >
              SỐ LƯỢNG
            </Text>
            <View
              style={{
                backgroundColor: "#F4F4F4",
                paddingHorizontal: 16,
                borderRadius: 100,
                marginTop: 4,
                width: 150,
                paddingVertical: 8,
                borderWidth: 2,
                borderColor: "black",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setAmount((val) => val + 1);
                }}
              >
                <Ionicons name="add" size={24} color="black" />
              </TouchableOpacity>
              <Text style={{ color: "black", flex: 1, textAlign: "center",fontSize: 18}}>{amount}</Text>
              <TouchableOpacity
                onPress={() => {
                  if (amount > 1) setAmount((val) => val - 1);
                }}
              >
                <Ionicons name="remove" size={24} color="black" />
              </TouchableOpacity>

            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: "#000",
                fontSize: 15,
                textAlign: "right",
                fontWeight: "bold",
              }}
            >
              TỔNG
            </Text>
            <Text
              style={{
                color: "red",
                fontSize: 20,
                textAlign: "right",
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              {item.price * amount} VND
            </Text>
          </View>
        </View>
        <MainButton
          onPress={addToCart}
          style={{ marginTop: 10 }}
          title={"THÊM VÀO GIỎ"}
        />
      </View>
    </ScrollView>
  );
}
