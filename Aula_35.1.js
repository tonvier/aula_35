// scr/controllers/alunoController.js

// Simulação de banco de dados
let aluno = [
    {id:1, nome: "Ana", curso: "DS"},
    {id:2, nome: "João", curso: "Redes"}
];

// LISTAR TODOS
    function listar(req, res) {
        res.json(aluno);
}

// BUSCAR POR ID
function buscarPorId(req, res) {
    const id = Number(req.params.id);
    const aluno = alunos.find(a => a.id === id);

    if (!aluno) {
        return res.status(404).json({ erro: "Aluno não encontrado!"});
    }

 res.json(aluno);
}