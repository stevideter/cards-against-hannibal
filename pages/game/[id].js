import { useRouter } from 'next/router';
import GameBoard from '../../components/GameBoard/GameBoard';
import fetch from 'isomorphic-unfetch';

const Game = props => {
  const router = useRouter();
  const { id } = router.query;

  return <div>
      <p>Game: {id}</p>
      <GameBoard whiteCards={props.whiteCards} blackCards={props.blackCards}/>
      </div>
}
const setId = 'JP8FV';
const cardcastUrl = `https://api.cardcastgame.com/v1/decks/${setId}/cards`;

Game.getInitialProps = async function() {
  const res = await fetch(cardcastUrl);
  const data = await res.json();

  const blackCards = data.calls.map((card) => {
    const text = card.text.join('____');
    return { text };
  });
  const whiteCards = data.responses.map((card) => {
    const text = card.text.join('');
    return { text };
  });
  return {
    blackCards,
    whiteCards
  };
};

export default Game