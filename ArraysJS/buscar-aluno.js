const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if (listaAlunosEMedias[0].includes(aluno)){

        // const alunos = listaAlunosEMedias[0];
        // const medias = listaAlunosEMedias[1];
        // VVVVVVVVVVVV Equivalente VVVVVVVVVVVV

        const [alunos, medias] = listaAlunosEMedias;

        const index = alunos.indexOf(aluno);
        const media = medias[index];

        console.log(`${aluno} possui média ${media}.`);
    } else {
        console.log("Aluno não encontrado");
    }
}

exibeNomeENota("Juliana");