import { getGame } from '../getGame';
import { gameStore } from '../../index';

describe('getGame', () => {
    const gameId = 'gameid';
    beforeAll(() => {
        gameStore.push({
            id: gameId,
            players: [],
            state: 'created',
        });
    });
    it('gets the game', async () => {
        const result = await getGame(gameId);
        expect(result).toEqual(
            expect.objectContaining({
                id: gameId,
            })
        );
    });
    it('returns undefined if no game', async () => {
        const result = await getGame('notthere');
        expect(result).toBeUndefined();
    });
});
