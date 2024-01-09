import React from "react";
import styles from "./sideBar.module.scss";
import UserBox from "./UserBox/UserBox";
import Menu from "./Menu/Menu.jsx";
import CreditsBox from "./CreditsBox/CreditsBox.jsx";

function SideBar() {
  return (
    <div
     className={styles.sideBarWrapper}
    >
      <div className={styles.sideBar}>
        <div>
          <UserBox />
          <Menu />
        </div>
      </div>
      <div style={{ padding: "10px 18px" }}>
        <CreditsBox />
      </div>
    </div>
  );
}

export default SideBar;
