import { Alert, Platform } from 'react-native';

// Alert.alert não funciona no navegador (react-native-web),
// por isso usamos window.alert / window.confirm quando Platform.OS === 'web'.

export const mostrarAlerta = (titulo, mensagem) => {
  if (Platform.OS === 'web') {
    window.alert(`${titulo}\n\n${mensagem}`);
    return;
  }
  Alert.alert(titulo, mensagem);
};

export const confirmar = (titulo, mensagem, aoConfirmar) => {
  if (Platform.OS === 'web') {
    if (window.confirm(`${titulo}\n\n${mensagem}`)) {
      aoConfirmar();
    }
    return;
  }
  Alert.alert(titulo, mensagem, [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Confirmar', style: 'destructive', onPress: aoConfirmar },
  ]);
};
