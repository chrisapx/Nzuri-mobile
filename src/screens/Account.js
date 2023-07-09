import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import AccItem from "../components/AccItem";

const Account = () => {
  return (
    <View style={styles.container}>
      
      <AccItem item={"Settings"} linkTo={'Settings'}/>
      <AccItem item={"Login or Create Account"} linkTo={'Login'}/>
      <AccItem item={"Address"} linkTo={'Address'}/>
      <AccItem item={"Payment details"} linkTo={'Payment'}/>
      {/* <AccItem item={"Airtime bills and lones"} linkTo={'Settings'}/> */}
      <AccItem item={"About"} linkTo={'Settings'}/>
      <AccItem item={"Contacts"} linkTo={'Settings'}/>

      <View >
        <Text>This is the Account page</Text>
      </View>

       <Footer />
    </View>
  );
};

export default Account;

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
