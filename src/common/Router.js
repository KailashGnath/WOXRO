import * as React from 'react';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "@screens/home/Home.js"
import Splash from "@screens/splash/Splash.js";
import Property from '@screens/property/Property';
import Location from '@screens/location/Location';

const router = () => {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#fff"} barStyle={'dark-content'} />
      <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='Property' component={Property} />
        <Stack.Screen name='Location' component={Location} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default router