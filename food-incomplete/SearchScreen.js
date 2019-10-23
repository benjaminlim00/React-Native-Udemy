import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from './SearchBar';

const SearchScreen = () => {
  const [term, searchTerm] = useState('');

  return (
    <View>
      <SearchBar term={term} onTermChange={searchTerm} />
      <Text>SearchScreen</Text>
      <Text>{term}</Text>
    </View>
  );
};

export default SearchScreen;
