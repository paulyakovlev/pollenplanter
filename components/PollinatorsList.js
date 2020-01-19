import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
class List extends Component {
  state = {
    names: [
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
    ]
  };
  alertItemName = item => {
    alert(item.fact);
  };
  render() {
    return (
      <View>
        {this.state.names.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={styles.container}
            onPress={() => this.alertItemName(item)}
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
export default List;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#FFE80C",
    alignItems: "center"
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20
  }
});
