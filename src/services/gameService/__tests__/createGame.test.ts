jest.mock('../../cardcastService/getCards');
jest.mock('../../../respositories/games');

import mockConsole from 'jest-mock-console';
import { getCards } from '../../cardcastService/getCards';
import { createGame } from '../createGame';
import { addGame } from '../../../respositories/games';

const mockGetCards = getCards as jest.Mock;
const mockAddGame = addGame as jest.Mock;

describe('createGame', () => {
    beforeEach(() => {
        mockConsole();
    });
    it('gets the game', async () => {
        mockGetCards.mockResolvedValue({});
        mockAddGame.mockResolvedValue({
            id: 'newgame',
        });
        const result = await createGame();

        expect(result).toEqual({
            id: 'newgame',
        });
        expect(mockAddGame).toHaveBeenCalled();
    });
    it('handles an error from getCards', async () => {
        mockGetCards.mockRejectedValue(new Error('oops'));

        const result = await createGame();

        expect(console.error).toHaveBeenCalled();
        expect(result).toBeUndefined();
    });
    it('handles and error from addGame', async () => {
        mockGetCards.mockResolvedValue({});
        mockAddGame.mockRejectedValue(new Error());
        const result = await createGame();

        expect(console.error).toHaveBeenCalled();
        expect(result).toBeUndefined();
    });
});
