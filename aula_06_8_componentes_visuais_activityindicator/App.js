import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
  };

  return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} value={password} onChangeText={setPassword} />
        <Button title="Login" onPress={handleLogin} />
        <ActivityIndicator
            size="large"
            color="#0000ff"
            animating={isLoading}
            style={styles.activityIndicator}
        />
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
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  activityIndicator: {
    marginTop: 20,
  },
});

export default App;
