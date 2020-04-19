import { getCards } from '../cardcastService/getCards';
const setId = 'JP8FV';
import { addGame } from '../../respositories/games';

export const createGame = async (): Promise<Game | undefined> => {
    try {
        const gameData = await getCards(setId);
        if (gameData) {
            const game = await addGame(gameData);
            return game;
        }
    } catch (error) {
        console.error('unable to get game', error);
    }
};
