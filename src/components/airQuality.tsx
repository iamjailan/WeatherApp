import {StyleSheet, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors, screenWidth} from '../helper/helper';

const AirQuality = () => {
  return (
    <LinearGradient colors={['#2E335A', '#1C1B33']} style={styles.container}>
      <Text style={styles.title}>AirQuality</Text>
      <Text style={styles.text}>3-Low Health Risk</Text>
      <LinearGradient style={styles.border} colors={['blue', 'white', 'red']} />
    </LinearGradient>
  );
};

export default AirQuality;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#49319D',
    padding: screenWidth * 0.03,
    borderRadius: screenWidth * 0.03,
    borderWidth: screenWidth * 0.003,
    borderColor: colors.border,
  },
  title: {
    color: colors.blackSecondary,
  },
  text: {
    fontSize: screenWidth * 0.06,
    paddingVertical: screenWidth * 0.03,
    color: 'white',
  },
  border: {
    height: screenWidth * 0.015,
    borderRadius: screenWidth * 0.1,
  },
});
