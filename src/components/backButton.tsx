import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {screenWidth} from '../helper/helper';

interface Props {
  navigate: any;
  hideMenu?: boolean;
  backOption?: string;
}

const BackButton: React.FC<Props> = Props => {
  const {navigate, hideMenu, backOption} = Props;
  const handleNavigate = () => {
    navigate.navigate(backOption ? backOption : 'home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <View style={styles.weatherText}>
          <TouchableOpacity onPress={handleNavigate}>
            <Image
              style={styles.icon}
              source={require('../assets/arrow.png')}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Back</Text>
        </View>

        {!hideMenu && (
          <TouchableOpacity onPress={() => navigate.navigate('menu')}>
            <Image
              style={styles.imageWeather}
              source={require('../assets/rightMenu.png')}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    padding: screenWidth * 0.05,
  },
  parent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weatherText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: screenWidth * 0.03,
  },
  imageWeather: {
    height: screenWidth * 0.08,
    width: screenWidth * 0.08,
  },
  icon: {
    height: screenWidth * 0.065,
    width: screenWidth * 0.035,
  },
  text: {
    fontSize: screenWidth * 0.07,
    color: 'white',
  },
});
