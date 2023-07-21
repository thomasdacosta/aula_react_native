import { Linking, Pressable, Text, View } from "react-native";
import Estilos from "../estilos/Estilos";
import { capitalizeFirstLetter } from "../js/Common";
import React from "react";

export default ({ item }) => {
  return (
    <View>
      <Text style={Estilos.detalhePersonagem}>Links</Text>
      {
        item.urls.map((e, index) => {
            let tipo = e.type;
            return (
              <View key={index}>
                <View style={Estilos.linha} />
                <Text style={Estilos.detalheDescricaoPersonagemAmarelo}>{capitalizeFirstLetter(tipo)}</Text>
                <Pressable onPress={() => Linking.openURL(e.url)}>
                  <Text style={Estilos.linkPersonagem}>{e.url}</Text>
                </Pressable>
                <View><Text></Text></View>
              </View>
            );
          }
        )
      }
      <View>
        <Text></Text>
      </View>
    </View>
  );
};
