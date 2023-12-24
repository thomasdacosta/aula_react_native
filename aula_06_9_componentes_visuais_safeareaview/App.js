import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {
  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Olá Mundo</Text>
      </SafeAreaView>
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
