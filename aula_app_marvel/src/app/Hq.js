import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import Estilos from "../estilos/Estilos";
import React, { useEffect, useState } from "react";
import MarvelApiClient from "../js/HqService";

const App = ({ route, navigation }) => {
  const { item } = route.params;
  const [jsonData, setJsonData] = useState("");
  const [activity, setActivity] = useState(false);
  const [totalHq, setTotalHq] = useState(0);
  const [totalGeralHq, setTotalGeralHq] = useState(0);

  let parametros = {
    item: item,
    totalHq: setTotalHq,
    totalGeralHq: setTotalGeralHq,
    activity: setActivity,
    jsonData: setJsonData,
  };

  useEffect(() => {
    setActivity(true);
    MarvelApiClient(parametros).then(() => {});
  }, []);

  const Hq = ({ item, evento, link }) => (
    <View>
      <Pressable onPress={evento}>
        <View style={Estilos.linha} />
        <Text style={Estilos.personagemParagraph}>{item.title}</Text>
        <Image
          style={Estilos.imagemPersonagem}
          source={{
            uri: link,
          }}
        />
        <View><Text></Text></View>
      </Pressable>
    </View>
  );

  const HqPersonagemItem = ({ item }) => (
    <Hq
      item={item}
      evento={() => { navigation.navigate("DetalhesHq", {
        item: item
      }) }}
      link={item?.thumbnail?.path + "/portrait_uncanny.jpg"} />
  );

  return (
    <SafeAreaView style={Estilos.safeAreaView}>
      <Text style={Estilos.detalhePersonagem}>HQ´s do {item.name}</Text>
      <View style={{ marginTop: 10 }}>
        <ActivityIndicator size="large" color="#00ff00" animating={activity} />
      </View>
      <Text style={Estilos.personagem}>{totalHq} de {totalGeralHq} HQ´s Encontradas</Text>
      <FlatList
        style={{ marginTop: 10 }}
        data={jsonData}
        renderItem={HqPersonagemItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
export default App;
