import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {screenWidth} from '../helper/helper';

const MenuCard = () => {
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Text>View</Text>
    </View>
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
