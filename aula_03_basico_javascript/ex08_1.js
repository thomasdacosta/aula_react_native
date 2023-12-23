const numeros = [1, 2, 3];
const [a, b, c] = numeros;

console.log(a);  // Exibe: 1
console.log(b);  // Exibe: 2
console.log(c);  // Exibe: 3

const [primeiro, , terceiro] = numeros;

console.log(primeiro);  // Exibe: 1
console.log(terceiro);  // Exibe: 3

const [x = 10, y = 20, z = 30] = [5, , 25];

console.log(x);  // Exibe: 5
console.log(y);  // Exibe: 20 (valor padrão)
console.log(z);  // Exibe: 25
