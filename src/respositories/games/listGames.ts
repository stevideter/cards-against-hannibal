import { gameStore } from '../index';

export const listGames = async (): Promise<string[]> => {
    return gameStore.map((game) => game.id);
};
