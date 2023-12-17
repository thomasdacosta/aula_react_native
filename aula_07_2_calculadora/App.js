import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

const App = () => {
  const [resultado, setResultado] = useState(null);
  const [operador1, setOperador1] = useState(null);
  const [operador2, setOperador2] = useState(null);

  const somar = () => {
    setResultado( parseInt(operador1) + parseInt(operador2));
  }

  return (
    <View style={Estilos.container}>
      <Text>Digite o operador 1:</Text>
      <TextInput style={Estilos.textInput}
                 keyboardType = 'numeric'
                 onChangeText={(value) => setOperador1(value)} />
      <Text>Digite o operador 2:</Text>
      <TextInput style={Estilos.textInput}
                 keyboardType = 'numeric'
                 onChangeText={(value) => setOperador2(value)} />
      <Button title="Somar valores" onPress={()=>somar()} />
      <Text style={Estilos.textResultado}>Resultado da soma: {resultado}</Text>
    </View>
  );
}

const Estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    margin: 5,
    borderWidth: 1,
    borderColor: '#000',
    width: 200
  },
  textResultado: {
    fontSize: 20,
    margin: 5,
    color: "blue"
  }
});

export default App;
