import { NextPage } from 'next';
import { AppProps } from 'next/app';
import renderer from 'react-test-renderer';
import MyApp from '../_app';

describe('MyApp', () => {
    const TestPage: NextPage = () => {
        return <div />;
    };
    it('renders correctly', () => {
        const appProps: AppProps = {
            pageProps: {},
            Component: TestPage,
            router: {} as any,
        };
        const tree = renderer.create(<MyApp {...appProps} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
