import styles from "./GameBoard.module.css";
import BlackCard from "../BlackCard/BlackCard";
import WhiteCard from "../WhiteCard/WhiteCard";

const GameBoard = () => (
  <div className={styles.gameboard}>
    <div className={styles.blackcard}>
    <BlackCard />
    </div>
    <div className={styles.whitecards}>
      <WhiteCard text="design" />
      <WhiteCard text="murder" />
      <WhiteCard text="fish jello" />

    </div>
  </div>
);

export default GameBoard;
