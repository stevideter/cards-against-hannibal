jest.mock('../../cardcastService/getCards');

import mockConsole from 'jest-mock-console';
import { getCards } from '../../cardcastService/getCards';
import { getGame } from '../getGame';

const mockGetCards = getCards as jest.Mock;

describe('getGame', () => {
    beforeEach(() => {
        mockConsole();
    });
    it('gets the game', async () => {
        mockGetCards.mockResolvedValue({});

        const result = await getGame();
        expect(result).toBeDefined();
    });
    it('handles an error', async () => {
        mockGetCards.mockRejectedValue(new Error('oops'));

        const result = await getGame();

        expect(console.error).toHaveBeenCalled();
        expect(result).toBeUndefined();
    });
});
