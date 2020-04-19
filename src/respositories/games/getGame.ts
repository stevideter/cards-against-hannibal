import { gameStore } from '../index';

export const getGame = async (gameId: string): Promise<Game | undefined> => {
    return gameStore.find((game) => game.id === gameId);
};
