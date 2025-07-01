function listar(request, response) {
  response.send('Função responsável pela listagem');
}

function cadastrar(request, response) {
  response.send('Função responsável por cadastrar um aluno');
}

function deletar(request, response) {
  response.send('Função responsável por deletar um aluno');
}
function atualizar(request, response) {
  response.send('Função responsável por atualizar as informações de um aluno');
}


module.exports = {

listar,   // exportando a função listar
cadastrar, // exportando a função cadastrar
deletar, // exportando a função deletar
atualizar // exportando a função atualizar
};