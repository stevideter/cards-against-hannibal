import BlackCard from '../BlackCard';
import renderer from 'react-test-renderer';

describe('BlackCard', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<BlackCard text="text" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
