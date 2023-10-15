import React from 'react';
import Ex01_OlaMundo1 from './Ex01_OlaMundo1'
import Ex02_OlaMundo2 from './Ex02_OlaMundo2'
import Ex03_Comentarios from './Ex03_Comentarios'
import Ex04_JSX_Javascript from './Ex04_JSX_Javascript'
import Ex05_Estilos from './Ex05_Estilos'
import Ex06_Componente_Parametro from './Ex06_Componente_Parametro'
import Ex07_Componente_Parametro from './Ex07_Componente_Parametro'
import { StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <View style={Estilos.texto}>
      <Ex01_OlaMundo1/>
      <Ex02_OlaMundo2/>
      <Ex03_Comentarios/>
      <Ex04_JSX_Javascript/>
      <Ex05_Estilos/>
      <Ex06_Componente_Parametro param1="Parametro 1" param2="Parametro 2" param3="Parametro 3" param4={10}/>
      <Ex07_Componente_Parametro param1="Parametro 1" param2="Parametro 2" />
    </View>
  );
}

const Estilos = StyleSheet.create({
  texto: {
      alignItems: 'center',
      padding: 30
  }
});

export default App;
