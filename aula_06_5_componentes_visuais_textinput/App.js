import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet} from 'react-native';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleShowTextPress = () => {
    if (inputValue.trim() === '') {
      alert('Por favor, digite algo no campo.');
    } else {
      alert(inputValue);
    }
  };

  const handleClearTextPress = () => {
    setInputValue('');
  };

  return (
      <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Digite algo aqui..."
            value={inputValue}
            onChangeText={setInputValue}
        />
        <View style={styles.buttonContainer}>
          <Button title="Mostrar Texto" onPress={handleShowTextPress} />
          <Button title="Limpar" onPress={handleClearTextPress} color="red" />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default App;
