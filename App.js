import { StatusBar } from "expo-status-bar";
import React from "react";
import { Navigation } from "react-native-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Landing from "./src/screens/Landing";
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Home from './src/screens/Home';
import Varieties from './src/screens/Varieties';
import Details from './src/screens/Details';
import Payment from './src/screens/Payment';
import Settings from './src/screens/Settings';
import About from './src/screens/About';
import Error from './src/screens/Error';
import Confirmation from './src/screens/Confirmation';
import Orders from "./src/screens/Orders";
import Search from "./src/screens/Search";
import Account from "./src/screens/Account";

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
      // changing navigator settings
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: "center",
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0],
              extrapolate: 'clamp',
            }),
          },
        }),
        transitionSpec: {
          open: { animation: 'timing', config: { duration: 5 } },
          close: { animation: 'timing', config: { duration: 5 } },
        },
      }}
    >
        {/* <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Signup" component={Signup} /> */}

        <stack.Screen
          name="Home"
          component={Home}
          options={
            {
              // headerRight: () => <HomeButton />,
              // headerLeft: () => <Profile />,
            }
          }
        />
        <stack.Screen name="Varieties" component={Varieties} />
        <stack.Screen name="Details" component={Details} />
        <stack.Screen name="Payment" component={Payment} />
        <stack.Screen name="Orders" component={Orders} />
        <stack.Screen name="Search" component={Search} />
        <stack.Screen name="Account" component={Account} />

        <stack.Screen name="Settings" component={Settings} />
        <stack.Screen name="About" component={About} />
        <stack.Screen name="Confirmation" component={Confirmation} />
        <stack.Screen name="Error" component={Error} />
        {/* <stack.Screen name="Varieties" component={Varieties} />
        <stack.Screen name="Varieties" component={Varieties} />
        <stack.Screen name="Varieties" component={Varieties} />
        <stack.Screen name="Varieties" component={Varieties} /> */}
      </stack.Navigator>
    </NavigationContainer>
  );
}
