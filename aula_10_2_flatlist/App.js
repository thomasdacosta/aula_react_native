import React, {useEffect, useState} from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  FlatList,
  Button,
  ActivityIndicator, Pressable, Image, StyleSheet,
} from "react-native";

const App = () => {
  const PERSONAGEM_DEFAULT = "thor";

  const [jsonData, setJsonData] = useState("");
  const [personagem, setPersonagem] = useState(PERSONAGEM_DEFAULT);
  const [activity, setActivity] = useState(false);
  const [totalPersonagens, setTotalPersonagens] = useState(0);

  const URL = "http://gateway.marvel.com/v1/public/" +
      "characters?ts=1" +
      "&apikey=f59dbe01285f1d360542b5c47a9516e3" +
      "&hash=0ea6be79e04ac1b0400d65ffc11088f9" +
      "&nameStartsWith=" + personagem + "&orderBy=name&limit=100";

  const JSON_RETORNO_VAZIO = [
    {
      "id": 1,
      "name": "Nenhum personagem encontrado. \nVamos ficar com Cap nos nossos corações.",
      "description": "Eu também gosto dele :)",
      "modified": "2020-04-04T19:01:59-0400",
      "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087",
        "extension": "jpg",
      },
    },
  ];

  const MarvelApiClient = async (url, exibir) => {
    await fetch(url, {
      method: "GET",
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((result) => {
          if (result.data.results.length === 0)
            exibir(JSON_RETORNO_VAZIO, 0);
          else
            exibir(result.data.results, result.data.results.length);
        });
      } else
        exibir(JSON_RETORNO_VAZIO, 0);
    }).catch(() => exibir(JSON_RETORNO_VAZIO, 0));
  };

  const ExibirBusca = (json, total) => {
    setJsonData(json);
    setTotalPersonagens(total);
  };

  const BuscarPersonagem = () => {
    setTotalPersonagens(0);
    setJsonData(null);
    setActivity(true);
    MarvelApiClient(URL, ExibirBusca).then(() => {
    });
    setActivity(false);
  };

  useEffect(() => {
    setPersonagem(PERSONAGEM_DEFAULT);
    BuscarPersonagem();
  }, []);

  const Personagem = ({item, evento, link}) => (
      <View>
        <Pressable onPress={evento}>
          <Image
              style={Estilos.imagemPersonagem}
              source={{
                uri: link,
              }}
          />
          <Text style={Estilos.paragraph}>{item.name}</Text>
        </Pressable>
      </View>
  );

  const PersonagemItem = ({item}) => (
      <Personagem
          item={item}
          evento={() => alert(item.description === "" ? "Personagem sem descrição" : item.description)}
          link={item.thumbnail.path + "/portrait_uncanny.jpg"}/>
  );

  return (
      <SafeAreaView style={Estilos.container}>
        <Text style={Estilos.personagem}></Text>
        <Text style={Estilos.personagem}>Pesquisar Personagem:</Text>
        <TextInput
            autoCorrect={false}
            style={Estilos.textInput}
            clearButtonMode="always"
            placeholder={"Ex: " + PERSONAGEM_DEFAULT}
            onChangeText={(value) => setPersonagem(value)}
            onEndEditing={e => BuscarPersonagem()}
        />
        <View style={Estilos.button}>
          <Button title="Pesquisar" onPress={() => {
            BuscarPersonagem()
          }}/>
        </View>
        <View style={{marginTop: 10}}>
          <ActivityIndicator size="large" animating={activity}/>
        </View>
        <Text style={Estilos.personagem}>{totalPersonagens} Personagens Encontrados</Text>
        <FlatList
            style={{marginTop: 100}}
            data={jsonData}
            renderItem={PersonagemItem}
            keyExtractor={item => item.id}
        />
      </SafeAreaView>
  );

};

const Estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#191970',
    padding: 20,
  },
  paragraph: {
    margin: 12,
    padding: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#191970',
  },
  personagem: {
    color: 'white',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
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
  imagemPersonagem: {
    width: 200,
    height: 350,
    alignSelf: 'center',
  }
});

export default App;
