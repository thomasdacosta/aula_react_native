import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
    return (
        <SafeAreaView>
            <Text style={Estilos.texto}>Primeiro exemplo básico de React Native</Text>
        </SafeAreaView>
    );
}

const Estilos = StyleSheet.create({
    texto: {
        color: 'red',
        fontSize: 30
    }
});

export default App;
