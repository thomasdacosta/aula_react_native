let usuario1 = {
    nome: "João",
    sobrenome: "da Silva",
    idade: 18,
    email: "joao@email.com",
    endereco: {
        rua: "Rua da Alegria",
        numero: 123,
        bairro: "Centro",
        cidade: "São Paulo",
        estado: "SP"
    },
    brasileiro: true,
    diasDeTrabalho: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
    imprimirDados : function() {
        console.log(this.nome + " " + this.sobrenome);
        console.log(this.idade);
        console.log(this.email);
        console.log(this.endereco.rua + ", "
            + this.endereco.numero + ", "
            + this.endereco.bairro + ", "
            + this.endereco.cidade + ", "
            + this.endereco.estado);
        console.log(this.diasDeTrabalho);
    }
}

usuario1.imprimirDados();
