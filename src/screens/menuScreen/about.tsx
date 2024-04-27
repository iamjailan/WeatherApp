import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {screenWidth} from '../../helper/helper';
import BackButton from '../../components/backButton';
import LinearGradient from 'react-native-linear-gradient';

const About = ({navigation}: any) => {
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['rgba(54, 88, 177, .9)', 'rgba(193, 89, 236, 1.9)']}>
      <BackButton
        backOption="menuIndex"
        hideMenu={true}
        navigate={navigation}
      />
      <View style={styles.container}>
        <Text style={styles.header}>About WeatherApp</Text>
        <Text style={styles.article}>
          This is Developed By <Text>Jailan Mirkhel </Text>
          and Available for Free and open source.
        </Text>
        <Text style={styles.article}>
          copyright &copy; 2024-{new Date().getFullYear()}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: screenWidth * 0.02,
    paddingHorizontal: screenWidth * 0.04,
  },
  header: {
    color: 'white',
    fontSize: screenWidth * 0.06,
    textAlign: 'center',
    fontWeight: '500',
  },
  article: {
    color: 'white',
    textAlign: 'center',
  },
});
