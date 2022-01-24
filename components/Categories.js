import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Escolher",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Refrigerantes",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Paradaria",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Ofertas",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Café & Chá",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Sobremesas",
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>
              {" "}
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
