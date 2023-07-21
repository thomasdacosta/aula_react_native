import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, ActivityIndicator, Button, Image, ImageBackground} from 'react-native';

const MENSAGEM_EMAIL = "Digite o seu e-mail.";
const MENSAGEM_SENHA = "Digite a sua senha.";
const EMAIL = "eve.holt@reqres.in";
const SENHA = "cityslicka";

const ValidateLogin = async (email, senha, status, activity) => {
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
        console.log(result);
      });
    } else {
      status(`Usuário ou senha inválidos => código: ${response.status}`);
    }
    activity(false)
  }).catch(() => status("Não foi possivel executar o login."));
}

export default () => {
  const [user, setUser] = useState('eve.holt@reqres.in')
  const [password, setPassword] = useState('cityslicka')
  const [status, setStatus] = useState('')
  const [activity, setActivity] = useState(false)

  return (
      <View style={Estilos.container}>
        <ImageBackground source={require("./background.jpg")}
                         resizeMode="cover" style={Estilos.appImage} imageStyle={{opacity: 0.3}}>
          <Text style={Estilos.paragraph}>Minha tela de Login</Text>
          <Image style={Estilos.logo} source={require('./marvelLogo.png')} />
          <Text style={Estilos.loginLabel}>E-mail:</Text>
          <TextInput
              autoCorrect={false}
              placeholder={MENSAGEM_EMAIL}
              placeholderTextColor="grey"
              style={Estilos.textInput}
              clearButtonMode="always"
              defaultValue={EMAIL}
              onChangeText={(value) => setUser(value)}
          />
          <Text style={Estilos.loginLabel}>Senha:</Text>
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
            <Button onPress={() => ValidateLogin(user, password, setStatus, setActivity)} title="OK" />
          </View>
          <View style={{marginTop: 10}}>
            <ActivityIndicator size="large" animating={activity}/>
          </View>
          <Text style={Estilos.loginLabel}>{status}</Text>
        </ImageBackground>
      </View>
  )
};

const Estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#202020'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginLabel: {
    color: 'white',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    fontSize: 15,
    width: 120,
    height: 40,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    textAlign: 'center',
    alignSelf: 'center'
  },
  textInput: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 15,
    height: 40,
    width: 250,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center'
  },
  logo: {
    width: 250,
    height: 100,
    alignSelf: 'center'
  },
  appImage: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: 'black'
  }
});
