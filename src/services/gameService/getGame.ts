import { getCards } from '../cardcastService/getCards';
const setId = 'JP8FV';

export const getGame = async (): Promise<GameData | undefined> => {
    try {
        const game = await getCards(setId);
        return game;
    } catch (error) {
        console.error('unable to get game', error);
    }
};
