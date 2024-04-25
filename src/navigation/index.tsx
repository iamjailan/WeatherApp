import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Details from '../screens/details';
import AddCity from '../screens/addCity';
import Menu from '../screens/menu';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="details"
          component={Details}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="addCity"
          component={AddCity}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="menu"
          component={Menu}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
