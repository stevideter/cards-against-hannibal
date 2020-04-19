import { addGame } from '../addGame';
import { gameStore } from '../../index';

describe('addGame', () => {
    it('adds the game', async () => {
        const gameCount = gameStore.length;
        const gameRequest = {
            blackCards: [],
            whiteCards: [],
        };
        const result = await addGame(gameRequest);
        expect(result).toEqual(
            expect.objectContaining({
                id: expect.any(String),
            })
        );
        expect(gameStore.length).toBeGreaterThan(gameCount);
    });
});
