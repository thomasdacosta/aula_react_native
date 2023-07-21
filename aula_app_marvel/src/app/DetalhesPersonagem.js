import React from "react";
import { Button, Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import Estilos from "../estilos/Estilos";
import ListarUrls from "../componentes/ListarUrls";

const App = ({ route, navigation }) => {
  const { item } = route.params;

  let dataFormatada = item?.modified

  return (
    <SafeAreaView style={Estilos.safeAreaView}>
      <ScrollView>
        <View style={Estilos.alignVertical}>
          <View style={{ flex: 0.1 }} />
          <Text style={Estilos.detalhePersonagem}>{item.name}</Text>
        </View>
        <Image
          style={Estilos.imagemPersonagem}
          source={{
            uri: item.thumbnail.path + "/portrait_uncanny.jpg",
          }}
        />
        <View><Text></Text></View>
        <View style={Estilos.alignVertical}>
          <Button style={Estilos.button} title="Histórias em Quadrinhos" onPress={() => {
            navigation.navigate("HQ", {
              item: item,
            });
          }} disabled={item.comics.items.length <= 0} color="red" />
        </View>
        <View><Text></Text></View>
        <View style={Estilos.linha} />
        <Text
          style={Estilos.detalheDescricaoPersonagemAmarelo}>Descrição: </Text>
        <Text
          style={Estilos.detalheDescricaoPersonagem}>{item?.description === "" ? item?.name : item?.description}</Text>
        <View><Text></Text></View>
        <View style={Estilos.linha} />
        <Text style={Estilos.detalheDescricaoPersonagemAmarelo}>Data de Modificação:</Text>
        <Text style={Estilos.detalheDescricaoPersonagem}>{dataFormatada + "\r\n"}</Text>
        <View style={{ flex: 0.1 }} />
        <ListarUrls item={item} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
