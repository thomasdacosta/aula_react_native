import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';

const App = () => {
  const handlePress = () => {
    alert('Você pressionou o botão!');
  };

  return (
      <View style={styles.container}>
        <Pressable style={styles.button} onPress={handlePress}>
          <Text style={styles.text}>Clique-me</Text>
        </Pressable>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: '#ffffff',
  },
});

export default App;
