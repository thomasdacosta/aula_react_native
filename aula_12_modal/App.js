import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, ActivityIndicator, Modal, Button, Image} from 'react-native';

const MENSAGEM_EMAIL = "Digite o seu e-mail.";
const MENSAGEM_SENHA = "Digite a sua senha.";
const EMAIL = "eve1.holt@reqres.in";
const SENHA = "cityslicka";

const ValidateLogin = async (email, senha, status, activity, setModalVisible) => {
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
      setModalVisible(true);
    }
    activity(false)
  }).catch(() => status("Não foi possivel executar o login."));
}

export default () => {
  const [user, setUser] = useState(EMAIL);
  const [password, setPassword] = useState(SENHA);
  const [status, setStatus] = useState("");
  const [activity, setActivity] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
      <View style={Estilos.container}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
          <View style={Estilos.centeredView}>
            <View style={Estilos.modalView}>
              <Text style={Estilos.modalText}>Usuários ou senha inválidos!!!</Text>
              <View style={Estilos.button}>
                <Button onPress={() => setModalVisible(!modalVisible)} title="Fechar"/>
              </View>
            </View>
          </View>
        </Modal>
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
          <Button onPress={() => ValidateLogin(user, password, setStatus, setActivity, setModalVisible)} title="Login"/>
        </View>
        <View style={{marginTop: 10}}>
          <ActivityIndicator size="large" animating={activity}/>
        </View>
        <Text style={Estilos.personagem}>{status}</Text>
      </View>
  )
};

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
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
