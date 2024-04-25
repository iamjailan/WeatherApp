import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AirQuality from '../components/airQuality';
import {screenWidth} from '../helper/helper';
import DetailsCard from '../components/card';
import BackButton from '../components/backButton';
import DetailsWeatherCard from '../components/detailsWeatherCard';

const Details = ({navigation}: any) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <LinearGradient colors={['#45278B', '#2E335A']} style={styles.container}>
        <BackButton navigate={navigation} />
        <DetailsWeatherCard />
        <AirQuality />
        <View style={styles.cards}>
          <DetailsCard
            title="Visibility"
            text={'8 km'}
            article="Similar to what you feeling during Winter."
          />
          <DetailsCard
            title="UV INDEX"
            text={'4          Moderate'}
            isTrue={true}
            article=""
          />
          <DetailsCard
            title="Feel Like"
            text={19}
            article="Similar to what you feeling during Winter."
          />
          <DetailsCard
            title="Humanity"
            text={`90%`}
            article="The dew point is 17 right now."
          />
          <DetailsCard
            title="Rainfall"
            text={'1.8 mm in the last hours'}
            article="1.22 mm expected in next 24 hours."
          />
          <DetailsCard
            title="Sunrise"
            text={'5:20 AM'}
            article="Sunset: 7:58 PM"
          />
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    color: 'black',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    padding: screenWidth * 0.04,
    gap: screenWidth * 0.03,
  },
  cards: {
    gap: screenWidth * 0.03,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
