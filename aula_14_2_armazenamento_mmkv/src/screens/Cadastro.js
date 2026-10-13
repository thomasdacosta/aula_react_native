import React, { useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  limparCadastros,
  listarCadastros,
  removerCadastro,
  salvarCadastro,
} from '../storage/storage';
import { confirmar, mostrarAlerta } from '../utils/mensagem';

const FORM_INICIAL = { nome: '', sobrenome: '', email: '', telefone: '' };

const DADOS_PADRAO = {
  nome: 'Maria',
  sobrenome: 'Silva',
  email: 'maria.silva@email.com',
  telefone: '(11) 91234-5678',
};

const emailValido = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Cadastro = () => {
  const [form, setForm] = useState(FORM_INICIAL);
  // Lê direto do MMKV na primeira renderização (leitura síncrona)
  const [cadastros, setCadastros] = useState(() => listarCadastros());

  const atualizarCampo = (campo, valor) => {
    setForm((anterior) => ({ ...anterior, [campo]: valor }));
  };

  const handlePreencherPadrao = () => {
    setForm(DADOS_PADRAO);
  };

  const handleSalvar = () => {
    const { nome, sobrenome, email, telefone } = form;

    if (!nome.trim() || !sobrenome.trim() || !email.trim() || !telefone.trim()) {
      mostrarAlerta('Campos obrigatórios', 'Preencha todos os campos.');
      return;
    }

    if (!emailValido(email.trim())) {
      mostrarAlerta('E-mail inválido', 'Informe um e-mail no formato nome@dominio.com.');
      return;
    }

    const atualizada = salvarCadastro({
      nome: nome.trim(),
      sobrenome: sobrenome.trim(),
      email: email.trim(),
      telefone: telefone.trim(),
    });

    setCadastros(atualizada);
    setForm(FORM_INICIAL);
    mostrarAlerta('Pronto', 'Cadastro salvo no MMKV.');
  };

  const handleRemover = (id) => {
    setCadastros(removerCadastro(id));
  };

  const handleLimparTudo = () => {
    confirmar('Limpar tudo', 'Deseja apagar todos os cadastros?', () =>
      setCadastros(limparCadastros())
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardInfo}>
        <Text style={styles.cardNome}>
          {item.nome} {item.sobrenome}
        </Text>
        <Text style={styles.cardTexto}>{item.email}</Text>
        <Text style={styles.cardTexto}>{item.telefone}</Text>
      </View>
      <Pressable onPress={() => handleRemover(item.id)} style={styles.botaoRemover}>
        <Text style={styles.botaoRemoverTexto}>Remover</Text>
      </Pressable>
    </View>
  );

  const renderCabecalho = () => (
    <View>
      <Text style={styles.titulo}>Cadastro</Text>

      <Pressable onPress={handlePreencherPadrao} style={styles.botaoPreencher}>
        <Text style={styles.botaoPreencherTexto}>Preencher automaticamente</Text>
      </Pressable>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={form.nome}
        onChangeText={(texto) => atualizarCampo('nome', texto)}
        placeholder="Maria"
        autoCapitalize="words"
      />

      <Text style={styles.label}>Sobrenome</Text>
      <TextInput
        style={styles.input}
        value={form.sobrenome}
        onChangeText={(texto) => atualizarCampo('sobrenome', texto)}
        placeholder="Silva"
        autoCapitalize="words"
      />

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        value={form.email}
        onChangeText={(texto) => atualizarCampo('email', texto)}
        placeholder="maria@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Text style={styles.label}>Telefone</Text>
      <TextInput
        style={styles.input}
        value={form.telefone}
        onChangeText={(texto) => atualizarCampo('telefone', texto)}
        placeholder="(11) 91234-5678"
        keyboardType="phone-pad"
      />

      <Pressable onPress={handleSalvar} style={styles.botaoSalvar}>
        <Text style={styles.botaoSalvarTexto}>Salvar cadastro</Text>
      </Pressable>

      <View style={styles.listaCabecalho}>
        <Text style={styles.subtitulo}>Salvos ({cadastros.length})</Text>
        {cadastros.length > 0 && (
          <Pressable onPress={handleLimparTudo}>
            <Text style={styles.limpar}>Limpar tudo</Text>
          </Pressable>
        )}
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <FlatList
        data={cadastros}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={renderCabecalho}
        ListEmptyComponent={
          <Text style={styles.vazio}>Nenhum cadastro salvo ainda. Preencha o formulário acima.</Text>
        }
        contentContainerStyle={styles.conteudo}
        keyboardShouldPersistTaps="handled"
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F6F8' },
  conteudo: { padding: 20, paddingBottom: 40 },
  titulo: { fontSize: 28, fontWeight: '700', color: '#1B1F2A', marginBottom: 16 },
  label: { fontSize: 14, fontWeight: '600', color: '#3A4150', marginBottom: 6, marginTop: 10 },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D5D9E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#1B1F2A',
  },
  botaoPreencher: {
    borderWidth: 1,
    borderColor: '#2457D6',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 6,
  },
  botaoPreencherTexto: { color: '#2457D6', fontSize: 15, fontWeight: '700' },
  botaoSalvar: {
    backgroundColor: '#2457D6',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  botaoSalvarTexto: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
  listaCabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 28,
    marginBottom: 10,
  },
  subtitulo: { fontSize: 18, fontWeight: '700', color: '#1B1F2A' },
  limpar: { color: '#C0392B', fontWeight: '600' },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E3E6EC',
    padding: 14,
    marginBottom: 10,
  },
  cardInfo: { flex: 1 },
  cardNome: { fontSize: 16, fontWeight: '700', color: '#1B1F2A', marginBottom: 2 },
  cardTexto: { fontSize: 14, color: '#4B5363' },
  botaoRemover: { paddingHorizontal: 10, paddingVertical: 6 },
  botaoRemoverTexto: { color: '#C0392B', fontWeight: '600' },
  vazio: { textAlign: 'center', color: '#6B7384', marginTop: 8 },
});

export default Cadastro;