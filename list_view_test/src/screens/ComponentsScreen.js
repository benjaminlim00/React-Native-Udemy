import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

class ComponentsScreen extends Component {
  render() {
    const { textStyle } = styles;
    return (
      <View>
        <Text style={textStyle}>ComponentsScreen</Text>
        <Text>ComponentsScreen2</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ComponentsScreen;
