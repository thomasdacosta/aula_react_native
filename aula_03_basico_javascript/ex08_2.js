const pessoa = { nome: 'Ana', idade: 30 };
const { nome, idade } = pessoa;

console.log(nome);  // Exibe: Ana
console.log(idade); // Exibe: 30

const { nome: primeiroNome, idade: anos } = pessoa;

console.log(primeiroNome);  // Exibe: Ana
console.log(anos);          // Exibe: 30

const { sobrenome = 'Silva', cidade = 'Rio de Janeiro' } = pessoa;

console.log(sobrenome);  // Exibe: Silva (valor padrão)
console.log(cidade);     // Exibe: Rio de Janeiro (valor padrão)
