import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import background from "../assets/background.png";

class PlantScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.backgroundImage}>
          <Text style={styles.instructions}>Plants view</Text>
        </ImageBackground>
      </View>
    );
  }
}

export default PlantScreen;

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
  },

  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7
  }
});
