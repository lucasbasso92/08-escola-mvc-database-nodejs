function listar(request, response) {
  response.send('Lista de cursos');
}

function cadastrar(request, response) {
  response.send('Cadastrar um curso');
}

function deletar(request, response) {
  response.send('Deletar um curso');
}
function atualizar(request, response) {
  response.send('Atualizar as informações de um curso');
}


module.exports = {

listar,   // exportando a função listar
cadastrar, // exportando a função cadastrar
deletar, // exportando a função deletar
atualizar // exportando a função atualizar
};