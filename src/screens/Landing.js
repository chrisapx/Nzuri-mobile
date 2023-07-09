import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Landing = () => {
  return (
    <View style={styles.container}>
      <Text>NZURI</Text>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF9314"
  },

  vavs: {
    flex: 1,
  },
});
