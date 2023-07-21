import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

const Saudacoes = (props) => {
  return (
      <View style={styles.center}>
        <Text>Olá tudo bem {props.name}!</Text>
      </View>
  );
}

const App = () => {
  return (
      <View style={[styles.center, {top: 50}]}>
        <Saudacoes name='José' />
        <Saudacoes name='João' />
        <Saudacoes name='Maria' />
      </View>
  );
}

export default App
