import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native';

const App = () => {
  const DATA = [
    {
      "id": 1009220,
      "name": "Captain America",
      "description": "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.",
      "modified": "2020-04-04T19:01:59-0400",
      "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087",
        "extension": "jpg"
      }
    },
    {
      "id": 1010914,
      "name": "Captain America (House of M)",
      "idade" : 44,
      "description": "",
      "modified": "2014-03-05T13:17:50-0500",
      "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/10/53176a1e7c0d5",
        "extension": "jpg"
      }
    },
    {
      "id": 1017295,
      "name": "Captain America (LEGO Marvel Super Heroes)",
      "description": "",
      "modified": "2013-09-18T11:15:29-0400",
      "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/b0/5239c38051946",
        "extension": "jpg"
      }
    },
    {
      "id": 1017575,
      "name": "Captain America (Sam Wilson)",
      "description": "<p class=\"Body\">Sam Wilson, a Harlem native, previously operated under the name Falcon, fighting alongside the Avengers. When his longtime friend Steve Rogers stepped down as Captain America, Wilson was hand-picked to fill the role. Now the former Falcon soars through the skies wearing red, white and blue.</p>",
      "modified": "2014-11-17T17:46:57-0500",
      "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/80/545a84a75ddaf",
        "extension": "jpg"
      }
    }
  ]

  const Personagem = ({ item, evento, link }) => (
      <View>
        <Pressable onPress={evento}>
          <Image
              style={styles.tinyLogo}
              source={{
                uri: link,
              }}
          />
          <Text style={styles.paragraph}>{item.name}</Text>
          <Text style={styles.paragraph}>{item.name}</Text>
        </Pressable>
      </View>
  );

  const ExibirPersonagem = ({ item }) => (
      <Personagem
          item={item}
          evento={() => alert(item.description == "" ? "Personagem sem descrição" : item.description)}
          link={item.thumbnail.path + "/portrait_medium.jpg"} />
  );

  return (
      <SafeAreaView style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={ExibirPersonagem}
            keyExtractor={item => item.id}
        />
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#202020',
    padding: 8,
  },
  paragraph: {
    margin: 12,
    padding: 10,
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#7F7F7F',
  },
  tinyLogo: {
    width: 100,
    height: 150,
    alignSelf: 'center',
  },
});

export default App;
