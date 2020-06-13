import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello, world!</Text>
    </SafeAreaView>
  );
};

WelcomeScreen.options = {
  topBar: {
    title: {
      text: 'Welcome'
    }
  }
};

export default WelcomeScreen;

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  text: {
    color: '#61dafb',
    fontSize: 32
  }
};
