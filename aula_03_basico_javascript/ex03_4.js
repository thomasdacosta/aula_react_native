let texto = "JavaScript";
console.log(texto.charAt(4));  // Exibe: S

let frase = "O gato subiu no telhado e depois pulou.";
console.log(frase.indexOf("gato"));    // Exibe: 2
console.log(frase.lastIndexOf("pulou")); // Exibe: 37

let palavra = "abcdefgh";
console.log(palavra.substring(2, 5));  // Exibe: cde

let texto = "Esta é uma string.";
console.log(texto.slice(5, 7));  // Exibe: é

let lista = "maçã,banana,uva,melancia";
let frutas = lista.split(",");
console.log(frutas);  // Exibe: ["maçã", "banana", "uva", "melancia"]

let frase = "O JavaScript é incrível!";
let novaFrase = frase.replace("JavaScript", "Python");
console.log(novaFrase);  // Exibe: O Python é incrível!

let texto = "JavaSCRIPT";
console.log(texto.toLowerCase());  // Exibe: javascript
console.log(texto.toUpperCase());  // Exibe: JAVASCRIPT

let texto = "   Espaços ao redor   ";
console.log(texto.trim());  // Exibe: Espaços ao redor
