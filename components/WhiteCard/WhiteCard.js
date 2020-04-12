import styles from "./WhiteCard.module.css";

const WhiteCard = (props) => (
  <div className={styles.card} id={props.id}>
    <p>{props.text}</p>
  </div>
);

export default WhiteCard;
