const ano = 1991;
let atrasoEmSegundos = 0.00016;
let area = (16 * 3.14);
let metadeArea = area / 2;

console.log("Ano: " + ano); // -> 1991;
console.log("Atraso em Segundos: " + atrasoEmSegundos); // -> 0.00016;
console.log("Área: " + area); // -> 50.24;
console.log("Tipo: " + typeof metadeArea); // -> number;

let a = 10; // decimal
let b = 0x10; // hexadecimal
let c = 0o10; // octal
let d = 0b10; // binário

console.log(a); // -> 10
console.log(b); // -> 16
console.log(c); // -> 8
console.log(d); // -> 2

let x = 9e3;
let y = 123e-5;

console.log(x); // -> 9000
console.log(y); // -> 0.00123

let z = 0x21;
console.log(z); // -> 33
