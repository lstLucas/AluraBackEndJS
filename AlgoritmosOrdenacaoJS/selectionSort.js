const livros = require('./listaLivros');
const menorValor = require('./menorValor');

for (let atual = 0; atual < livros.length - 1; atual++) {
    let menor = menorValor(livros, atual)
    let aux = livros[atual];
    livros[atual] = livros[menor];
    livros[menor] = aux;
}

console.log(livros);