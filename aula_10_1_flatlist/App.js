import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList, Pressable, Image} from 'react-native';

const App = () => {
    const DATA = [
        {
            "id": 1009220,
            "nome": "Captain America",
            "descricao": "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.",
            "dataModificacao": "2020-04-04T19:01:59-0400",
            "imagem": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/portrait_medium.jpg"
        },
        {
            "id": 1010914,
            "nome": "Captain America (House of M)",
            "descricao": "",
            "dataModificacao": "2014-03-05T13:17:50-0500",
            "imagem": "http://i.annihil.us/u/prod/marvel/i/mg/6/10/53176a1e7c0d5/portrait_medium.jpg"
        },
        {
            "id": 1017295,
            "nome": "Captain America (LEGO Marvel Super Heroes)",
            "descricao": "",
            "dataModificacao": "2013-09-18T11:15:29-0400",
            "imagem": "http://i.annihil.us/u/prod/marvel/i/mg/d/b0/5239c38051946/portrait_medium.jpg"
        },
        {
            "id": 1017575,
            "nome": "Captain America (Sam Wilson)",
            "descricao": "Sam Wilson, a Harlem native, previously operated under the name Falcon, fighting alongside the Avengers. When his longtime friend Steve Rogers stepped down as Captain America, Wilson was hand-picked to fill the role. Now the former Falcon soars through the skies wearing red, white and blue.",
            "dataModificacao": "2014-11-17T17:46:57-0500",
            "imagem": "http://i.annihil.us/u/prod/marvel/i/mg/c/80/545a84a75ddaf/portrait_medium.jpg"
        }
    ]

    const Personagem = ({item}) => (
        <Pressable onPress={() => alert(item.descricao === "" ? "Personagem sem descrição" : item.descricao)}>
            <View style={styles.containerPersonagem}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: item.imagem,
                    }}
                />
                <Text style={styles.paragraph}>{item.nome}</Text>
            </View>
        </Pressable>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={Personagem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#202020',
        padding: 8
    },
    containerPersonagem: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#202020',
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        width: 300,
        height: 300
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
