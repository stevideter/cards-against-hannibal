import { v4 as uuidv4 } from 'uuid';
import { gameStore } from '../index';

export const addGame = async (gameData: GameData): Promise<Game> => {
    const { blackCards, whiteCards } = gameData;
    const game = {
        id: uuidv4(),
        players: [],
        state: 'new',
        blackCards,
        whiteCards,
    };
    gameStore.push(game);
    return game;
};
