import { Text, StyleSheet, Button, View } from 'react-native';

const Tela2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
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
