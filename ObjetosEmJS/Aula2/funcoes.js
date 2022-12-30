const cliente = {
    nome: 'Euler',
    idade: 20,
    email: 'euler@dominio.com',
    telefone: ["11111111111", "11444444440"],
    saldo: 300,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo){
            console.log('Saldo insuficiente');
        } else {
            this.saldo -= valor;
            console.log(`Compra efetuada, novo saldo: ${this.saldo}`);
        }
    }
};

cliente.efetuaPagamento(200);