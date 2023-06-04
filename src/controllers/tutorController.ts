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
export const createPet = (req: Request, res: Response) => {
  const { id } = req.params;
  const newPet = req.body;

  const tutors = readTutorData();
  const tutor = tutors.find((tutor: any) => tutor.id === parseInt(id));

  if (!tutor) {
    return res.status(404).json({ error: 'Tutor not found' });
  }

  const petId = tutor.pets.length + 1;
  newPet.id = petId;

  tutor.pets.push(newPet);
  saveTutorData(tutors);

  return res.status(201).json(newPet);
};


export const updateTutor = (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedTutor = req.body;

  const tutors = readTutorData();
  const tutor = tutors.find((tutor: any) => tutor.id === parseInt(id));

  if (!tutor) {
    return res.status(404).json({ error: 'Tutor not found' });
  }
  // Atualize as propriedades do tutor com base nos dados fornecidos
  Object.assign(tutor, updatedTutor);
  saveTutorData(tutors);

  return res.json(tutor);
};
export const updatePet = (req: Request, res: Response) => {
  const { petId, tutorId } = req.params;
  const updatedPet = req.body;

  const tutors = readTutorData();
  const tutor = tutors.find((tutor: any) => tutor.id === parseInt(tutorId));

  if (!tutor) {
    return res.status(404).json({ error: 'Tutor not found' });
  }

  const pet = tutor.pets.find((pet: any) => pet.id === parseInt(petId));

  if (!pet) {
    return res.status(404).json({ error: 'Pet not found' });
  }

  // Atualize as propriedades do pet com base nos dados fornecidos
  Object.assign(pet, updatedPet);
  saveTutorData(tutors);

  return res.json(pet);
};
export const deleteTutor = (req: Request, res: Response) => {
  const { id } = req.params;

  const tutors = readTutorData();
  const index = tutors.findIndex((tutor: any) => tutor.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'Tutor not found' });
  }

  // Remova o tutor do array de tutores
  const deletedTutor = tutors.splice(index, 1)[0];
  saveTutorData(tutors);

  return res.json(deletedTutor);
};
export const deletePet = (req: Request, res: Response) => {
  const { tutorId, petId } = req.params;

  const tutors = readTutorData();
  const tutor = tutors.find((tutor: any) => tutor.id === parseInt(tutorId));

  if (!tutor) {
    return res.status(404).json({ error: 'Tutor not found' });
  }

  const petIndex = tutor.pets.findIndex((pet: any) => pet.id === parseInt(petId));

  if (petIndex === -1) {
    return res.status(404).json({ error: 'Pet not found' });
  }

  const deletedPet = tutor.pets.splice(petIndex, 1)[0];
  saveTutorData(tutors);

  return res.json(deletedPet);
};










