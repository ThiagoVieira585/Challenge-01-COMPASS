import { Request, Response } from 'express';
import fs from 'fs';

function readTutorData() {
  const rawData = fs.readFileSync('../data/tutor.json', 'utf-8');
  return JSON.parse(rawData);
}

// Função para retornar todos os tutores
export const getAllTutors = (req: Request, res: Response) => {
  const tutors = readTutorData();
  res.json(tutors);
};
