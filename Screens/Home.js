import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Home({Navigation}) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button onPress={() => Navigation.push('About')} title='About'></Button>
    </View>
  );
};

export default Home;