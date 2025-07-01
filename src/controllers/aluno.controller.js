function listar(request, response) {
  response.send('Lista de alunos');
}

function cadastrar(request, response) {
  response.send('Cadastrar um aluno');
}

function deletar(request, response) {
  response.send('Deletar um aluno');
}
function atualizar(request, response) {
  response.send('Atualizar as informações de um aluno');
}


module.exports = {

listar,   // exportando a função listar
cadastrar, // exportando a função cadastrar
deletar, // exportando a função deletar
atualizar // exportando a função atualizar
};