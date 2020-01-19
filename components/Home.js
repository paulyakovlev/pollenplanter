import React from "react";
import {
  TextInput,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import logo from "../assets/logo.png";
import * as firebase from "firebase";
import { render } from "react-dom";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function storeHighScore(userId, score) {
  firebase
    .database()
    .ref("users/" + userId)
    .set({
      highscore: score
    });
}
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBwb4yV1EUJbWab6AGyIfzrj_ShbgSdUdQ",
  authDomain: "pollenplanter-cac8a.firebaseapp.com",
  databaseURL: "https://pollenplanter-cac8a.firebaseio.com",
  storageBucket: "pollenplanter-cac8a.appspot.com"
};

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.instructions}>
          Welcome to PollenPlanter! Please enter your zip code below to get
          started.
        </Text>
        <TextInput
          style={styles.textBox}
          clearButtonMode={"while-editing"}
          clearTextOnFocus={true}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Pollinators")}
          style={styles.button}
        >
          <Text style={styles.button}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default HomeScreen;

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
    color: "black",
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 15
  },

  textBox: {
    height: 40,
    width: 120,
    borderColor: "gray",
    borderWidth: 1
  },

  button: {
    color: "#888"
  }
});
