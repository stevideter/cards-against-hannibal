import WhiteCard from '../WhiteCard';
import renderer from 'react-test-renderer';

describe('WhiteCard', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<WhiteCard id="id" text="text" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
