jest.mock('../../../respositories/games/index');

import { getHand } from '../getHand';
import { getPlayerHand } from '../../../respositories/games/index';

const mockGetPlayerHand = getPlayerHand as jest.Mock;

describe('getHand', () => {
    it('returns the player`s white cards', async () => {
        const playerId = 'playerid';
        const gameId = 'gameid';
        const mockHand = [{ id: 'card1', text: 'text' }];
        mockGetPlayerHand.mockResolvedValue(mockHand);

        const result = await getHand({ gameId, playerId });

        expect(result).toEqual(mockHand);
    });
    it('throws an error if not found', async () => {
        const playerId = 'playerid';
        const gameId = 'gameid';
        mockGetPlayerHand.mockResolvedValue(undefined);

        await expect(getHand({ gameId, playerId })).rejects.toThrow();
    });
});
