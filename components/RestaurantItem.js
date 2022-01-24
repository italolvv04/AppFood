import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "react-native-vector-icons";

export const localRestaurants = [
  {
    name: "Dona Cida - Pirenópolis",
    image_url:
      "https://media-cdn.tripadvisor.com/media/photo-p/12/04/88/af/photo4jpg.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    timing: "30-45 • min",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Rua do Lazer - Pirenópolis",
    image_url:
      "https://diaonline.ig.com.br/wp-content/uploads/2019/06/restaurantes-pirenopolis_capa.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    timing: "30-65 • min",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "Empório Do Cerrado - Pirenópolis",
    image_url:
      "https://media-cdn.tripadvisor.com/media/photo-s/0f/0c/1a/cc/casa-linda-e-aconchegante.jpg",
    categories: ["Indian", "Bar"],
    price: "$$",
    timing: "30-55 • min",
    reviews: 700,
    rating: 4.9,
  },
];

export default function RestaurantItems() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {localRestaurants.map((restaurant, index) => (
        <View
          key={index}
          style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
        >
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} timing={restaurant.timing} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}> {props.name} </Text>
      <Text style={{ fontSize: 13, color: "gray" }}> {props.timing} </Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text> {props.rating} </Text>
    </View>
  </View>
);
