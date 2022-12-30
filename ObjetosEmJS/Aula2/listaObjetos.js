const cliente = {
    nome: 'Euler',
    idade: 20,
    email: 'euler@dominio.com',
    telefone: {
        telefoneFixo: '11111111111',
        telefoneCelular: '11444444440'
    }
};

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "apto 934"
    },
];

cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false
});

const listaAptos = cliente.enderecos.filter((endereco) => endereco.apartamento);

console.log(listaAptos);

