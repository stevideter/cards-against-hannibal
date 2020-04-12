import styles from "./BlackCard.module.css";

const BlackCard = (props) => (
  <div className={styles.card}>
    <p>{props.text}</p>
  </div>
);

export default BlackCard;
