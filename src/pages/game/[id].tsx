import { useRouter } from 'next/router';
import useSWR from 'swr';
import GameBoard from '../../components/GameBoard/GameBoard';
import { useState, useEffect } from 'react';

async function fetcher(url: string): Promise<GameData> {
    return fetch(url).then((r) => r.json());
}

const Game = (): JSX.Element => {
    const [nickname, setNickname] = useState('');
    useEffect(() => {
        const local = localStorage.getItem('nickname');
        if (local) {
            const stored = JSON.parse(local);
            setNickname(stored.nickname);
        }
    });

    const router = useRouter();
    const { id } = router.query;
    const { data, error } = useSWR('/api/getGame', fetcher);
    if (error) {
        return <div>Failed to load</div>;
    }
    if (!data) {
        return <div>loading...</div>;
    }

    const { blackCards, whiteCards } = data;

    return (
        <div>
            <p>Game: {id}</p>
            <p>Player: {nickname}</p>
            <GameBoard whiteCards={whiteCards} blackCards={blackCards} />
        </div>
    );
};

export default Game;
