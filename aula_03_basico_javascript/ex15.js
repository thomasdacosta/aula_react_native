try {
    let a = 1;
    let b = 1;
    let resul = a / c;
} catch (e) {
    console.log(e.message); // c is not defined
    console.log(e.name); // ReferenceError
    console.log(e.stack); // ReferenceError: c is not defined
}