const express = require('express');
const { create } = require('./repositories/alunosRepository');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/alunos', (req, res) => {
    const { nome, email, nomeCurso } = req.body;
    const aluno = create({ nome, email, nomeCurso });
    res.status(201).json(aluno);
});

app.get('/alunos', (req, res) => {
    const alunos = findAll();
    res.json(alunos);
});


app.put('/alunos/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email, nomeCurso } = req.body;
    const aluno = update(id, { nome, email, nomeCurso });
    res.json(aluno);
});

app.delete('/alunos/:id', (req, res) => {
    const { id } = req.params;
    remove(id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
