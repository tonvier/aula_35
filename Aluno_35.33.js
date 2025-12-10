// scr/routes/alunosRoutes.js

const express = require("express");
const controller = require("../controllers/alunosController");

// Cria o roteador
const router = express.Router();

// Endpoints
router.get("/", controller.listar);
router.get("/:id", controller.buscarPorId);
router.post("/", controller.criar);
router.put("/:id", controller.atualizar);
router.delete("/:id", controller.excluir);

MediaSourceHandle.exports = router;