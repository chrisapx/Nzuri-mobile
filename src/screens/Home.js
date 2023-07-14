import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import SearchBar2 from "../components/SearchBar2";
import FeaturedFoods from "../components/FeaturedFoods";

const Home = () => {
  return (
    <View style={styles.container}>
      <SearchBar2/>
      <FeaturedFoods/>
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
