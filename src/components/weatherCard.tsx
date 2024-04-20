import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {screenWidth} from '../helper/helper';
import LinearGradient from 'react-native-linear-gradient';

const WeatherCard = () => {
  return (
    <LinearGradient colors={['#5936B4', '#362A84']} style={styles.container}>
      <Text style={styles.time}>12AM</Text>
      <Image style={styles.image} source={require('../assets/cloud.png')} />
      <Text style={styles.degree}>19 &#x2022;</Text>
    </LinearGradient>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: screenWidth * 0.02,
    paddingVertical: screenWidth * 0.024,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: screenWidth * 0.03,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: screenWidth * 0.3,
    height: screenWidth * 0.4,
  },
  image: {
    height: 28,
    width: 44,
  },
  time: {
    fontSize: screenWidth * 0.03,
    color: 'white',
  },
  degree: {
    fontSize: screenWidth * 0.05,
    color: 'white',
  },
});
