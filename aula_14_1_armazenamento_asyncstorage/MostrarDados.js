import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MostrarDados = ({route}) => {
    const [dadosSalvos, setDadosSalvos] = useState(null);

    useEffect(() => {
        const getDadosSalvos = async () => {
            try {
                const dados = await AsyncStorage.getItem(route.params.dados.id);
                if (dados) {
                    setDadosSalvos(JSON.parse(dados));
                }
            } catch (error) {
                console.error('Erro ao recuperar os dados salvos do AsyncStorage:', error);
            }
        };

        getDadosSalvos();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dados do Cadastro</Text>
            {dadosSalvos && (
                <>
                    <Text style={styles.text}>ID: {dadosSalvos.id}</Text>
                    <Text style={styles.text}>Nome: {dadosSalvos.nome}</Text>
                    <Text style={styles.text}>Sobrenome: {dadosSalvos.sobrenome}</Text>
                    <Text style={styles.text}>Data de Nascimento: {dadosSalvos.dataNascimento}</Text>
                    <Text style={styles.text}>Endereço: {dadosSalvos.endereco}</Text>
                    <Text style={styles.text}>Número: {dadosSalvos.numero}</Text>
                    <Text style={styles.text}>CEP: {dadosSalvos.cep}</Text>
                    <Text style={styles.text}>Cidade: {dadosSalvos.cidade}</Text>
                    <Text style={styles.text}>Estado: {dadosSalvos.estado}</Text>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default MostrarDados;
