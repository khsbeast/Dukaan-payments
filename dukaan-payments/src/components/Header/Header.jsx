import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <h2>Payments</h2>
        <span>How it works</span>
      </div>
    </div>
  );
};

export default Header;
