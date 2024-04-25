import {StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../components/backButton';
import {screenWidth} from '../helper/helper';
import TextInputField from '../components/textInput';

const AddCity = ({navigation}: any) => {
  const [cityText, setCity] = useState('');
  const [error, setError] = useState(false);
  const handleInput = () => {
    if (!cityText) {
      setError(true);
    } else {
      setCity('');
      setError(false);
    }
  };
  if (error) {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }
  return (
    <LinearGradient colors={['#3658B1', '#C159EC']} style={styles.container}>
      <BackButton navigate={navigation} />
      <TextInputField text={cityText} setText={setCity} onClick={handleInput} />
      {error && <Text style={styles.error}>Pleas Enter City Name</Text>}
    </LinearGradient>
  );
};

export default AddCity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: screenWidth * 0.04,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    fontSize: screenWidth * 0.04,
  },
});
