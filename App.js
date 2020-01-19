import React from "react";
import { TextInput, Image, StyleSheet, Text, View } from "react-native";
import logo from "./assets/logo.png";
import * as firebase from "firebase";

export default function App() {
  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyBwb4yV1EUJbWab6AGyIfzrj_ShbgSdUdQ",
    authDomain: "pollenplanter-cac8a.firebaseapp.com",
    databaseURL: "https://pollenplanter-cac8a.firebaseio.com",
    storageBucket: "pollenplanter-cac8a.appspot.com"
  };

  firebase.initializeApp(firebaseConfig);
  const [value, onChangeText] = React.useState("9-digit zip code");

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.instructions}>
        Welcome to PollenPlanter! Please enter your zip code below to get
        started.
      </Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
        clearButtonMode={"while-editing"}
        clearTextOnFocus={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  logo: {
    width: 225,
    height: 225,
    marginBottom: 10
  },

  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15
  }
});
