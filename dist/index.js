"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const tutorRoutes_1 = __importDefault(require("./src/routes/tutorRoutes"));
const app = express();
const port = parseInt(process.env.PORT) || 3000;
//Todas as rotas
app.use(tutorRoutes_1.default);
//Servidor
app.listen(port, () => {
    console.log("Servidor iniciado na porta ${port}");
});
