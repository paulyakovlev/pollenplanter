import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";
import * as firebase from "firebase";
import "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBwb4yV1EUJbWab6AGyIfzrj_ShbgSdUdQ",
  authDomain: "pollenplanter-cac8a.firebaseapp.com",
  databaseURL: "https://pollenplanter-cac8a.firebaseio.com",
  storageBucket: "pollenplanter-cac8a.appspot.com",
  projectId: "pollenplanter-cac8a"
};

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore();

export function setData() {
  dbref
    .collection("nativeplants")
    .doc("Milkweed")
    .set({
      scientificname: "Asclepias syriaca",
      pollinators: ["bees", "monarchs"]
    });
}
