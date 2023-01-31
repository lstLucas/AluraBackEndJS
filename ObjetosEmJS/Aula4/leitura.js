const dados = require("./cliente.json");

//console.log(dados);

const clienteEmString = JSON.stringify(dados);

//console.log(clienteEmString);

// Transformando string em objeto

console.log(JSON.parse(clienteEmString));
