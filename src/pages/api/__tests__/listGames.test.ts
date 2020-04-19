jest.mock('../../../services/gameService');
import { Request, Response } from 'express';
import mockConsole from 'jest-mock-console';
import { getGames } from '../../../services/gameService';
import listGames from '../listGames';

const mockGetGames = getGames as jest.Mock;
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
        mockGetGames.mockResolvedValue(game);

        await listGames(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(game);
        expect(mockGetGames).toHaveBeenCalled();
    });
    it('handles error', async () => {
        mockGetGames.mockRejectedValue(new Error('oops'));

        await listGames(req, res);

        expect(res.sendStatus).toHaveBeenCalledWith(500);
    });
});
