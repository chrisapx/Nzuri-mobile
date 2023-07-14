import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

const Search = () => {
  return (
    <View style={styles.container}>
      
      <SafeAreaView>
        <SearchBar />
        
        {/* <View >
          <Text>This is the Search page</Text>
        </View> */}

      </SafeAreaView>

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
