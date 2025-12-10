// src/server.js
// Servidor inicial usando Express.js

const express = require("express");

// Cria a aplicação
const app = express();

// Habilita leitura de JSON no corpo das requisições
app.use(express.json());

// Rota simples de teste
app.get("/",(req, res) => {
    res.json({ mensagem: "API com Express Funcionando!"
});
});

// Porta do Servidor
cont PORTA=3000;

app.listen(PORTA() => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});

const alunsRoutes = require("./routes/alunosRoutes");
app.use("/alunos", alunosRoutes);

// src/server.js

const express = require("express");
const app = express();

// Permite JSON
app.use(express.json());

// Rotas de alunos
const alunosRoutes = require("./routes/alunosRoutes");
app.use("/alunos", alunosRoutes);

app.get("/", (req, res) => {
    res.json({ mensagem: API Express Funcionando!"});
});

app.listen(3000, () => {
    console.log("Servidor Rodando em http://localhost:3000");
});