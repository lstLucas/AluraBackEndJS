const nomes = ["Lucas", "Hiago", "Isabella"];

// Arrow Function -> Preferencial
nomes.forEach(nome =>{
    console.log(nome);
})

// Chamada de função externa de callback
nomes.forEach(imprimeNome);

function imprimeNome(nome){
    console.log(nome);
}