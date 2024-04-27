import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Menu from '../screens/menu';

const Stack = createNativeStackNavigator();

const MenuNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="menuIndex">
      <Stack.Screen
        component={Menu}
        name="menuIndex"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MenuNavigator;
