import React from "react";
import styles from "./menuItem.module.scss";

function MenuItem({ icon, title, active }) {
  return (
    <div className={`${styles.menuContainer} ${active && styles.active}`}>
      <img src={icon} alt="icon" />
      <h3>{title}</h3>
    </div>
  );
}

export default MenuItem;
