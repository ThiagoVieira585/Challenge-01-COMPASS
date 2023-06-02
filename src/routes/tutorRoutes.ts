import { Request, Response } from 'express';
import express from 'express';

const router = express.Router();

router.get('/tutor', (req: Request, res: Response) => {
  res.json({ message: 'GET /tutor' });
});

router.post('/tutor', (req: Request, res: Response) => {
  res.json({ message: 'POST /tutor' });
});

router.put('/tutor/:id', (req: Request, res: Response) => {
  res.json({ message: 'PUT /tutor/:id' });
});

export default router;
