import { startGame, NOT_ENOUGH_PLAYERS } from '../startGame';

describe('startGame', () => {
    it('accepts at least three players', async () => {
        const players = [
            {
                id: 'one',
                name: 'one',
            },
            {
                id: 'two',
                name: 'two',
            },
            {
                id: 'three',
                name: 'three',
            },
        ];
        expect.assertions(1);
        await expect(startGame({ players })).resolves.toEqual(
            expect.objectContaining({
                id: expect.any(String),
            })
        );
    });
    it('rejects if less than three', async () => {
        const players = [
            {
                id: 'one',
                name: 'one',
            },
            {
                id: 'two',
                name: 'two',
            },
        ];
        expect.assertions(1);
        await expect(startGame({ players })).rejects.toEqual(
            Error(NOT_ENOUGH_PLAYERS)
        );
    });
});
