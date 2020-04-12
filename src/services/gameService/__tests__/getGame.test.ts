import { getGame } from '../getGame';

describe('getGame', () => {
    it('gets the game', async () => {
        const result = await getGame();
        expect(result).toBeDefined();
    });
});
