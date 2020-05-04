import Nickname from '../Nickname';
import renderer from 'react-test-renderer';

describe('Nickname', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Nickname />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
