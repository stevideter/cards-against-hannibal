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
            '31',
            '32',
            '33',
            '34',
            '35',
            '36',
            '37',
            '38',
            '39',
            '40',
        ];
        const whiteCards = whiteCardIds.map((id) => ({ id }));
        const blackCardIds = [
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
        const blackCards = blackCardIds.map((id) => ({ id }));

        mockGetCards.mockResolvedValue({
            blackCards,
            whiteCards,
        });

        const result = await getGame('id');
        expect(result).toBeDefined();
        const { players } = result;
        expect(players).toBeDefined();
        players.forEach((player) => {
            expect(player.hand).toBeDefined();
            expect(player.hand?.length).toEqual(10);
        });
    });
    it('throws an error if error from service', async () => {
        mockGetCards.mockRejectedValue(new Error('oops'));
        await expect(getGame('id')).rejects.toThrow();
    });
    it('throws an error if no game from service', async () => {
        mockGetCards.mockResolvedValue(undefined);
        await expect(getGame('id')).rejects.toThrow();
    });
});
