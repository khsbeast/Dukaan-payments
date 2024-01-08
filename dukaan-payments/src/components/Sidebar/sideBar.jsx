import React from "react";
import styles from "./sideBar.module.scss";
import UserBox from "./UserBox/UserBox";

function SideBar() {
  return (
    <div className={styles.sideBar}>
      <UserBox />
    </div>
  );
}

export default SideBar;
