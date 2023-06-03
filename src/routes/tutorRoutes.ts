import { Request, Response } from 'express';
import express from 'express';
import { getAllTutors } from '../controllers/tutorController';

const router = express.Router();

router.get('/tutor', getAllTutors, (req: Request, res: Response) => {
  const tutors = getAllTutors;
  res.json(tutors);

});

router.post('/tutor', (req: Request, res: Response) => {
  
  res.json({ message: 'POST /tutor' });
});

router.put('/tutor/:id', (req: Request, res: Response) => {
  res.json({ message: 'PUT /tutor/:id' });
});

export default router;
