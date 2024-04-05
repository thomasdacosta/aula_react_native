import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Button } from 'react-native';

const App = () => {
  const [cep, setCep] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [money, setMoney] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');  

  const handleCep = (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    setCep(value);
  };

  const handlePhone = (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    setPhone(value);
  };

  const handleDate = (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, '$1/$2');
    value = value.replace(/(\d{2})(\d)/, '$1/$2');
    setDate(value);
  };    

  const handleMoney = (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d{2})$/, '$1,$2');
    value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');
    setMoney(value);
  };

  const handleCpf = (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    setCpf(value);
  };

  const handleCnpj = (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/, '$1.$2');
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
    value = value.replace(/(\d{4})(\d)/, '$1-$2');
    setCnpj(value);
  };  

  const validateEmail = () => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };  

  const handleSubmit = () => {
    if (!validateEmail()) {
      alert('E-mail inválido');
      return;
    }
  };    

  return (
    <View style={Estilos.container}>
      <Text style={Estilos.loginLabel}>CEP:</Text>
      <TextInput
        value={cep}
        onChangeText={(value) => {
            handleCep(value);
          }
        }
        placeholder="Digite o CEP"
        keyboardType="numeric"
        style={Estilos.textInput}
        maxLength={9}
      />

      <Text style={Estilos.loginLabel}>Telefone:</Text>
      <TextInput
        value={phone}
        onChangeText={handlePhone}
        placeholder="Digite o telefone"
        keyboardType="numeric"
        style={Estilos.textInput}
        maxLength={15}
      />

      <Text style={Estilos.loginLabel}>Data de Nascimento:</Text>
      <TextInput
        value={date}
        onChangeText={handleDate}
        placeholder="Digite a data"
        keyboardType="numeric"
        style={Estilos.textInput}
        maxLength={10}
      />

      <Text style={Estilos.loginLabel}>Valor:</Text>
      <TextInput
        value={money}
        onChangeText={handleMoney}
        placeholder="Digite o valor"
        keyboardType="numeric"
        style={Estilos.textInput}
      />

      <Text style={Estilos.loginLabel}>E-mail:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={Estilos.textInput}
      />

      <Text style={Estilos.loginLabel}>CPF:</Text>
      <TextInput
        value={cpf}
        onChangeText={handleCpf}
        placeholder="Digite o CPF"
        keyboardType="numeric"
        style={Estilos.textInput}
        maxLength={14}
      />

      <Text style={Estilos.loginLabel}>CNPJ:</Text>
      <TextInput
        value={cnpj}
        onChangeText={handleCnpj}
        placeholder="Digite o CNPJ"
        keyboardType="numeric"
        style={Estilos.textInput}
        maxLength={18}
      />      

      <View style={Estilos.button}>
        <Button onPress={() => handleSubmit()} title="Validar" />
      </View>      
    </View>
  );
};

const Estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loginLabel: {
    color: 'black',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },  
  textInput: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 15,
    height: 40,
    width: 250,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderWidth: 1
  }
});

export default App;