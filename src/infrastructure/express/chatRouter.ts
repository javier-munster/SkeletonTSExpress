import express, { type Request, type Response } from 'express';

const router = express.Router();

router.post('/chat', async (req: Request, res: Response): Promise<Response> => {
    return res.sendStatus(501);
});

export default router;
