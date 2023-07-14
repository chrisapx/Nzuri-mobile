import React, { useEffect, useRef } from 'react';
import { View, TextInput, StyleSheet, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  const searchInputRef = useRef(null);

  useEffect(() => {
    const keyboardTimeout = setTimeout(() => {
      searchInputRef.current.focus(); // Focus the text input after a short timeout
    }, 200);

    return () => {
      clearTimeout(keyboardTimeout); // Clear the timeout when the component unmounts
    };
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        ref={searchInputRef}
        style={styles.input}
        placeholder="Search for items..."
        onSubmitEditing={Keyboard.dismiss} // Dismiss the keyboard on submit
        autoFocus={true} // Automatically focus on the text input
      />
      <Ionicons name="search" size={24} color="#757575" style={styles.icon} />
    </View>
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

export default SearchBar;
