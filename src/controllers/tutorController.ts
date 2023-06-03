import { Request, Response } from 'express';
import fs from 'fs';

function readTutorData() {
  const rawData = fs.readFileSync('../data/tutor.json', 'utf-8');
  return JSON.parse(rawData);
}
// Função para salvar o tutor
function saveTutorData(tutors: []) {
    const jsonData = JSON.stringify(tutors, null, 2);
    fs.writeFileSync('../data/tutor.json', jsonData, 'utf-8');
  }
  

// Função para retornar todos os tutores
export const getAllTutors = (req: Request, res: Response) => {
  const tutors = readTutorData();
  res.json(tutors);
};
export const createTutor = (req: Request, res: Response) =>{
    const newTutor = req.body;
    // Lógica para adicionar o novo tutor aos dados existentes
    const tutors = readTutorData();
    tutors.push(newTutor);
    // Salvar os dados atualizados no arquivo JSON
    saveTutorData(tutors);
    return res.status(201).json(newTutor);
};





