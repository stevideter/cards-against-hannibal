jest.mock('../../../respositories/games');
import { listGames } from '../../../respositories/games';
import { getGames } from '../getGames';

const mockListGames = listGames as jest.Mock;

describe('getGames', () => {
    it('gets the list of games', async () => {
        mockListGames.mockResolvedValue(['one', 'two']);

        await getGames();

        expect(mockListGames).toHaveBeenCalled();
    });
});
