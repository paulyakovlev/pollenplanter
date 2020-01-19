import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";

const pollinators = [
  {
    id: 0,
    name: "Carpenter Bee",
    fact: "cute"
  },
  {
    id: 1,
    name: "Hummingbird",
    fact: "pretty"
  },
  {
    id: 2,
    name: "Monarch Butterfly",
    fact: "spots"
  },
  {
    id: 3,
    name: "Luna Moth",
    fact: "moon"
  },
  {
    id: 4,
    name: "Luna Moth",
    fact: "moon"
  },
  {
    id: 5,
    name: "Luna Moth",
    fact: "moon"
  },
  {
    id: 6,
    name: "Luna Moth",
    fact: "moon"
  },
  {
    id: 7,
    name: "Luna Moth",
    fact: "moon"
  },
  {
    id: 8,
    name: "Luna Moth",
    fact: "moon"
  },
  {
    id: 9,
    name: "Luna Moth",
    fact: "moon"
  },
  {
    id: 10,
    name: "Luna Moth",
    fact: "moon"
  }
];
class List extends React.Component {
  alertItemName = item => {
    alert(item.fact);
  };
  render() {
    return (
      <Card title="Select Pollinators" borderRadius={25}>
        {pollinators.map((u, i) => {
          return (
            <View key={i} style={styles.card}>
              <Image
                source={require("../assets/logo.png")}
                resizeMode="cover"
                style={styles.image}
              />
              <Text style={styles.name}>{u.name}</Text>
            </View>
          );
        })}
      </Card>
    );
  }
}
export default List;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "orange",
    alignItems: "center"
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20
  },
  image: {
    width: 75,
    height: 75
  },
  card: {
    marginBottom: 25
  }
});
