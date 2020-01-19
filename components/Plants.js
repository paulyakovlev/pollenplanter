import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import background from "../assets/background.png";

const users = [
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  },
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  },
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  }
];
class PlantScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.backgroundImage}>
          <Text style={styles.instructions}>Plants view</Text>
          <Card title="EPSTEIN DIDNT KILL HIMSELF">
            {users.map((u, i) => {
              return (
                <View key={i} style={styles.user}>
                  <Image
                    style={styles.image}
                    source={require("../assets/logo.png")}
                  />
                  <Text style={styles.name}>{u.name}</Text>
                </View>
              );
            })}
          </Card>
        </ImageBackground>
      </View>
    );
  }
}

export default PlantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  image: {
    width: 75,
    height: 75
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
  },

  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9
  }
});
