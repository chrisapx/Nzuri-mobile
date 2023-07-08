import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";

const Search = () => {
  return (
    <View style={styles.container}>
      <View >
        <Text>This is the Search page</Text>
      </View>

       <Footer />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
