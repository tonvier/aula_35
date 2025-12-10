// EXCLUIR
 function excluir(req, res) {
    const id = Number(req.params.id);
    alunos = alunos.filter(a => a.id !== id);

    res.json({ mensagem: "Aluno removido com sucesso" })
 }

module.exports = { listar, buscarPorId, criar, atualizar, excluir };