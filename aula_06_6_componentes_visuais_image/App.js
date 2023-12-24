import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
      <View style={styles.container}>
        <Image source={require('./marvelLogo.png')} style={styles.image} resizeMode="contain" />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default App;
