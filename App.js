import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, stackNavigator } from "react-navigation";
import HomeScreen from "./components/Home";
import PlantScreen from "./components/Plants";
import PollinatorScreen from "./components/Pollinators";

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Pollinators: {
    screen: PollinatorScreen
  },
  Plants: {
    screen: PlantScreen
  }
});

export default createAppContainer(RootStack);
