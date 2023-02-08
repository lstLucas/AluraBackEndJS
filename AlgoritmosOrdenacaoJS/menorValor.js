const livros = require('./listaLivros');

function encontraMenorValor(arrProdutos, indexInicial){
    let menorPreco = indexInicial;

    for (let atual = indexInicial; atual < arrProdutos.length; atual++ ){
    
        if (arrProdutos[atual].preco < arrProdutos[menorPreco].preco)
            menorPreco = atual;
    }
    return menorPreco;
}

module.exports = encontraMenorValor;