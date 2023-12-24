import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, ActivityIndicator, Button, Image, ImageBackground} from 'react-native';

const MENSAGEM_EMAIL = "Digite o seu e-mail.";
const MENSAGEM_SENHA = "Digite a sua senha.";
const EMAIL = "eve.holt@reqres.in";
const SENHA = "cityslicka";

export default () => {
  const validarLogin = () => {
    setActivity(true)
    if (user === EMAIL && password === SENHA) {
      setStatus('Login efetuado com sucesso!')
    } else {
      setStatus('Usuário ou senha inválidos!')
    }
    setActivity(false)
  }

  const [user, setUser] = useState(EMAIL)
  const [password, setPassword] = useState(SENHA)
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
            <Button onPress={() => validarLogin()} title="OK" />
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
