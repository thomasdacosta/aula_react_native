import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
    return (
        <SafeAreaView>
            <Text style={Estilos.texto}>Ex05: Primeiro exemplo básico de React Native com Estilos</Text>
        </SafeAreaView>
    );
}

const Estilos = StyleSheet.create({
    texto: {
        color: 'red',
        fontSize: 20
    }
});

export default App;
