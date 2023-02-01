const clientes = require("./clientes.json");

function encontrar(list, chave, valor){
    return list.find((item) => item[chave].includes(valor));
}

console.log(encontrar(clientes, "nome", "Kirby"));
console.log(encontrar(clientes, "email", "hbevissi@harvard.edu"));