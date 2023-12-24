import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>Olá Mundo</Text>
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
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;
