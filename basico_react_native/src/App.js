import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Ex01_OlaMundo1 from './Ex01_OlaMundo1'
import Ex02_OlaMundo2 from './Ex02_OlaMundo2'
import Ex03_Comentarios from './Ex03_Comentarios'
import Ex04_JSX_Javascript from './Ex04_JSX_Javascript'
import Ex05_Estilos from './Ex05_Estilos'
import Ex06_Componente_Parametro from './Ex06_Componente_Parametro'
import Ex07_Componente_Parametro from './Ex07_Componente_Parametro'
import Ex08_React_Fragment from './Ex08_React_Fragment'
import Ex09_React_Fragment from './Ex09_React_Fragment'
import Ex10_Botao from './Ex10_Botao'
import Pai from './indireta/Pai';
import Ex11_Diferenca_iOS_Android from './Ex11_Diferenca_iOS_Android'
import Ex12_Renderizacao_Condicional from './Ex12_Renderizacao_Condicional';
import Familia from './relacao/Familia';
import Membro from './relacao/Membro';
import UsuarioLogado from './condicional/UsuarioLogado';
import ListaProdutos from './listas/ListaProdutos';

const App = () => {
  return (
    <ScrollView>
      <SafeAreaView style={Estilos.texto}>
        <View style={Estilos.container}>
          <Ex01_OlaMundo1 />
        </View>

        <View style={Estilos.container}>
          <Ex02_OlaMundo2 />
        </View>

        <View style={Estilos.container}>
          <Ex03_Comentarios />
        </View>

        <View style={Estilos.container}>
          <Ex04_JSX_Javascript />
        </View>

        <View style={Estilos.container}>
          <Ex05_Estilos />
        </View>

        <View style={Estilos.container}>
          <Ex06_Componente_Parametro param1="Parametro 1" param2="Parametro 2" param3="Parametro 3" param4={10} />
        </View>

        <View style={Estilos.container}>
          <Ex07_Componente_Parametro param1="Parametro 1" param2="Parametro 2" />
        </View>

        <View style={Estilos.container}>
          <Ex08_React_Fragment />
        </View>

        <View style={Estilos.container}>
          <Ex09_React_Fragment />
        </View>

        <View style={Estilos.container}>
          <Ex10_Botao />
        </View>

        <View style={Estilos.container}>
          <Pai />
        </View>

        <View style={Estilos.container}>
          <Ex11_Diferenca_iOS_Android />
        </View>

        <View style={Estilos.container}>
          <Ex12_Renderizacao_Condicional />
        </View>

        <View style={Estilos.container}>
          <Familia>
            <Membro nome="Bia" sobrenome="Arruda" />
            <Membro nome="Carlos" sobrenome="Arruda" />
          </Familia>
          <Familia>
            <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Julia" sobrenome="Silva" />
            <Membro nome="Gui" sobrenome="Silva" />
            <Membro nome="Rebeca" sobrenome="Silva" />
          </Familia>
        </View>

        <View style={Estilos.container}>
          <UsuarioLogado usuario={{ nome: "Gui", email: "gui@gui.com" }} />
          <UsuarioLogado usuario={{ nome: "Ana" }} />
          <UsuarioLogado usuario={{ email: "carlos@empresa.com" }} />
          <UsuarioLogado usuario={null} />
          <UsuarioLogado usuario={{}} />
        </View>

        <View style={Estilos.container}>
            <ListaProdutos />
          </View>

      </SafeAreaView>
    </ScrollView>
  );
}

const Estilos = StyleSheet.create({
  texto: {
    alignItems: 'center',
    padding: 30
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default App;
