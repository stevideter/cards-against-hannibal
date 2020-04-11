import { useRouter } from 'next/router';
import GameBoard from '../../components/GameBoard/GameBoard';

const Game = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>
      <p>Game: {id}</p>
      <GameBoard />
      </div>
}

export default Game