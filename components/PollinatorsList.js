import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";

const image0 = require("../assets/logo.png")
const image1 = require("../assets/hummingbird.png")
const image2 = require("../assets/monarch.png")
const image3 = require("../assets/lunamoth.png")
const image4 = require("../assets/bat.png")

const pollinators = [
  {
    id: 0,
    name: "Carpenter Bee",
    fact: "cute",
    image: image0
  },
  {
    id: 1,
    name: "Hummingbird",
    fact: "pretty",
    image: image1
  },
  {
    id: 2,
    name: "Monarch Butterfly",
    fact: "spots",
    image: image2
  },
  {
    id: 3,
    name: "Luna Moth",
    fact: "moon",
    image: image3
  },
  {
    id: 4,
    name: "Bat",
    fact: "flying fox",
    image: image4

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
                  source={u.image}
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
