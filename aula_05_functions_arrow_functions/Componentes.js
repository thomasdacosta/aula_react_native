import React from 'react';
import { View, Text, } from 'react-native';

function Exemplo1() {
    return (
        <View style={{flex: 1,justifyContent: "center",alignItems: "center"}}>
            <Text>Olá mundo - Exemplo 1</Text>
        </View>
    )
}

const Exemplo2 = () => {
    return (
        <View style={{flex: 1,justifyContent: "center",alignItems: "center"}}>
            <Text>Olá mundo - Exemplo 2</Text>
        </View>
    )
}

const Exemplo3 = () => <View style={{flex: 1,justifyContent: "center",alignItems: "center"}}><Text>Olá mundo - Exemplo 3</Text></View>

const Exemplo4 = ({nome = "João", idade = 35}) => {
    return (
        <View style={{flex: 1,justifyContent: "center",alignItems: "center"}}>
            <Text>Olá mundo para vc {nome} que tem a idade {idade}</Text>
        </View>
    )
}

export { Exemplo1, Exemplo2, Exemplo3, Exemplo4 }

export default () => {
    return (
        <View style={{flex: 1,justifyContent: "center",alignItems: "center"}}>
            <Text>Olá mundo - Exemplo Default</Text>
        </View>
    )
}
