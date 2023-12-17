import { Text, StyleSheet, Button, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Tela1 from './Tela1'
import Tela2 from './Tela2'
import Tela3 from './Tela3'

const Stack = createNativeStackNavigator();

const Tela = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.paragraph}>Tela principal da Navegação</Text>
      </View>
      <View>
        <Button onPress={() => navigation.navigate("Tela1")} title="Ir para a Tela 1" />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela">
        <Stack.Screen name="Tela" component={Tela}  />
        <Stack.Screen name="Tela1" component={Tela1}  />
        <Stack.Screen name="Tela2" component={Tela2}  />
        <Stack.Screen name="Tela3" component={Tela3}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
