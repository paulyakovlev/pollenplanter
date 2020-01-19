import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, stackNavigator } from "react-navigation";
import HomeScreen from "./components/Home";
import PlantScreen from "./components/Plants";
import PollinatorScreen from "./components/Pollinators";
import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBwb4yV1EUJbWab6AGyIfzrj_ShbgSdUdQ",
  authDomain: "pollenplanter-cac8a.firebaseapp.com",
  databaseURL: "https://pollenplanter-cac8a.firebaseio.com",
  storageBucket: "pollenplanter-cac8a.appspot.com"
};

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
