import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {screenWidth} from '../helper/helper';

interface Props {
  city: string;
  degree: number;
  status: string;
  heighst: number;
  lowest: number;
}

const WeatherInfo: React.FC<Props> = Props => {
  const {city, degree, heighst, lowest, status} = Props;
  return (
    <View style={styles.container}>
      <Text style={styles.city}>{city}</Text>
      <View style={styles.degree}>
        <Text style={styles.degreeText}>{degree}</Text>
        <Text style={[styles.degreeText, styles.dot]}>&#x2022;</Text>
      </View>
      <Text style={styles.status}>{status}</Text>
      <View style={styles.info}>
        <View style={styles.grid}>
          <Text style={styles.text}>H:{heighst}</Text>
          <Text style={[styles.text, styles.smallDot]}>&#x2022;</Text>
        </View>
        <View style={styles.grid}>
          <Text style={styles.text}>L:{lowest}</Text>
          <Text style={[styles.text, styles.smallDot]}>&#x2022;</Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherInfo;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: screenWidth * 0.025,
    marginTop: screenWidth * 0.1,
  },
  city: {
    fontSize: screenWidth * 0.1,
    color: 'white',
    fontWeight: '400',
  },
  degree: {
    flexDirection: 'row',
    marginVertical: screenWidth * -0.03,
  },
  degreeText: {
    fontSize: screenWidth * 0.25,
    fontWeight: '200',
    color: 'white',
  },
  status: {
    fontSize: screenWidth * 0.05,
    color: '#c7c3c3',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: screenWidth * 0.05,
  },
  grid: {
    flexDirection: 'row',
  },
  text: {
    fontWeight: '500',
    fontSize: screenWidth * 0.05,
  },
  dot: {
    position: 'absolute',
    right: screenWidth * -0.06,
    top: screenWidth * -0.06,
  },
  smallDot: {
    position: 'absolute',
    top: screenWidth * -0.009,
    left: screenWidth * 0.09,
  },
});
