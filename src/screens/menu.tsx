import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import MenuCard from '../components/menuCard';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../components/backButton';
import {screenWidth} from '../helper/helper';

const Menu = ({navigation}: any) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={['rgba(54, 88, 177, .9)', 'rgba(193, 89, 236, 1.9)']}>
      <BackButton hideMenu={true} navigate={navigation} />
      <ScrollView contentContainerStyle={styles.btn}>
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </ScrollView>
    </LinearGradient>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    padding: screenWidth * 0.03,
    gap: screenWidth * 0.03,
  },
});
