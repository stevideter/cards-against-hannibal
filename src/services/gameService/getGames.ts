import { listGames } from '../../respositories/games';

export const getGames = async (): Promise<string[]> => {
    return await listGames();
};
