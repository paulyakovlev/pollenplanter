import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";

const plants = [
  {
    id: 0,
    name: "Evening Primrose",
    fact: "cute"
    //image: image0
  },
  {
    id: 1,
    name: "Phlox",
    fact: "pretty"
    //image: image1
  },
  {
    id: 2,
    name: "Fleabane",
    fact: "spots"
    //image: image2
  },
  {
    id: 3,
    name: "Goldenrod",
    fact: "moon"
    //image: image3
  },
  {
    id: 4,
    name: "Blue Sage",
    fact: "flying fox"
    //image: image4
  },
  {
    id: 5,
    name: "California Fuchia",
    fact: "flying fox"
    //image: image4
  },
  {
    id: 6,
    name: "Hummingbird Sage",
    fact: "flying fox"
    //image: image4
  },
  {
    id: 7,
    name: "Larkspur",
    fact: "flying fox"
    //image: image4
  },
  {
    id: 8,
    name: "Hyssop",
    fact: "flying fox"
    //image: image4
  },
  {
    id: 9,
    name: "California Poppy",
    fact: "flying fox"
    //image: image4
  },
  {
    id: 10,
    name: "Golden Rod",
    fact: "flying fox"
    //image: image4
  },
  {
    id: 11,
    name: "Salvia",
    fact: "flying fox"
    //image: image4
  },
  {
    id: 12,
    name: "Alder",
    fact: "flying fox"
    //image: image4
  },
  {
    id: 13,
    name: "Milkweed",
    fact: "flying fox"
    //image: image4
  }
];

class List extends React.Component {
  render() {
    return (
      <Card title="Plants to Feed Your Pollinators" borderRadius={25}>
        {plants.map((u, i) => {
          return (
            <TouchableOpacity>
              <View key={i} style={styles.card}>
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
    marginRight: 25,
    marginHorizontal: 15,
    marginVertical: 15
  },
  image: {
    width: 75,
    height: 75,
    marginHorizontal: 15
  },
  card: {
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 0.5,
    borderRadius: 15
  }
});
