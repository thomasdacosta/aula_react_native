class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const pessoa1 = new Pessoa('João', 30);
pessoa1.saudacao();  // Exibe: Olá, meu nome é João e tenho 30 anos.

class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);  // Chama o construtor da classe pai
        this.curso = curso;
    }

    estuda() {
        console.log(`${this.nome} está estudando ${this.curso}.`);
    }
}

const estudante1 = new Estudante('Maria', 25, 'Engenharia');
estudante1.saudacao();  // Exibe: Olá, meu nome é Maria e tenho 25 anos.
estudante1.estuda();    // Exibe: Maria está estudando Engenharia.
