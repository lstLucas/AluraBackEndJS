const livros = require("./listaLivros");

let menorPreco = 0;

for (let atual = 0; atual < livros.length; atual++ ){

    if (livros[atual].preco < livros[menorPreco].preco)
        menorPreco = atual;
}
const livroBarato = livros[menorPreco];

console.log(`O livro mais barato é ${livroBarato.titulo} no valor de ${livroBarato.preco} R$`);