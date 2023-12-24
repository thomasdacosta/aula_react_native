import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Morbi congue id justo vel tristique. Phasellus eget mauris
          eu dui volutpat elementum. Donec quis ultricies nulla.
          Nulla facilisi. Curabitur auctor sit amet lectus ac finibus.
          {/* ... adicione mais texto se necessário ... */}
        </Text>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
  },
});

export default App;
