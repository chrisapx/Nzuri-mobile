import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AccItem = ({ item, linkTo }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.secondCont}>
        <View style={styles.leftContainer}>
          <Text style={styles.text}>{item}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Image
            source={require('../assets/icons/go.png')}
            alt="Go"
            resizeMode="contain"
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.line}></View>
    </View>
  );
};

export default AccItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  secondCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  line: {
    height: 1,
    backgroundColor: "#C3C3C3",
    marginHorizontal: 20,
  },
  rightContainer: {
    marginLeft: 10,
  },
  icon: {
    width: 16.157,
    height: 20.069,
  },
});