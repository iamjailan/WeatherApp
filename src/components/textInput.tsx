import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {screenWidth} from '../helper/helper';

interface Props {
  text: string;
  setText: (text: string) => void;
  onClick: (event: GestureResponderEvent) => void;
}

const TextInputField: React.FC<Props> = Props => {
  const {text, setText, onClick} = Props;
  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onClick}>
          <Image
            style={styles.image}
            source={require('../assets/search.png')}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Search for a city or airports"
          value={text}
          onChangeText={setText}
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={onClick}>
        <Text style={styles.btn}>Add City</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TextInputField;

const styles = StyleSheet.create({
  parent: {
    paddingVertical: screenWidth * 0.02,
    gap: screenWidth * 0.04,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#1F1D47',
    alignItems: 'center',
    paddingHorizontal: screenWidth * 0.01,
    borderRadius: screenWidth * 0.02,
    marginVertical: screenWidth * 0.02,
    gap: screenWidth * 0.01,
  },
  input: {
    width: screenWidth * 0.76,
  },
  image: {
    height: screenWidth * 0.07,
    width: screenWidth * 0.07,
  },
  btn: {
    width: '100%',
    borderWidth: screenWidth * 0.002,
    alignSelf: 'center',
    padding: screenWidth * 0.03,
    borderRadius: screenWidth * 0.04,
    borderColor: 'white',
    textAlign: 'center',
    fontWeight: '500',
  },
});
