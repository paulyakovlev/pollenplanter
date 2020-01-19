import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import List from "./PollinatorsList.js";
import background from "../assets/background.png";
class Pollinators extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.backgroundImage}>
          <Text style={styles.instructions}>
            Which pollinators would you like in your garden?
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Plants")}
            style={styles.button}
          >
            <Text style={styles.button}>Next</Text>
          </TouchableOpacity>
          <ScrollView>
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
