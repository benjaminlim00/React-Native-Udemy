import React from 'react';
import {
  Text, StyleSheet, View, Button
} from 'react-native';

const HomeScreen = () => (
  <View>
    <Text style={styles.text}>Hi there!</Text>
    <Button>Go to Components Demo</Button>
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
