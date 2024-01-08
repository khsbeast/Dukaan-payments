import React from "react";
import styles from "./card.module.scss";

const Card = ({ heading, number }) => {
  return (
    <div className={styles.card}>
      <div>
        <p>{heading}</p>
        <h3>{number}</h3>
      </div>
    </div>
  );
};

export default Card;
