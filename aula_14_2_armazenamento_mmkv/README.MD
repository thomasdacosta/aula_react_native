# aula_14_2_armazenamento_mmkv

Cadastro (nome, sobrenome, e-mail e telefone) salvo localmente com **react-native-mmkv**, em um projeto **Expo**, executado **no navegador** (sem Android e sem iOS).

## 0. Verificar se as ferramentas estão instaladas

Abra o terminal (Prompt de Comando, PowerShell ou Terminal) e rode:

```bash
node -v
npm -v
npx -v
```

Cada comando deve mostrar um número de versão (ex.: `v22.11.0`, `10.9.0`).
Se aparecer *"comando não encontrado"* ou *"não é reconhecido como um comando interno"*, o Node.js não está instalado.

### Se não estiver instalado

1. Acesse https://nodejs.org e baixe a versão **LTS**.
2. Instale com as opções padrão (o `npm` e o `npx` já vêm junto com o Node.js).
3. **Feche e abra o terminal novamente** e repita os três comandos acima.

Requisito: Node.js 18 ou superior (recomendado a versão LTS mais recente).

## 1. Criar o projeto

```bash
npx create-expo-app@latest aula_14_2_armazenamento_mmkv --template blank
cd aula_14_2_armazenamento_mmkv
npx expo install react-dom react-native-web @expo/metro-runtime
npm install react-native-mmkv@^3
```

Copie para dentro do projeto os arquivos desta pasta, substituindo o `App.js` gerado:

```
App.js
src/screens/Cadastro.js
src/storage/storage.js
src/utils/mensagem.js
```

## 2. Executar no navegador

```bash
npx expo start --web
```

O navegador abre automaticamente em `http://localhost:8081`.
Se não abrir, acesse esse endereço manualmente (ou pressione `w` no terminal onde o Expo está rodando).

Para parar o servidor, use `Ctrl + C` no terminal.

## Observações sobre a versão web

- No navegador, o `react-native-mmkv` usa o **localStorage** como armazenamento. A API do código é a mesma do MMKV nativo, mas os dados ficam no navegador.
- Para ver os dados salvos: F12 → aba **Application** (Chrome/Edge) ou **Storage** (Firefox) → **Local Storage** → `http://localhost:8081`.
- `Alert.alert` não funciona no navegador. Por isso o arquivo `src/utils/mensagem.js` usa `window.alert` e `window.confirm` na web e `Alert.alert` no celular.
- Os dados são separados por endereço: se mudar a porta (ex.: 8082), o localStorage estará vazio.
