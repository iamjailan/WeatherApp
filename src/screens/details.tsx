import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Details = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <Pressable onPress={() => navigation.navigate('home')}>
        <Text style={styles.button}>Home page</Text>
      </Pressable>
    </View>
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'blue',
    flex: 1,
    padding: 10,
  },
});
