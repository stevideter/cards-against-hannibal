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
            .map(() => ({ id: 'id', text: 'text' }));

        const blackCards: Card[] = Array(10)
            .fill(0)
            .reduce((arr) => {
                arr.push(arr.length);
                return arr;
            }, [])
            .map(() => ({ id: 'id', text: 'text' }));

        const tree = renderer
            .create(
                <GameBoard whiteCards={whiteCards} blackCards={blackCards} />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
