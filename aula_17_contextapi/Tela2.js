import { Text, StyleSheet, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import {useContext} from "react";
import UsuarioContext from "./Contexts";

const Tela2 = () => {
  const ctx = useContext(UsuarioContext);
  const {contexto, nome, idade, curso, disciplina, ano} = ctx;
  const navigation = useNavigation();

  return (
      <View style={styles.container}>
        <View>
          <Text style={styles.paragraph}>Contexto: {contexto}</Text>
          <Text style={styles.paragraph}>Nome: {nome}</Text>
          <Text style={styles.paragraph}>Idade: {idade}</Text>
          <Text style={styles.paragraph}>Curso: {curso}</Text>
          <Text style={styles.paragraph}>Disciplina: {disciplina}</Text>
          <Text style={styles.paragraph}>Ano: {ano}</Text>
          <Text style={styles.paragraph}>Tela 2 da Navegação</Text>
        </View>
        <View>
          <Button onPress={() => navigation.navigate("Tela3")} title="Ir para a Tela 3" />
        </View>
      </View>
  );
}

export default Tela2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
