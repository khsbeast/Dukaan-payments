import React from "react";
import styles from "./sideBar.module.scss";
import UserBox from "./UserBox/UserBox";
import Menu from "./Menu/Menu.jsx";

function SideBar() {
  return (
    <div className={styles.sideBar}>
      <UserBox />
      <Menu />
    </div>
  );
}

export default SideBar;
