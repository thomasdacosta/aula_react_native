import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, ActivityIndicator, Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BuscarPersonagens from './BuscarPersonagens';

const MENSAGEM_EMAIL = "Digite o seu e-mail.";
const MENSAGEM_SENHA = "Digite a sua senha.";
const EMAIL = "eve.holt@reqres.in";
const SENHA = "cityslicka";

const ValidateLogin = async (email, senha, status, activity, navigation) => {
  if (email.trim().length === 0) {
    alert(MENSAGEM_EMAIL);
    return
  }

  if (senha.trim().length === 0) {
    alert(MENSAGEM_SENHA);
    return;
  }

  activity(true);

  let usuario = {
    "email": email,
    "password": senha
  };

  await fetch('https://reqres.in/api/login', {
    method: "POST",
    headers: {
      Accept: "application/json",
      'Content-Type': "application/json"
    },
    body: JSON.stringify(usuario)
  }).then(response => {
    if (response.status === 200) {
      response.text().then(function (result) {
        status("Usuário autenticado com sucesso.");
        navigation.navigate('Personagem')
      });
    } else {
      alert(`Usuário ou senha inválidos => código: ${response.status}`);
    }
    activity(false);
  }).catch((e) => {
    alert("Não foi possivel executar o login =>" + e);
    activity(false);
  });
}

const Stack = createNativeStackNavigator();

function TelaLogin({ navigation }) {
  const [user, setUser] = useState('eve.holt@reqres.in')
  const [password, setPassword] = useState('cityslicka')
  const [status, setStatus] = useState('')
  const [activity, setActivity] = useState(false)

  return (
      <View style={Estilos.container}>
        <Image style={Estilos.logo} source={require('./marvelLogo.png')} />
        <Text style={Estilos.personagem}>E-mail:</Text>
        <TextInput
            autoCorrect={false}
            placeholder={MENSAGEM_EMAIL}
            placeholderTextColor="grey"
            style={Estilos.textInput}
            clearButtonMode="always"
            defaultValue={EMAIL}
            onChangeText={(value) => setUser(value)}
        />
        <Text style={Estilos.personagem}>Senha:</Text>
        <TextInput
            autoCorrect={false}
            placeholder={MENSAGEM_SENHA}
            placeholderTextColor="grey"
            secureTextEntry={true}
            style={Estilos.textInput}
            clearButtonMode="always"
            defaultValue={SENHA}
            onChangeText={(value) => setPassword(value)}
        />
        <View style={Estilos.button}>
          <Button title="Login" onPress={() => ValidateLogin(user, password, setStatus, setActivity, navigation)}/>
        </View>
        <View style={{marginTop: 10}}>
          <ActivityIndicator size="large" animating={activity}/>
        </View>
        <Text style={Estilos.personagem}>{status}</Text>
      </View>
  )
}

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{
          headerStyle: {
            backgroundColor: '#FF0000',
          },
          headerTintColor: '#fff',
        }}>
          <Stack.Screen name="Login" component={TelaLogin} options={{ title: 'Marvel App - Login' }} />
          <Stack.Screen name="Personagem" component={BuscarPersonagens} options={
            {
              title: 'Marvel App - Personagens',
              headerBackVisible: false }
          }
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;

const Estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#191970',
    padding: 20,
  },
  logo: {
    width: 250,
    height: 100,
    alignSelf: 'center'
  },
  personagem: {
    color: 'white',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  textInput: {
    backgroundColor: 'white',
    color: 'black',
    marginTop: 20,
    fontSize: 15,
    height: 40,
    width: 350,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10
  },
  button: {
    backgroundColor: 'grey',
    color: 'white',
    fontSize: 15,
    width: 120,
    height: 35,
    marginTop: 20,
    marginHorizontal: 20,
    textAlign: 'center',
    alignSelf: 'center'
  }
});
