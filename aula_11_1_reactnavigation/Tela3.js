import { Text, StyleSheet, Button, View } from 'react-native';

const Tela3 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.paragraph}>Tela 3 da Navegação</Text>
      </View>
      <View>
        <Button onPress={() => alert("Chegou no fim da navegação")} title="Fim" />
      </View>
    </View>
  );
}

export default Tela3;

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
