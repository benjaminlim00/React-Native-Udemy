import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Item from "../components/Item";

import { db } from "../config";
let itemsRef = db.ref("/items");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});

class List extends Component {
  state = {
    items: []
  };
  componentDidMount() {
    itemsRef.on("value", snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    });
  }

  render() {
    console.log("state: ", this.state);
    return (
      <View style={styles.container}>
        {this.state.items.length > 0 ? (
          <Item items={this.state.items} />
        ) : (
          <Text>No Items</Text>
        )}
      </View>
    );
  }
}

export { List };
