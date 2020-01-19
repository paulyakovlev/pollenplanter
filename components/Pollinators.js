import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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

  instructions: {
    color: "black",
    fontSize: 18,
    marginHorizontal: 15
  }
});
