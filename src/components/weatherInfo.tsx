import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {screenWidth} from '../helper/helper';

interface Props {
  city: string;
  degree: number;
  status: string;
  heighst: number;
  lowest: string;
}

const WeatherInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>Kabul</Text>
      <View style={styles.degree}>
        <Text style={styles.degreeText}>19</Text>
        <Text style={styles.degreeText}>&#x2022;</Text>
      </View>
      <Text style={styles.status}>Mostly Clear</Text>
      <View style={styles.info}>
        <View style={styles.grid}>
          <Text style={styles.text}>H:24</Text>
          <Text style={styles.text}>&#x2022;</Text>
        </View>
        <View style={styles.grid}>
          <Text style={styles.text}>L:24</Text>
          <Text style={styles.text}>&#x2022;</Text>
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
    fontSize: 34,
    color: 'white',
    fontWeight: '300',
  },
  degree: {
    flexDirection: 'row',
  },
  degreeText: {
    fontSize: 96,
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
});
