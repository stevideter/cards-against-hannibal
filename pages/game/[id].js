import { useRouter } from "next/router";
import GameBoard from "../../components/GameBoard/GameBoard";
import useSWR from "swr";

async function fetcher(url) {
  return fetch(url).then((r) => r.json());
}
const Game = () => {
  const { data, error } = useSWR("/api/createGame", fetcher);
  if (error) {
    return <div>Failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  const { blackCards, whiteCards } = data;
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p>Game: {id}</p>
      <GameBoard whiteCards={whiteCards} blackCards={blackCards} />
    </div>
  );
};


export default Game;
