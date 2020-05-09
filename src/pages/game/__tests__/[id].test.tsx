jest.mock('next/router');
jest.mock('swr');
jest.mock('../../../components/GameBoard/GameBoard', () => 'GameBoard');

import Game from '../[id]';
import renderer from 'react-test-renderer';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const mockUseRouter = useRouter as jest.Mock;
const mockUseSWR = useSWR as jest.Mock;

describe('Game', () => {
    it('renders loading on stale', () => {
        mockUseRouter.mockReturnValue({
            query: {
                id: 'id',
            },
        });
        mockUseSWR.mockReturnValue({});
        const tree = renderer.create(<Game nickname="nick" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders game on data', () => {
        mockUseRouter.mockReturnValue({
            query: {
                id: 'id',
            },
        });
        const data = {
            players: [
                {
                    id: 'one',
                    name: 'name',
                    hand: [],
                },
            ],
            blackCards: [],
            whiteCards: [],
            currentRound: {
                count: 1,
                blackCard: { id: 'id', text: 'text' },
            },
        };
        mockUseSWR.mockReturnValue({
            data,
        });
        const tree = renderer.create(<Game nickname="nick" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders error on swr error', () => {
        mockUseRouter.mockReturnValue({
            query: {
                id: 'id',
            },
        });
        const error = {
            message: 'error',
        };
        mockUseSWR.mockReturnValue({
            error,
        });
        const tree = renderer.create(<Game nickname="nick" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
