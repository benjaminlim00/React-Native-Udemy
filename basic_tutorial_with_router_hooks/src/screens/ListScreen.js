import React, { Component } from 'react';
import {
  Text, StyleSheet, FlatList
} from 'react-native';

class ListScreen extends Component {
  render() {
    const friends = [
      {
        name: 'friend1'
      }, {
        name: 'friend2'
      }, {
        name: 'friend3'
      }, {
        name: 'friend4'
      }, {
        name: 'friend5'
      }
    ];

    return (
      <FlatList
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({ item }) => (
          <Text style={styles.textStyle}>{item.name}</Text>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
