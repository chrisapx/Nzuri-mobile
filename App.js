import { StatusBar } from "expo-status-bar";
import React from "react";
import { Navigation } from "react-native-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Screen
        name="Register"
        component={Register}
        options={
          {
            // headerRight: () => <HomeButton />,
            // headerLeft: () => <Profile />,
          }
        }
      />
    </NavigationContainer>
  );
}
