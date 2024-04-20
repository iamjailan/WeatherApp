import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native';
import React from 'react';
import WeatherInfo from '../components/weatherInfo';
import {screenWidth} from '../helper/helper';
import LinearGradient from 'react-native-linear-gradient';
import WeatherCard from '../components/weatherCard';

const Home = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../assets/bg.png')}>
        <WeatherInfo />
        <Image style={styles.image} source={require('../assets/House.png')} />
        <LinearGradient
          colors={['rgba(54, 88, 177, .9)', 'rgba(193, 89, 236, 1.9)']}
          style={styles.forcast}>
          <View style={styles.forcastBtn}>
            <TouchableNativeFeedback>
              <Text>Hourly Forcast</Text>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <Text>Weekly Forcast</Text>
            </TouchableNativeFeedback>
          </View>
          <ScrollView contentContainerStyle={styles.main} horizontal={true}>
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
          </ScrollView>
          <ImageBackground
            style={styles.bottom}
            source={require('../assets/bottom.png')}>
            <View style={styles.btns}>
              <Image
                style={styles.location}
                source={require('../assets/location.png')}
              />
              <Image style={styles.add} source={require('../assets/add.png')} />
              <Image
                style={styles.location}
                source={require('../assets/menu.png')}
              />
            </View>
          </ImageBackground>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  imageBackground: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    height: screenWidth * 1,
    width: screenWidth * 1,
    zIndex: 1,
  },
  forcast: {
    height: screenWidth * 1,
    width: screenWidth * 1,
    zIndex: 1,
    marginTop: screenWidth * -0.5,
    borderRadius: screenWidth * 0.1,
  },
  bottom: {
    position: 'absolute',
    width: screenWidth * 1,
    height: screenWidth * 0.3,
    bottom: screenWidth * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth * 1,
    padding: screenWidth * 0.015,
    marginTop: screenWidth * 0.01,
  },
  location: {
    height: screenWidth * 0.11,
    width: screenWidth * 0.11,
  },
  add: {
    height: screenWidth * 0.25,
    width: screenWidth * 0.25,
    marginTop: screenWidth * -0.1,
  },
  forcastBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: screenWidth * 0.025,
    borderColor: 'black',
    borderBottomWidth: screenWidth * 0.0022,
    borderStyle: 'solid',
  },
  main: {
    gap: screenWidth * 0.02,
    paddingHorizontal: screenWidth * 0.02,
    paddingVertical: screenWidth * 0.01,
  },
});
