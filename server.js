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



