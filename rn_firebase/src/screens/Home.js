import React, { Component } from "react";
import { Text, View, Button } from "react-native";

class Home extends Component {
  render() {
    return (
      <View>
        <Text>Go to screen:</Text>
        <Button
          title="Add an Item"
          onPress={() => {
            this.props.navigation.navigate("AddItemScreen");
          }}
        />
        <Button
          title="See list"
          onPress={() => {
            this.props.navigation.navigate("ListItemScreen");
          }}
        />
      </View>
    );
  }
}

export { Home };
