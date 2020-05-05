import { gameStore } from '..';

export const getPlayerHand = async (
    playerId: string,
    gameId: string
): Promise<Card[] | undefined> => {
    const game = gameStore.find((game) => game.id === gameId);
    const player = game?.players.find((player) => player.id === playerId);
    return player?.hand;
};
