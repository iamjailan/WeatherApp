import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Menu from '../screens/menuScreen';
import About from '../screens/menuScreen/about';

const Stack = createNativeStackNavigator();

const MenuNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="menuIndex">
      <Stack.Screen
        component={Menu}
        name="menuIndex"
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="about"
        component={About}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MenuNavigator;
