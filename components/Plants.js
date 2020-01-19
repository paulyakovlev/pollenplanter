import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PlantScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>Plants view</Text>
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

  instructions: {
    color: "black",
    fontSize: 18,
    marginHorizontal: 15
  }
});
