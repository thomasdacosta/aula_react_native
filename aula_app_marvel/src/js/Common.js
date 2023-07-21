import { BackHandler } from "react-native";

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const desabilitarBotaoBackAndroid = () => {
  const backHandler = BackHandler.addEventListener("hardwareBackPress", () => true);
  return () => backHandler.remove();
}

