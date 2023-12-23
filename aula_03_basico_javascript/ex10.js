console.log(0 / 0);        // NaN
console.log(parseInt('string'));  // NaN

console.log(isNaN(NaN));    // true
console.log(isNaN(10));     // false
console.log(isNaN("string")); // true, porque a conversão para número falha

console.log(Number.isNaN("100"));   // false, porque "100" não é NaN
