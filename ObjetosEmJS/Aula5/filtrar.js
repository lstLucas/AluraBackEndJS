const clientes = require("./clientes.json");

function filtrarApartamentoSemComplemento(clientes){
    return clientes.filter((cliente) =>{
        return (cliente.endereco.apartamento && 
            !cliente.endereco.hasOwnProperty("complemento")
        );
    })
}

const clientesSemComplemento = filtrarApartamentoSemComplemento(clientes);

console.log(clientesSemComplemento);