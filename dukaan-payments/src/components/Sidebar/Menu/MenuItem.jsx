import React from "react";
import styles from "./menuItem.module.scss";

function MenuItem({ icon, title }) {
  return (
    <div className={styles.menuContainer}>
      <img src={icon} alt="icon" />
      <h3>{title}</h3>
    </div>
  );
}

export default MenuItem;
