let numeros = [1, 2, 3, 4, 5];
let nomes = ["Ana", "João", "Maria"];
let misto = [1, "dois", true, { chave: "valor" }];

console.log(numeros[0]);  // Exibe: 1
console.log(nomes[1]);    // Exibe: João

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

numeros.forEach(function(numero) {
    console.log(numero);
});

let dobro = numeros.map(function(numero) {
    return numero * 2;
});
console.log(dobro);  // Exibe: [2, 4, 6, 8, 10]

numeros.push(6);
console.log(numeros);  // Exibe: [1, 2, 3, 4, 5, 6]

numeros.pop();
console.log(numeros);  // Exibe: [1, 2, 3, 4, 5]

numeros.shift();
console.log(numeros);  // Exibe: [2, 3, 4, 5]

numeros.unshift(0);
console.log(numeros);  // Exibe: [0, 2, 3, 4, 5]

numeros.splice(2, 1);  // Remove 1 elemento a partir do índice 2
console.log(numeros);  // Exibe: [0, 2, 4, 5]

let parte = numeros.slice(1, 3);  // Pega do índice 1 (inclusive) até o índice 3 (exclusive)
console.log(parte);  // Exibe: [2, 4]

console.log(numeros.indexOf(2));     // Exibe: 1
console.log(numeros.lastIndexOf(2)); // Exibe: 1

console.log(numeros.includes(3));  // Exibe: true
