import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import List from './PollinatorsList.js'

class Pollinators extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Pollinators view</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Plants")}
          style={styles.button}
        >
          <Text style={styles.button}>Next</Text>
        </TouchableOpacity>
      <List />
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
