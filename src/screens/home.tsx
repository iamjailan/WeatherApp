import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import WeatherInfo from '../components/weatherInfo';
import {screenWidth} from '../helper/helper';
import LinearGradient from 'react-native-linear-gradient';
import WeatherCard from '../components/weatherCard';
import {data, dataDay} from '../helper/dummyData';
import {useDispatch, useSelector} from 'react-redux';
import {handleEmpty, mainSelector} from '../store/reducer/main';

const Home = ({navigation}: any) => {
  const [isWeekly, setIsWeekly] = useState(false);
  const [isHours, setIsHourly] = useState(true);
  const {isLoading} = useSelector(mainSelector);
  const dispatch = useDispatch();
  console.log(isLoading);
  const handleWeeklyForecastTime = () => {
    setIsHourly(false);
    setIsWeekly(true);
  };
  const handleHoursForecastTime = () => {
    setIsHourly(true);
    setIsWeekly(false);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../assets/bg.png')}>
        <TouchableOpacity onPress={() => navigation.navigate('details')}>
          <WeatherInfo
            city="Wardak"
            degree={12}
            heights={20}
            lowest={10}
            status="clear"
          />
        </TouchableOpacity>
        <Image style={styles.image} source={require('../assets/House.png')} />
        <LinearGradient
          colors={['rgba(54, 88, 177, .9)', 'rgba(193, 89, 236, 1.9)']}
          style={styles.forecast}>
          <View style={styles.forecastBtn}>
            <TouchableNativeFeedback onPress={() => handleHoursForecastTime()}>
              <Text style={[isHours && {color: 'white'}]}>Hourly Forecast</Text>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => handleWeeklyForecastTime()}>
              <Text style={[isWeekly && {color: 'white'}]}>
                Weekly Forecast
              </Text>
            </TouchableNativeFeedback>
          </View>
          {isHours ? (
            <ScrollView
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.main}
              horizontal={true}>
              {data.map(item => {
                const {id, degree, hours, status, time} = item;
                return (
                  <WeatherCard
                    key={id}
                    degree={degree}
                    hours={hours}
                    status={status}
                    time={time}
                  />
                );
              })}
            </ScrollView>
          ) : (
            <ScrollView
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.main}
              horizontal={true}>
              {dataDay.map(item => {
                const {id, degree, day, status} = item;
                return (
                  <WeatherCard
                    key={id}
                    degree={degree}
                    hours={day}
                    status={status}
                  />
                );
              })}
            </ScrollView>
          )}
          <ImageBackground
            style={styles.bottom}
            source={require('../assets/bottom.png')}>
            <View style={styles.btn}>
              <Image
                style={styles.location}
                source={require('../assets/location.png')}
              />
              <TouchableOpacity onPress={() => navigation.navigate('addCity')}>
                <Image
                  style={styles.add}
                  source={require('../assets/add.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('menu')}>
                <Image
                  style={styles.location}
                  source={require('../assets/menu.png')}
                />
              </TouchableOpacity>
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
  forecast: {
    height: screenWidth * 0.8,
    width: screenWidth * 1,
    zIndex: 1,
    borderRadius: screenWidth * 0.1,
    position: 'absolute',
    bottom: 0,
  },
  bottom: {
    width: screenWidth * 1,
    height: screenWidth * 0.27,
    marginBottom: screenWidth * -0.05,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth * 1,
    padding: screenWidth * 0.015,
    marginTop: screenWidth * 0.01,
  },
  location: {
    height: screenWidth * 0.11,
    width: screenWidth * 0.11,
    marginTop: screenWidth * 0.04,
  },
  add: {
    height: screenWidth * 0.25,
    width: screenWidth * 0.25,
    marginTop: screenWidth * -0.05,
    borderRadius: screenWidth * 1,
  },
  forecastBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: screenWidth * 0.025,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderBottomWidth: screenWidth * 0.0022,
    borderStyle: 'solid',
  },
  main: {
    gap: screenWidth * 0.02,
    paddingHorizontal: screenWidth * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
