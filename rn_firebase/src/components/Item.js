import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  itemList: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  itemText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default class Item extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
      <View style={styles.itemList}>
        {this.props.items.map((item, index) => {
          return (
            <View key={index}>
              <Text style={styles.itemText}>{item.value}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}
