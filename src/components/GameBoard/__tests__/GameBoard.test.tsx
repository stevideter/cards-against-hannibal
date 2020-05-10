jest.mock('../../BlackCard/BlackCard', () => 'BlackCard');
jest.mock('../../WhiteCard/WhiteCard', () => 'WhiteCard');

import GameBoard from '../GameBoard';
import renderer from 'react-test-renderer';

describe('Game', () => {
    it('renders', () => {
        const whiteCards: Card[] = Array(10)
            .fill(0)
            .reduce((arr) => {
                arr.push(arr.length);
                return arr;
            }, [])
            .map((num: unknown) => ({ id: num, text: 'text' }));
        const currentRound: Round = {
            count: 1,
            blackCard: { id: 'id', text: 'text', blanks: 1 },
            whiteCards: [],
        };
        const tree = renderer
            .create(
                <GameBoard
                    whiteCards={whiteCards}
                    currentRound={currentRound}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
