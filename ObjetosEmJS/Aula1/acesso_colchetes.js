// Modelando um cliente

const cliente = {
    nome: 'Lucas',
    idade: '18',
    CPF: '1234567891',
    email: 'lucas@dominio.com'
}

// Acessando propriedades agora com colchetes

// console.log(`Nome do Cliente: ${cliente["nome"]} \nEmail do cliente: ${cliente["email"]} \nIdade do cliente: ${cliente["idade"]}`);
// console.log(`3 últimos dígitos do CPF: ${cliente["CPF"].substring(cliente["CPF"].length - 3, cliente["CPF"].length)}`);

// Flexibilizando o uso das chaves nos objetos
const chaves = ['nome', 'idade', 'cpf', 'email'];

chaves.forEach((chave) => console.log(`A chave ${chave} tem valor ${cliente[chave]}`));