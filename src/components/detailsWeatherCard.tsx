import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {screenWidth} from '../helper/helper';

interface Props {
  province: string;
  degree: string;
  status: string;
}

const DetailsWeatherCard: React.FC<Props> = Props => {
  const {degree, province, status} = Props;
  return (
    <View style={styles.container}>
      <Text style={styles.city}>{province}</Text>
      <View style={styles.box}>
        <Text style={styles.text}>{degree}</Text>
        <Text style={styles.text}>|</Text>
        <Text style={styles.text}>{status}</Text>
      </View>
    </View>
  );
};

export default DetailsWeatherCard;

const styles = StyleSheet.create({
  container: {
    paddingVertical: screenWidth * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: screenWidth * 0.002,
    borderColor: 'white',
    borderRadius: screenWidth * 0.04,
    marginVertical: screenWidth * 0.03,
  },
  city: {
    fontSize: screenWidth * 0.08,
    color: 'white',
    fontWeight: '500',
  },
  box: {
    flexDirection: 'row',
    gap: screenWidth * 0.01,
  },
  text: {
    fontSize: screenWidth * 0.04,
  },
});
