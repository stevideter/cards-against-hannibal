jest.mock('next/router');
jest.mock('swr');
jest.mock('../../../components/GameBoard/GameBoard', () => 'GameBoard');

import Game from '../[id]';
import renderer from 'react-test-renderer';
import { useRouter } from 'next/router';
import useSWR from 'swr';

describe('Game', () => {
    it('renders loading on stale', () => {
        (useRouter as jest.Mock<any>).mockReturnValue({
            query: {
                id: 'id',
            },
        });
        (useSWR as jest.Mock<any>).mockReturnValue({});
        const tree = renderer.create(<Game nickname="nick" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders game on data', () => {
        (useRouter as jest.Mock<any>).mockReturnValue({
            query: {
                id: 'id',
            },
        });
        const data = {
            players: [
                {
                    hand: [],
                },
            ],
            blackCards: [],
            whiteCards: [],
        };
        (useSWR as jest.Mock<any>).mockReturnValue({
            data,
        });
        const tree = renderer.create(<Game nickname="nick" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders error on swr error', () => {
        (useRouter as jest.Mock<any>).mockReturnValue({
            query: {
                id: 'id',
            },
        });
        const error = {
            message: 'error',
        };
        (useSWR as jest.Mock<any>).mockReturnValue({
            error,
        });
        const tree = renderer.create(<Game nickname="nick" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
