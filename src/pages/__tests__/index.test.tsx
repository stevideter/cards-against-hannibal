jest.mock('swr');
import renderer from 'react-test-renderer';
import useSWR from 'swr';
import Home from '..';

const mockUseSWR = useSWR as jest.Mock;

describe('Home', () => {
    it('renders correctly', () => {
        mockUseSWR.mockReturnValue({
            data: ['one', 'two'],
        });

        const tree = renderer.create(<Home />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
