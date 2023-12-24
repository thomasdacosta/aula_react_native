import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const App = () => {
  return (
      <View style={styles.container}>
        <Button title="Clique-me" onPress={() => alert('Clicou no Botão')} />
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
});

export default App;
