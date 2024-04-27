import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {screenWidth} from '../helper/helper';

interface Props {
  text: string;
  navigate: string;
  navigation: any;
}

const MenuCard: React.FC<Props> = Props => {
  const {navigate, text, navigation} = Props;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(navigate)}
      style={styles.container}>
      <Text>{text}</Text>
      <Text>View</Text>
    </TouchableOpacity>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: screenWidth * 0.04,
    borderWidth: screenWidth * 0.0015,
    borderColor: 'white',
    borderRadius: screenWidth * 0.03,
  },
});
