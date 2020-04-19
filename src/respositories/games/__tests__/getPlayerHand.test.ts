import { getPlayerHand } from '../getPlayerHand';
import { gameStore } from '../../index';

describe('getPlayerHand', () => {
    const gameId = 'gameId';
    const playerId = 'playerId';
    const hand = [
        {
            id: 'whitecard1',
            text: 'hello',
        },
    ];
    const game: Game = {
        id: gameId,
        players: [
            {
                id: playerId,
                name: 'Hannibal',
                hand,
            },
        ],
        state: 'somestate',
    };
    beforeEach(() => {
        gameStore.push(game);
    });
    test('it gets the hand', async () => {
        const result = await getPlayerHand(playerId, gameId);
        expect(result).toEqual(hand);
    });
    test('it returns undefined if player not found', async () => {
        const result = await getPlayerHand('unknown', gameId);
        expect(result).toBeUndefined();
    });
    test('it returns undefined if game not found', async () => {
        const result = await getPlayerHand('unknown', 'unknown');
        expect(result).toBeUndefined();
    });
});
