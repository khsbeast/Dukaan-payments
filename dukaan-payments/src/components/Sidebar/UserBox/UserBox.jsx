import React from "react";
import styles from "./userBox.module.scss";
import userIcon from "../../../Assets/userIcon.png";
import arrowDown from "../../../Assets/arrow-down.svg";

function UserBox() {
  return (
    <div className={styles.box}>
      <div className={styles.nameBox}>
        <div className={styles.avatar}>
          <img src={userIcon} alt="user" />
        </div>
        <div className={styles.name}>
          <div>Nishyan</div>
          <div>
            <a href="www.google.com"> Visit Store</a>
          </div>
        </div>
      </div>
      <div className={styles.arrowContainer}>
        {" "}
        <img src={arrowDown} alt="arrow" className={styles.arrowDown} />
      </div>
    </div>
  );
}

export default UserBox;
