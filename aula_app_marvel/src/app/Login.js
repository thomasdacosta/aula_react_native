import React, { useEffect, useState } from "react";
import { Text, View, TextInput, ActivityIndicator, Button, Image, SafeAreaView, Modal } from "react-native";
import ValidarLogin, { EMAIL, MENSAGEM_EMAIL, MENSAGEM_SENHA, SENHA } from "../js/LoginService";
import Estilos from "../estilos/Estilos";
import { desabilitarBotaoBackAndroid } from "../js/Common";

const Login = ({ navigation }) => {
  const [user, setUser] = useState(EMAIL);
  const [password, setPassword] = useState(SENHA);
  const [activity, setActivity] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState("");

  let parametros = {
    user: user,
    password: password,
    navigation: navigation,
    activity: setActivity,
    modalVisible: setModalVisible,
    description: setDescription
  };

  useEffect(() => {
    return desabilitarBotaoBackAndroid();
  }, []);

  return (
    <SafeAreaView style={Estilos.safeAreaView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <View style={Estilos.centeredView}>
          <View style={Estilos.modalView}>
            <Text style={Estilos.modalText}>{description}</Text>
            <View style={Estilos.button}>
              <Button onPress={() => setModalVisible(!modalVisible)} title="Fechar" color="red" />
            </View>
          </View>
        </View>
      </Modal>
      <Image style={Estilos.logo} source={require("../imagens/marvelLogo.png")} />
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
        <Button title="Login"
                onPress={() => {
                  ValidarLogin(parametros);
                }} color="red" />
      </View>
      <View style={{ marginTop: 10 }}>
        <ActivityIndicator size="large" color="#00ff00" animating={activity} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
