import { View, SafeAreaView, StatusBar, ScrollView  } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems from "../components/RestaurantItem";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Categories />
      <RestaurantItems />
      </ScrollView>
    </SafeAreaView>
  );
}
