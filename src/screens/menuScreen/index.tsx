import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MenuCard from '../../components/menuCard';
import BackButton from '../../components/backButton';
import {screenWidth} from '../../helper/helper';

const navigateData = [
  {
    id: 1,
    navigateTo: 'about',
    text: 'About',
  },
];

const Menu = ({navigation}: any) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={['rgba(54, 88, 177, .9)', 'rgba(193, 89, 236, 1.9)']}>
      <BackButton hideMenu={true} navigate={navigation} />
      <ScrollView contentContainerStyle={styles.btn}>
        {navigateData.map(btn => {
          const {id, navigateTo, text} = btn;
          return (
            <MenuCard
              key={id}
              navigate={navigateTo}
              navigation={navigation}
              text={text}
            />
          );
        })}
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
