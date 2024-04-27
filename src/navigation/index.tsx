import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MenuNavigator from './menu';
import AppNavigator from './AppNavigator';

const RootStack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="appNavigator">
        <RootStack.Screen
          name="appNavigator"
          component={AppNavigator}
          options={{headerShown: false}}
        />

        <RootStack.Screen
          name="menu"
          component={MenuNavigator}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
