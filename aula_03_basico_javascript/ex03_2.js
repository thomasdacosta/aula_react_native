let nome = "João";
let idade = 30;

// Usando template literals
let mensagem = `Olá, ${nome}! Você tem ${idade} anos.`;
console.log(mensagem);
// Exibe: Olá, João! Você tem 30 anos.

let multiLineString = `
  Esta é uma string
  que abrange múltiplas linhas
  sem a necessidade de usar \n.`;

console.log(multiLineString);

let texto = "Olá, mundo!";

console.log(texto.startsWith("Olá"));   // true
console.log(texto.endsWith("mundo!"));  // true
console.log(texto.includes("mundo"));   // true
console.log("abc".repeat(3)); // "abcabcabc"

let caminho = String.raw`C:\User\Nome\Documents`;
console.log(caminho);
// Exibe: C:\\User\\Nome\\Documents

