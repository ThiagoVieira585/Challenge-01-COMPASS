"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTutor = exports.getAllTutors = void 0;
const fs_1 = __importDefault(require("fs"));
function readTutorData() {
    const rawData = fs_1.default.readFileSync('../data/tutor.json', 'utf-8');
    return JSON.parse(rawData);
}
// Função para salvar o tutor
function saveTutorData(tutors) {
    const jsonData = JSON.stringify(tutors, null, 2);
    fs_1.default.writeFileSync('../data/tutor.json', jsonData, 'utf-8');
}
// Função para retornar todos os tutores
const getAllTutors = (req, res) => {
    const tutors = readTutorData();
    res.json(tutors);
};
exports.getAllTutors = getAllTutors;
const createTutor = (req, res) => {
    const newTutor = req.body;
    // Lógica para adicionar o novo tutor aos dados existentes
    const tutors = readTutorData();
    tutors.push(newTutor);
    // Salvar os dados atualizados no arquivo JSON
    saveTutorData(tutors);
    return res.status(201).json(newTutor);
};
exports.createTutor = createTutor;
