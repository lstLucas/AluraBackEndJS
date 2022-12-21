const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota , 0);
    return (somaDasNotas / notasDaSala.length);
}


const mediaSalaJava = calculaMedia(salaJava);
const mediaSalaJS = calculaMedia(salaJS);
const mediaSalaPython = calculaMedia(salaPython);

console.log(`Médias: \nSala de Java: ${mediaSalaJava} \nSala de JavaScript: ${mediaSalaJS} \nSala de Python ${mediaSalaPython}`);