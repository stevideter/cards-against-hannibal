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
        const whiteCardIds = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '24',
            '25',
            '26',
            '27',
            '28',
            '29',
            '30',
        ];
        const whiteCards = whiteCardIds.map((id) => ({ id }));
        mockGetCards.mockResolvedValue({
            whiteCards,
        });

        const result = await getGame('id');
        expect(result).toBeDefined();
    });
    it('handles an error', async () => {
        mockGetCards.mockRejectedValue(new Error('oops'));

        const result = await getGame('id');

        expect(console.error).toHaveBeenCalled();
        expect(result).toBeUndefined();
    });
});
