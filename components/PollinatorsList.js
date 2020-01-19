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
  render() {
    return (
      <Card title="Select Pollinators" borderRadius={25}>
        {pollinators.map((u, i) => {
          return (
            <TouchableOpacity>
              <View key={i} style={styles.card}>
                <Image
                  source={require("../assets/logo.png")}
                  resizeMode="cover"
                  style={styles.image}
                />
                <Text style={styles.name}>{u.name}</Text>
              </View>
            </TouchableOpacity>
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
    alignItems: "center"
  },
  name: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 25
  },
  image: {
    width: 75,
    height: 75,
    marginHorizontal: 15
  },
  card: {
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 0.5,
    borderRadius: 15
  }
});
