import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import background from "../assets/background.png";
import List from "./PlantsList.js";

class PlantScreen extends React.Component {
  static navigationOptions = {
    title: "",
    headerTransparent: true
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.backgroundImage}>
          <Text style={styles.instructions}></Text>
          <ScrollView style={{ width: 350 }}>
            <List />
          </ScrollView>
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

  image: {
    width: 75,
    height: 75
  },

  instructions: {
    color: "black",
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 15,
    marginTop: 55,
    justifyContent: "center"
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
    opacity: 0.9
  }
});
