import React, { Component } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Alert
} from "react-native";

import { db } from "../config";
export const addItem = item => {
  db.ref("/items").push({
    value: item
  });
};

class AddItem extends Component {
  state = {
    text: ""
  };

  handleTextChange = text => {
    this.setState({ text });
  };

  handleSubmit = () => {
    addItem(this.state.text);
    Alert.alert("Item saved successfully");
  };

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Add Item</Text>

        <TextInput
          value={this.state.text}
          style={styles.itemInput}
          onChangeText={this.handleTextChange}
        />

        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "lightgrey"
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: "center"
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    color: "white"
  },
  buttonText: {
    fontSize: 18,
    color: "#111",
    alignSelf: "center"
  },
  button: {
    height: 45,
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  }
});

export { AddItem };
