import { Request, Response } from "express";
import fs from "fs";

// Função para ler o json
function readTutorData() {
  const rawData = fs.readFileSync("../data/tutor.json", "utf-8");
  return JSON.parse(rawData);
}
// Função para salvar o tutor no json
function saveTutorData(tutors: []) {
  const jsonData = JSON.stringify(tutors, null, 2);
  fs.writeFileSync("../data/tutor.json", jsonData, "utf-8");
}
// Função para retornar de todos os tutores
export const getAllTutors = (req: Request, res: Response) => {
  const tutors = readTutorData();
  res.json(tutors);
};
// Método da criação do tutor GET
export const createTutor = (req: Request, res: Response) => {
  try {
    const newTutor = req.body;
    // Verificar se todos os campos obrigatórios foram fornecidos
    const requiredFields = [
      "name",
      "phone",
      "email",
      "date_of_birth",
      "zip_code",
      "pets",
    ];
    for (const field of requiredFields) {
      if (!newTutor[field]) {
        return res
          .status(400)
          .json({ error: `Campo obrigatório ausente: ${field}` });
      }
    }
    // Lógica para adicionar o novo tutor aos dados existentes
    const tutors = readTutorData();
    tutors.push(newTutor);
    // Salvar os dados atualizados no arquivo JSON
    saveTutorData(tutors);
    return res.status(201).json(newTutor);
  } catch (error) {
    return res.status(500).json({ error: "Erro no servidor" });
  }
};
// Método para criar o pet POST
export const createPet = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const newPet = req.body;
    // Constante para veirificar os se todos os campos do pet vão ser fornecidos, entrando em um try catch
    const requiredFields = [
      "name",
      "species",
      "carry",
      "weight",
      "date_of_birth",
    ];
    for (const field of requiredFields) {
      if (!newPet[field]) {
        return res
          .status(400)
          .json({ error: `Campo obrigatório ausente: ${field}` });
      }
    }
    const tutors = readTutorData();
    const tutor = tutors.find((tutor: any) => tutor.id === parseInt(id));
    if (!tutor) {
      return res.status(404).json({ error: "Tutor não encontrado" });
    }
    const petId = tutor.pets.length + 1;
    newPet.id = petId;
    tutor.pets.push(newPet);
    saveTutorData(tutors);
    return res.status(201).json(newPet);
  } catch (error) {
    return res.status(500).json({ error: "Erro no servidor" });
  }
};
// Método para atualizar o tutor PUT
export const updateTutor = (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedTutor = req.body;
  const tutors = readTutorData();
  const tutor = tutors.find((tutor: any) => tutor.id === parseInt(id));
  if (!tutor) {
    return res.status(404).json({ error: "Tutor não encontrado" });
  }
  // Atualiza as propriedades do tutor com base nos dados fornecidos
  Object.assign(tutor, updatedTutor);
  saveTutorData(tutors);
  return res.json(tutor);
};
// Método de atualizar o pet PUT
export const updatePet = (req: Request, res: Response) => {
  const { petId, tutorId } = req.params;
  const updatedPet = req.body;
  const tutors = readTutorData();
  const tutor = tutors.find((tutor: any) => tutor.id === parseInt(tutorId));
  if (!tutor) {
    return res.status(404).json({ error: "Tutor não encontrado" });
  }
  const pet = tutor.pets.find((pet: any) => pet.id === parseInt(petId));
  if (!pet) {
    return res.status(404).json({ error: "Pet não encontrado" });
  }
  Object.assign(pet, updatedPet);
  saveTutorData(tutors);
  return res.json(pet);
};
//Método de apagar o tutor DELETE
export const deleteTutor = (req: Request, res: Response) => {
  const { id } = req.params;
  const tutors = readTutorData();
  const index = tutors.findIndex((tutor: any) => tutor.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: "Tutor não encontrado" });
  }
  // Remova o tutor do array de tutores
  const deletedTutor = tutors.splice(index, 1)[0];
  saveTutorData(tutors);
  return res.json(deletedTutor);
};
// Método  de apagar o pet do tutor DELETE
export const deletePet = (req: Request, res: Response) => {
  const { tutorId, petId } = req.params;
  const tutors = readTutorData();
  const tutor = tutors.find((tutor: any) => tutor.id === parseInt(tutorId));
  if (!tutor) {
    return res.status(404).json({ error: "Tutor não encontrado" });
  }
  const petIndex = tutor.pets.findIndex(
    (pet: any) => pet.id === parseInt(petId)
  );
  if (petIndex === -1) {
    return res.status(404).json({ error: "Pet não encontrado" });
  }
  const deletedPet = tutor.pets.splice(petIndex, 1)[0];
  saveTutorData(tutors);
  return res.json(deletedPet);
};
