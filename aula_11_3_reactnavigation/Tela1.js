import { Text, StyleSheet, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const Tela1 = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.paragraph}>Tela 1 da Navegação</Text>
            </View>
            <View>
                <Button onPress={() => navigation.navigate("Tela2", {
                    nome: "João",
                    idade: 25,
                    curso: "Tecnologia em Analise e Desenvolvimento de Sistemas",
                    disciplina: "Programação para Dispositivos Móveis II",
                    ano: 2023
                })} title="Ir para a Tela 2" />
            </View>
        </View>
    );
}

export default Tela1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
