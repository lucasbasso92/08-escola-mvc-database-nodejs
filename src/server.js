//importando o módulo express
const express = require('express');

// importações dos controllers

const cursoController = require('./controllers/curso.controller');
const alunoController = require('./controllers/aluno.controller');
const professorController = require('./controllers/professor.controller'); 



// criando uma instância do express
const app = express()

// criar uma rota curso
app.get ('/cursos', cursoController.listar ) 
app.post ('/cursos/cadastrar', cursoController.cadastrar )
app.delete ('/cursos/deletar', cursoController.deletar )  
app.put ('/cursos/atualizar', cursoController.atualizar )

// criar uma rota aluno
app.get ('/alunos', alunoController.listar )
app.post ('/alunos/cadastrar', alunoController.cadastrar )
app.delete ('/alunos/deletar', alunoController.deletar )
app.put ('/alunos/atualizar', alunoController.atualizar )

//criar uma rota professor
app.get ('/professores', professorController.listar )
app.post ('/professores/cadastrar', professorController.cadastrar )
app.delete ('/professores/deletar', professorController.deletar )
app.put ('/professores/atualizar', professorController.atualizar )
    

//iniciar o  servidor na porta 3000
app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000');
})