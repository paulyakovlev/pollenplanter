import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from "react-native";
import { Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import List from "./PollinatorsList.js";
import background from "../assets/background.png";

class Pollinators extends React.Component {
  static navigationOptions = {
    title: "",
    headerTransparent: true
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.backgroundImage}>
          <Button
            buttonStyle={{ backgroundColor: "orange", borderRadius: 15 }}
            onPress={() => this.props.navigation.navigate("Plants")}
            style={styles.button}
            title="Next"
          ></Button>
          <ScrollView style={{ width: 350 }}>
            <List />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

export default Pollinators;

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
    marginBottom: 15,
    marginTop: 35
  },

  textBox: {
    height: 40,
    width: 120,
    borderColor: "gray",
    borderWidth: 1
  },

  button: {
    color: "white",
    marginTop: 45
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
