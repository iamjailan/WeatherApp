import {Image, StyleSheet, Text} from 'react-native';
import React from 'react';
import {screenWidth} from '../helper/helper';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  hours: number | string;
  time?: 'AM' | 'PM';
  status:
    | 'dayMidRain'
    | 'dayRain'
    | 'tonardo'
    | 'dayCloud'
    | 'nightCloud'
    | 'nightMidRain'
    | 'nightRain';
  degree: number;
}

const WeatherCard: React.FC<Props> = Props => {
  const {degree, hours, status, time} = Props;
  return (
    <LinearGradient colors={['#5936B4', '#362A84']} style={styles.container}>
      <Text style={styles.time}>
        {hours}
        {time}
      </Text>
      <Image
        style={styles.image}
        source={
          status === 'nightMidRain'
            ? require('../assets/bigMoonMidRain.png')
            : status === 'nightRain'
            ? require('../assets/bigMoonMidRain.png')
            : status === 'tonardo'
            ? require('../assets/smallTornado.png')
            : status === 'nightCloud'
            ? require('../assets/smallMoonCloud.png')
            : status === 'dayCloud'
            ? require('../assets/smallSunRain.png')
            : status === 'dayMidRain'
            ? require('../assets/samllSunMidRain.png')
            : status === 'dayRain'
            ? require('../assets/smallSunRain.png')
            : null
        }
      />
      <Text style={[styles.degree]}>{degree} &#x2022;</Text>
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
    height: screenWidth * 0.47,
  },
  image: {
    height: screenWidth * 0.09,
    width: screenWidth * 0.1,
  },
  time: {
    fontSize: screenWidth * 0.03,
    color: 'white',
  },
  degree: {
    fontSize: screenWidth * 0.05,
    color: 'white',
  },
  smallDot: {
    position: 'absolute',
    top: screenWidth * -0.009,
    left: screenWidth * 0.09,
  },
});
