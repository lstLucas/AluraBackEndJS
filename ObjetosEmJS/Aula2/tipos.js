const cliente = {
    nome: 'Euler',
    idade: 20,
    email: 'euler@dominio.com',
    telefone: {
        telefoneFixo: '11111111111',
        telefoneCelular: '11444444440'
    },
    redidencias: ['casa x', 'casa y', 'apto z']
};

console.log(cliente['telefone']);
console.log(`ResidĂȘncias do cliente: ${cliente['redidencias']}`);