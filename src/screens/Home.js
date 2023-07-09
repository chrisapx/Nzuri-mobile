import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <View style={styles.container}>
      <SearchBar/>
      <View style={styles.contentContainer}>
        <Text>This is the home page</Text>
      </View>

       <Footer />
    </View>
  );
};

export default Home;

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
