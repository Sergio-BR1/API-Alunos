const {v4: uuidv4} = require('uuid');

let alunos = [];

function create({descricao, titulo, dataCadastro,telefone, empresa}) {  
    const aluno = {
        id: uuidv4(),
        nome,
        email,
        nomeCurso,
       
    };
    alunos.push(aluno);
    return aluno;
}


module.exports = {
    create,
    update,
    remove,
    findAll
}