import { useRouter } from 'next/router';
import useSWR from 'swr';
import GameBoard from '../../components/GameBoard/GameBoard';
import { NextPage } from 'next';

async function fetcher(url: string): Promise<Game> {
    return fetch(url).then((r) => r.json());
}
interface GameProps {
    nickname: string;
}
const Game: NextPage<GameProps> = (props: GameProps) => {
    const { nickname } = props;

    const router = useRouter();
    const { id } = router.query;
    const { data, error } = useSWR('/api/getGame', fetcher);
    if (error) {
        return <div>Failed to load</div>;
    }
    if (!data) {
        return <div>loading...</div>;
    }

    const { currentRound, players } = data;
    const playerList = players.map((player) => (
        <div key={player.id}>{player.name}</div>
    ));

    return (
        <div>
            <p>Game: {id}</p>
            <p>Player: {nickname}</p>
            <div>Players</div>
            <div>{playerList}</div>
            {currentRound && (
                <GameBoard
                    whiteCards={players[0].hand || []}
                    currentRound={currentRound}
                />
            )}
        </div>
    );
};

export default Game;
