# React Native Componentes

## Tema das aulas

- Aula 01 - Apresentação
- Aula 02 - Conceitos de API REST
- Aula 03 - JavaScript - Conceitos Básicos
- Aula 04 - React Native
- Aula 05 - JavaScript - Functions e Arrow Functions
- Aula 06 - Componentes Visuais do React Native
- Aula 07 - Hook - useState
- Aula 08 - Hook - useEffect
- Aula 09 - Componentização no React Native
- Aula 10 - FlatList
- Aula 11 - React Navigation
- Aula 12 - Modal
- Aula 13 - Flexbox
- Aula 14 - Armazenamento - AsyncStorage
- Aula 15 - Promise e Fecth
- Aula 16 – Código Nativo no React Native
- Aula 17 – Geração do pacote e deploy nas lojas oficiais
- Aula 18 – Redux

## Expo

- https://snack.expo.dev/@thomasdacostaprof/aula_07_1_hook_usestate
- https://snack.expo.dev/@thomasdacostaprof/aula_07_2_calculadora
- https://snack.expo.dev/@thomasdacostaprof/aula_08_hook_useeffect
- https://snack.expo.dev/@thomasdacostaprof/aula_12_modal

## Objetivo

Componentes básicos do React Native e seu funcionamento

## Configurando o Ambiente

- Necessário instalar o **Android Studio** para configurar o ambiente com Android.

- Configurando o ambiente:
  - https://reactnative.dev/docs/environment-setup

- Listando os dispositivos do Emulador Android (Windows):
```
C:\Users\<usuario>\AppData\Local\Android\Sdk\tools\emulator -list-avds
```

- Executando o Emulador Android (Windows):
```
C:\Users\<usuario>\AppData\Local\Android\Sdk\tools\emulator -avd Pixel_2_API_26
```

- Variaveis de Ambiente (Windows):
```
ANDROID_HOME=C:\Users\<usuario>\AppData\Local\Android\Sdk
ANDROID_SDK_ROOT=C:\Users\<usuario>\AppData\Local\Android\Sdk
```

- Problemas na execução da aplicação:
  - https://stackoverflow.com/questions/57104357/react-native-task-appvalidatesigningdebug-failed

- Links importantes:
  - https://expo.dev/
  
## Criando um novo projeto

Comando para criar um novo projeto com React Native:

**IMPORTANTE:** Especificar a versão 0.70.x para usar o Javascript como linguagem padrão. A partir da versão 0.71 a linguagem padrão é o TypeScript.
```
npx react-native init ex_08_reactNavigation --version 0.70.6
```

## Instalando a dependência do React Navigation

Execute o seguinte comando:

```
npm install @react-navigation/native-stack
```

Execute comando abaixo caso aconteça esse erro: https://stackoverflow.com/questions/69043806/requirenativecomponent-rnsscreenstackheaderconfig-was-not-found-in-the-uimana

```
npm install react-native-screens react-native-safe-area-context
```

---

Thomás da Costa - [https://thomasdacosta.com.br](https://thomasdacosta.com.br)
