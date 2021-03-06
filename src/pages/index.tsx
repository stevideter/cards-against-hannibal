import Head from 'next/head';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import useSWR from 'swr';
import Nickname from '../components/Nickname/Nickname';
import { NextPage } from 'next';

async function fetcher(url: string): Promise<string[]> {
    return fetch(url).then((r) => r.json());
}

interface HomeProps {
    nickname: string;
    setNickname: Dispatch<SetStateAction<string>>;
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
    const { nickname, setNickname } = props;

    const { data, error } = useSWR('/api/listGames', fetcher);
    if (error) {
        return <div>Failed to load</div>;
    }
    if (!data) {
        return <div>loading...</div>;
    }
    // const gameLinks = data.map((gameId) => <div key={gameId}><a href="/game/{gameId}">gameId</a></div>);
    const gameLinks = data.map((gameId) => (
        <Link key={gameId} href="/game/[gameId]" as={`/game/${gameId}`}>
            <a>Game {gameId}</a>
        </Link>
    ));
    return (
        <div className="container">
            <Head>
                <title>Cards Against Hannibal</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="title">Welcome to Cards Against Hannibal</h1>

                <p className="description">
                    A Cards Against Humanity clone in the spirit of Pretend
                    You&apos;re Xyzzy
                </p>
                <p>Hello {nickname}</p>
                <Nickname nickname={nickname} setNickname={setNickname} />
                <Link href="/about">
                    <a>About</a>
                </Link>
                <div className="grid">
                    <a href="/game/1" className="card">
                        <h3>Start a new game &rarr;</h3>
                        <p>Start a game</p>
                    </a>
                </div>
                <div className="grid">{gameLinks}</div>
            </main>

            <style jsx>{`
                .container {
                    min-height: 100vh;
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                a {
                    color: inherit;
                    text-decoration: none;
                }

                .title a {
                    color: #0070f3;
                    text-decoration: none;
                }

                .title a:hover,
                .title a:focus,
                .title a:active {
                    text-decoration: underline;
                }

                .title {
                    margin: 0;
                    line-height: 1.15;
                    font-size: 4rem;
                }

                .title,
                .description {
                    text-align: center;
                }

                .description {
                    line-height: 1.5;
                    font-size: 1.5rem;
                }

                code {
                    background: #fafafa;
                    border-radius: 5px;
                    padding: 0.75rem;
                    font-size: 1.1rem;
                    font-family: Monaco, Lucida Console, Liberation Mono,
                        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New,
                        monospace;
                }

                .grid {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;

                    max-width: 800px;
                    margin-top: 3rem;
                }

                .card {
                    margin: 1rem;
                    flex-basis: 45%;
                    padding: 1.5rem;
                    text-align: left;
                    color: inherit;
                    text-decoration: none;
                    border: 1px solid #eaeaea;
                    border-radius: 10px;
                    transition: color 0.15s ease, border-color 0.15s ease;
                }

                .card:hover,
                .card:focus,
                .card:active {
                    color: #0070f3;
                    border-color: #0070f3;
                }

                .card h3 {
                    margin: 0 0 1rem 0;
                    font-size: 1.5rem;
                }

                .card p {
                    margin: 0;
                    font-size: 1.25rem;
                    line-height: 1.5;
                }

                @media (max-width: 600px) {
                    .grid {
                        width: 100%;
                        flex-direction: column;
                    }
                }
            `}</style>

            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                        Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                        Helvetica Neue, sans-serif;
                }

                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    );
};

export default Home;
