const alunos = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];

// É possível usar Spread Operator no Set
// const setAlunos = new Set(alunos);
const alunosAtualizados = [...new Set(alunos)];

console.log(alunosAtualizados);