import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Cadastro from './src/screens/Cadastro';

const App = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="dark-content" backgroundColor="#F5F6F8" />
    <Cadastro />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F6F8' },
});

export default App;
