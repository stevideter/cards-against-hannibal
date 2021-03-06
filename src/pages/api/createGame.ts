import { Request, Response } from 'express';
import { createGame } from '../../services/gameService';

export default async (_req: Request, res: Response): Promise<void> => {
    try {
        const game = await createGame();
        res.status(200).json(game);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};
