import { MMKV } from 'react-native-mmkv';

// Instância única do MMKV usada em todo o app
export const storage = new MMKV({ id: 'cadastro-storage' });

const CHAVE_CADASTROS = 'cadastros';

export const listarCadastros = () => {
  const json = storage.getString(CHAVE_CADASTROS);
  return json ? JSON.parse(json) : [];
};

export const salvarCadastro = (cadastro) => {
  const lista = listarCadastros();
  const novo = { id: Date.now().toString(), ...cadastro };
  const atualizada = [novo, ...lista];
  storage.set(CHAVE_CADASTROS, JSON.stringify(atualizada));
  return atualizada;
};

export const removerCadastro = (id) => {
  const atualizada = listarCadastros().filter((item) => item.id !== id);
  storage.set(CHAVE_CADASTROS, JSON.stringify(atualizada));
  return atualizada;
};

export const limparCadastros = () => {
  storage.delete(CHAVE_CADASTROS);
  return [];
};
