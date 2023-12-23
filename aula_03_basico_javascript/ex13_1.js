for (let i = 0; i < 5; i++) {
    console.log(i);  // Exibe números de 0 a 4
}

const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

for (let propriedade in pessoa) {
    console.log(propriedade);  // Exibe: nome, idade, cidade
    console.log(pessoa[propriedade]);  // Exibe os valores correspondentes
}

const frutas = ["maçã", "banana", "cereja"];
for (let fruta of frutas) {
    console.log(fruta);  // Exibe: maçã, banana, cereja
}
