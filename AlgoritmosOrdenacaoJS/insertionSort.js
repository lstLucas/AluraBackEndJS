const livros = require('./listaLivros');

function insertionSort(lista){
    for (let atual = 0; atual < lista.length; atual ++){
        let analise = atual;
        while(analise > 0 && lista[analise].preco < lista[analise-1].preco){
            let aux = lista[analise-1];
            lista[analise-1] = lista[analise];
            lista[analise] = aux;

            analise--;
        }
    }
    console.log(lista);
}

insertionSort(livros);