import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect (() => {
    console.warn("Será acionado somente uma única vez");
  }, []);

  useEffect (() => {
    console.warn("Será acionado somente quando a variável for alterada");
  }, [count]);

  useEffect (() => {
    console.warn("Sempre será acionado");
  });

  return (
      <View style={styles.container}>
        <Text>Você clicou {count} vezes</Text>
        <Button onPress={() => setCount(count + 1)} title="Clique aqui!!!" />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
