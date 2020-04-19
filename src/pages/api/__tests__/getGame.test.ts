jest.mock('../../../services/gameService');
import { Request, Response } from 'express';
import mockConsole from 'jest-mock-console';
import { getGame as getGameFromService } from '../../../services/gameService';
import getGame from '../getGame';

const mockGetGame = getGameFromService as jest.Mock;
describe('getGame', () => {
    const req = {} as Request;
    const res = {} as Response;
    beforeEach(() => {
        mockConsole();
        res.status = jest.fn(() => {
            return res;
        });
        res.json = jest.fn(() => {
            return res;
        });
        res.sendStatus = jest.fn();
    });

    it('calls the backend', async () => {
        const game = {};
        mockGetGame.mockResolvedValue(game);

        await getGame(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(game);
    });
    it('handles error', async () => {
        mockGetGame.mockRejectedValue(new Error('oops'));

        await getGame(req, res);

        expect(res.sendStatus).toHaveBeenCalledWith(500);
    });
});
