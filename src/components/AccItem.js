import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AccItem = ({item, linkTo}) => {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        {/* <TouchableOpacity onPress={()=> navigation.navigate({linkTo})}> */}
            <View style={styles.secondCont}>
                <View style={styles.text}>
                    <Text style={{fontSize:20 }}>{item}</Text>
                </View>
                <View style={styles.icon}>
                    <Image source={require('../utils/go.png')} 
                        alt="Go"
                        // style={{ width: 25, height: 25 }}
                        resizeMode="contain"
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
  secondCont : {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  text : {
    color: "#040000",
    fontSize: 16,
    fontWeight: 400,
  },
  line: {
    width: 300,
    height: 1,
    backgroundColor: "#C3C3C3",

  },
  icon: {
    width: 16.157,
    height: 20.069,
    // transform: rotate(-179.551),
    flexShrink: 0, 
  },
  
});
