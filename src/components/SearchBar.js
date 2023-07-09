import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ onSearch }) => {
  
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for items..."
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
      />
      <Ionicons
        name="search"
        size={24}
        color="#757575"
        onPress={handleSearch}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f12',
    width: 300,
    height: 40,
    borderRadius: 19,
    paddingHorizontal: 15,
    marginBottom: 10,
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    marginVertical: 5,
    

  },
  input: {
    flex: 1,
    height: 35,
    padding: 5,
  },
  icon: {
    marginLeft: 10,
  },
});

export default SearchBar;