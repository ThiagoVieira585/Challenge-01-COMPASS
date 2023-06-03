"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTutors = void 0;
const fs_1 = __importDefault(require("fs"));
function readTutorData() {
    const rawData = fs_1.default.readFileSync('../data/tutor.json', 'utf-8');
    return JSON.parse(rawData);
}
// Função para retornar todos os tutores
const getAllTutors = (req, res) => {
    const tutors = readTutorData();
    res.json(tutors);
};
exports.getAllTutors = getAllTutors;
