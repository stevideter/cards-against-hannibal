import styles from "./GameBoard.module.css";
import BlackCard from "../BlackCard/BlackCard";
import WhiteCard from "../WhiteCard/WhiteCard";

const GameBoard = (props) => {
  let whiteCards = [];
  let fullDeck = [ ...props.whiteCards ];
  let cardCount = props.whiteCards.length;
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * cardCount);
    const card = fullDeck.splice(randomIndex, 1)[0];
    whiteCards.push(<WhiteCard text={card.text} key={i} id={card.id} />);
    cardCount--;
  }
  const randomIndex = Math.floor(Math.random() * props.blackCards.length);

  const blackCard = <BlackCard text={props.blackCards[randomIndex].text} />
  return (
    <div className={styles.gameboard}>
      <div className={styles.blackcard}>
        {blackCard }
      </div>
      <div className={styles.whitecards}>
        {whiteCards}
      </div>
    </div>
  );
};

export default GameBoard;
