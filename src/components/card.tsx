import {StyleSheet, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors, screenWidth} from '../helper/helper';

interface Props {
  title: string;
  text: string | number;
  article: string;
  isTrue?: boolean;
}

const DetailsCard: React.FC<Props> = Props => {
  const {article, text, title, isTrue} = Props;
  return (
    <LinearGradient colors={['#2E335A', '#1C1B33']} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>
        {text} {typeof text === 'number' ? <Text>&#x2022;</Text> : null}
      </Text>
      <Text style={styles.article}>{article}</Text>
      {isTrue && (
        <LinearGradient
          style={styles.isTrue}
          colors={['blue', 'white', 'red']}
        />
      )}
    </LinearGradient>
  );
};

export default DetailsCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#49319D',
    padding: screenWidth * 0.03,
    borderRadius: screenWidth * 0.03,
    width: '48%',
    borderWidth: screenWidth * 0.003,
    borderColor: colors.border,
  },
  title: {
    color: colors.blackSecondary,
  },
  text: {
    fontSize: screenWidth * 0.06,
    paddingVertical: screenWidth * 0.03,
    color: 'white',
    fontWeight: '500',
  },
  border: {
    height: screenWidth * 0.015,
    borderRadius: screenWidth * 0.1,
  },
  article: {
    color: 'white',
  },
  isTrue: {
    height: screenWidth * 0.015,
    borderRadius: screenWidth * 0.1,
  },
});
