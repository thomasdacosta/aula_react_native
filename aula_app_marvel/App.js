import React, { useEffect, useRef } from "react";
import { Animated, Button, Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Estilos from "./src/estilos/Estilos";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ListaPersonagem from "./src/app/ListaPersonagem";
import DetalhesPersonagem from "./src/app/DetalhesPersonagem";
import Hq from "./src/app/Hq";
import Login from "./src/app/Login";
import Sobre from "./src/app/Sobre";
import DetalhesHq from "./src/app/DetalhesHq";

const Stack = createNativeStackNavigator();

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      },
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

const Main = ({navigation}) => (
  <View style={Estilos.appContainer}>
    <ImageBackground source={require("./src/imagens/background.jpg")}
                     resizeMode="cover" style={Estilos.appImage} imageStyle={{opacity: 0.3}}>
      <FadeInView style={Estilos.appFadein}>
        <Image style={Estilos.logo} source={require("./src/imagens/marvelLogo.png")} />
        <View><Text></Text></View>
        <Button title="Entrar" onPress={() => navigation.navigate("Login")} color="red" />
        <View><Text></Text></View>
        <Button title="Sobre" onPress={() => navigation.navigate("Sobre")} color="black" />
      </FadeInView>
    </ImageBackground>
  </View>
);

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Main" screenOptions={
      {
        headerStyle: {
          backgroundColor: "#FF0000",
        },
        headerTintColor: "#fff",
      }
    }>
      <Stack.Screen name="Main" component={Main} options={{ title: "Marvel App - Login", headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ title: "Marvel App - Login", headerShown: false }} />
      <Stack.Screen name="Personagem" component={ListaPersonagem} options={
        {
          title: "Marvel App - Personagens",
          headerBackVisible: false,
        }
      }
      />
      <Stack.Screen name="DetalhesPersonagem" component={DetalhesPersonagem}
                    options={{ title: "Marvel App - Detalhes" }} />
      <Stack.Screen name="HQ" component={Hq} options={{ title: "Marvel App - HQ´s" }} />
      <Stack.Screen name="DetalhesHq" component={DetalhesHq} options={{ title: "Marvel App - HQ´s" }} />
      <Stack.Screen name="Sobre" component={Sobre} options={{ title: "Marvel App - Sobre" }} />
    </Stack.Navigator>
  </NavigationContainer>
);
