import React from "react";
import styles from "./creditsBox.module.scss";
import walletIcon from "../../../Assets/wallet.svg";

const CreditsBox = () => {
  return (
    <div className={styles.CreditsBox}>
      <div>
        <img src={walletIcon} alt="wallet" />
      </div>
      <div>
        <h4>Available credits</h4>
        <p>222.10</p>
      </div>
    </div>
  );
};

export default CreditsBox;
