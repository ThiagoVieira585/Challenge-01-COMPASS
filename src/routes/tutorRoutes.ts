import { Request, Response } from 'express';
import express from 'express';
import { createTutor, getAllTutors } from '../controllers/tutorController';

const router = express.Router();
router.use(express.json())


router.get('/tutor', getAllTutors, (req: Request, res: Response) => {
});

router.post('/tutor', createTutor, (req: Request, res: Response) => {
});

router.put('/tutor/:id', (req: Request, res: Response) => {
});



export default router;
