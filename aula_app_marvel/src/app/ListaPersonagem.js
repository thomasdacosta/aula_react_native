import React, { useEffect, useState } from "react";
import {
  SafeAreaView, Text, TextInput, View, FlatList, Button, ActivityIndicator, Pressable, Image, Modal
} from "react-native";
import Estilos from "../estilos/Estilos";
import DetalhesPersonagem from "./DetalhesPersonagem";
import BuscarPersonagem, { PERSONAGEM_DEFAULT } from "../js/ListaPersonagemService";
import { desabilitarBotaoBackAndroid } from "../js/Common";

const App = ({ navigation }) => {
  const [jsonData, setJsonData] = useState("");
  const [personagem, setPersonagem] = useState(PERSONAGEM_DEFAULT);
  const [activity, setActivity] = useState(false);
  const [totalPersonagens, setTotalPersonagens] = useState(0);
  const [totalGeralPersonagens, setTotalGeralPersonagens] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [item, setItem] = useState(null);

  let parametros = {
    personagem: personagem,
    totalPersonagens: setTotalPersonagens,
    totalGeralPersonagens: setTotalGeralPersonagens,
    jsonData: setJsonData,
    activity: setActivity
  }

  // Evento é executado somente quando a tela é carregada
  useEffect(() => {
    //console.warn("Evento é executado somente quando a tela é carregada");
    setPersonagem(PERSONAGEM_DEFAULT);

    BuscarPersonagem(parametros);
    // BuscarPersonagem(personagem, setTotalPersonagens, setJsonData, setActivity);
  }, []);

  // Evento é executado somente quando a tela é carregada
  useEffect(() => {
    return desabilitarBotaoBackAndroid();
  }, []);

  // Sempre acionado quando a tela é renderizada
  useEffect(() => {
    //console.warn("Sempre acionado quando a tela é renderizada");
  });

  // Acionado somente quando o total de personagens é atualizado
  useEffect(() => {
    //console.warn("Acionado somente quando o total de personagens é atualizado");
  }, [totalPersonagens]);

  const Personagem = ({ item, evento, link }) => (
    <View>
      <Pressable onPress={evento}>
        <View style={Estilos.linha} />
        <Text style={Estilos.personagemParagraph}>{item.name}</Text>
        <Image
          style={Estilos.imagemPersonagem}
          source={{
            uri: link,
          }}
        />
        <View><Text></Text></View>
      </Pressable>
  </View>);

  const PersonagemItem = ({ item }) => (<Personagem
    item={item}
    evento={() => {
      if (totalGeralPersonagens !== 0) {
        setItem(item);
        setModalVisible(true);
      }
    }}
    link={item.thumbnail.path + "/portrait_uncanny.jpg"} />);

  return (<SafeAreaView style={Estilos.safeAreaView}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}>
      <View style={Estilos.centeredView}>
        <View style={Estilos.modalView}>
          <Text style={Estilos.modalTextTitle}>{item?.name}</Text>
          <Text
            style={Estilos.modalText}>{item?.description === "" ? item?.name : item?.description}</Text>
          <View style={Estilos.alignVertical}>
            <Button style={Estilos.button} onPress={() => {
              setModalVisible(!modalVisible);
              navigation.navigate("DetalhesPersonagem", {
                item: item,
              });
            }} title="Detalhes" color="red" disabled={totalGeralPersonagens === 0} />
            <View style={{ flex: 0.1 }} />
            <Button onPress={() => setModalVisible(!modalVisible)} title="Fechar" color="red" />
          </View>
        </View>
      </View>
    </Modal>
    <View style={Estilos.alignVertical}>
      <View style={{ flex: 0.1 }} />
      <Text style={Estilos.detalhePersonagem}>Buscar Personagem</Text>
    </View>
    <TextInput
      autoCorrect={false}
      style={Estilos.textInput}
      clearButtonMode="always"
      placeholder={"Ex: " + PERSONAGEM_DEFAULT}
      onChangeText={(value) => setPersonagem(value)}
      onEndEditing={() => {
        BuscarPersonagem(parametros);
      }}
    />
    <View style={{ marginTop: 10 }}>
      <ActivityIndicator size="large" color="#00ff00" animating={activity} />
    </View>
    <Text style={Estilos.personagem}>{totalPersonagens} de {totalGeralPersonagens} Personagens Encontrados</Text>
    <FlatList
      style={{ marginTop: 10 }}
      data={jsonData}
      renderItem={PersonagemItem}
      keyExtractor={item => item.id}
    />
  </SafeAreaView>);

};

export default App;
