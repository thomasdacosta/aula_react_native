import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const App = () => {
  return (
      <View style={styles.container}>
        <ImageBackground source={require('./background.jpg')} style={styles.backgroundImage}>
          {/* Conteúdo da sua aplicação pode ser adicionado aqui */}
        </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default App;
