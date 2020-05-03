import { useEffect, useState } from 'react';
import Link from 'next/link';

const About = (): JSX.Element => {
    const [nickname, setNickname] = useState('');
    useEffect(() => {
        const local = localStorage.getItem('nickname');
        if (local) {
            const stored = JSON.parse(local);
            setNickname(stored.nickname);
        }
    });
    return (
        <div className="container">
            <p>FOR FUCK SAKE</p>
            <p>nickname: {nickname}</p>
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
    );
};

export default About;
