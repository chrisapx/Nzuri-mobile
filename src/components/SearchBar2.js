import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SearchBar2 = () => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const handleInputPress = () => {
    navigation.navigate('Search');
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Keyboard.dismiss(); // Dismiss the keyboard when navigating to the search screen
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <TouchableOpacity onPress={handleInputPress} activeOpacity={1}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search for items..."
          value={searchText}
          onChangeText={setSearchText}
          editable={false} // Disable editing and prevent the keyboard from showing
        />
        <Ionicons
          name="search"
          size={24}
          color="#757575"
          onPress={handleInputPress}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f12',
    width: 300,
    height: 43,
    borderRadius: 19,
    paddingHorizontal: 15,
    marginBottom: 10,
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: '#D9D9D9',
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

export default SearchBar2;
