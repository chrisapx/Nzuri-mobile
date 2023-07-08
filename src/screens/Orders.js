import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";

const Orders = () => {
  return (
    <View style={styles.container}>
      <View >
        <Text>This is the Orders page</Text>
      </View>

       <Footer />
    </View>
  );
};

export default Orders;

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
