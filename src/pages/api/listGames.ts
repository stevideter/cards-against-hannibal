import { Request, Response } from 'express';
import { getGames } from '../../services/gameService';

export default async (_req: Request, res: Response): Promise<void> => {
    try {
        const gameIds = await getGames();
        res.status(200).json(gameIds);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};
