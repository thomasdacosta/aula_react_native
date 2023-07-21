import React, { useEffect, useRef } from "react";
import { Animated, ImageBackground, Text, View } from "react-native";
import Estilos from "../estilos/Estilos";

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

export default () => (
  <View style={Estilos.appContainer}>
    <ImageBackground source={require("../imagens/capitaoEscudoLogo.png")}
                     resizeMode="cover" style={Estilos.appImage} imageStyle={{opacity: 0.3}}>
      <FadeInView style={Estilos.appFadein}>
        <View><Text style={Estilos.sobreText}>Desenvolvido por Thomás da Costa</Text></View>
        <View><Text style={Estilos.sobreText}>Novembro/2022</Text></View>
      </FadeInView>
    </ImageBackground>
  </View>
);
