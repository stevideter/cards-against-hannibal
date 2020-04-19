import { listGames } from '../listGames';
import { gameStore } from '../../index';

describe('listGames', () => {
    beforeAll(() => {
        gameStore.push(
            {
                id: 'one',
            } as Game,
            {
                id: 'two',
            } as Game
        );
    });
    it('lists the games', async () => {
        const gameList = await listGames();
        expect(gameList).toContain('one');
        expect(gameList).toContain('two');
    });
});
