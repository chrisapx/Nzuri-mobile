import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity onPress={ () => navigation.navigate('Home')}>
        <View style={styles.iconContainer}>
          <Ionicons name="home" size={24} color="grey" />
          <Text style={styles.iconText}>Home</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={ () => navigation.navigate('Search')}>
        <View style={styles.iconContainer}>
          <Ionicons name="search" size={24} color="grey" />
          <Text style={styles.iconText}>Search</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={ () => navigation.navigate('Orders')}>
        <View style={styles.iconContainer}>
          <Ionicons name="receipt" size={24} color="grey" />
          <Text style={styles.iconText}>Orders</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={ () => navigation.navigate('Account')}>
        <View style={styles.iconContainer}>
          <Ionicons name="person" size={24} color="grey" />
          <Text style={styles.iconText}>Account</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    elevation: 20,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 4,
    fontSize: 14,
  },
});

export default Footer;