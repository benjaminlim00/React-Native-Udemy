import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange }) => (
  <View style={styles.backgroundStyle}>
    <Feather name='search' styles={styles.iconStyle} />
    <TextInput
      autoCapitalize='none'
      autoCorrect={false}
      style={styles.inputStyle}
      placeholder='Search'
      onChangeText={onTermChange}
      value={term}
    />
  </View>
);

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
