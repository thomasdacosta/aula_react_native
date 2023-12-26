import {StyleSheet, Text, View} from 'react-native';
import {Text as TextElement} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';
import {Button} from '@rneui/themed';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Utilizando os elementos do React Native Elements</Text>
            <TextElement h1>Login</TextElement>
            <Input
                placeholder='Digite seu e-mail'
                leftIcon={{type: 'font-awesome', name: 'envelope'}}
            />
            <Input
                placeholder='Digite a sua senha'
                leftIcon={{type: 'font-awesome', name: 'key'}}
                secureTextEntry={true}
            />
            <View style={styles.buttonContainer}>
                <Button onPress={()=>alert("Login efetuado com sucesso")}>
                    LOGIN
                    <Icon name="sign-in" type="font-awesome" color="#fff" />
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
});
