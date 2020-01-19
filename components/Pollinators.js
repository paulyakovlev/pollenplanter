import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PollinatorScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>Pollinators view</Text>
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
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15
  }
});
