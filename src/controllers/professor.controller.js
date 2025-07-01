function listar(request, response) {
  response.send('Lista de professores');
}

function cadastrar(request, response) {
  response.send('Cadastrar um professor');
}

function deletar(request, response) {
  response.send('Deletar o cadastro de um professor');
}
function atualizar(request, response) {
  response.send('Atualizar as informações de um professor');
}


module.exports = {

listar,   // exportando a função listar
cadastrar, // exportando a função cadastrar
deletar, // exportando a função deletar
atualizar // exportando a função atualizar
};