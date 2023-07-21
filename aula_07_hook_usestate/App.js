import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

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
