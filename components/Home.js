import React from "react";
import {
  TextInput,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView
} from "react-native";
import { Button, Card, Input } from "react-native-elements";
import logo from "../assets/logo.png";
import background from "../assets/background.png";
import * as firebase from "firebase";

function storeHighScore(userId, score) {
  firebase
    .database()
    .ref("users/" + userId)
    .set({
      highscore: score
    });
}

class HomeScreen extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={"padding"}>
        <ImageBackground source={background} style={styles.backgroundImage}>
          <Text style={styles.instructions}>Welcome to PollenPlanter!</Text>
          <Image source={logo} style={styles.logo} />

          <Card>
            <View style={{ width: 225 }}>
              <Input placeholder="Zip Code" style={styles.input} />
            </View>
            <Button
              buttonStyle={{ backgroundColor: "orange" }}
              onPress={() => this.props.navigation.navigate("Pollinators")}
              style={styles.button}
              title="Next"
            ></Button>
          </Card>
        </ImageBackground>
      </KeyboardAvoidingView>
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
    color: "white",
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 15
  },

  input: {
    color: "white"
  },

  button: {
    color: "white",
    marginTop: 15
  },

  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9
  }
});
