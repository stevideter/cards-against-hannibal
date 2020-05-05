import { AppProps } from 'next/app';
import { useEffect, useRef, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const [nickname, setNickname] = useState('');
    const didMountRef = useRef(false);
    useEffect(() => {
        if (didMountRef.current) {
            localStorage.setItem('nickname', JSON.stringify({ nickname }));
        } else {
            const local = localStorage.getItem('nickname');
            if (local) {
                const stored = JSON.parse(local);
                setNickname(stored.nickname);
            }
            didMountRef.current = true;
        }
    }, [nickname]);
    const appProps = {
        nickname,
        setNickname,
        ...pageProps,
    };
    return <Component {...appProps} />;
}

export default MyApp;
