import React from "react";
import SideBar from "../Components/Sidebar/SideBar.jsx";
import styles from "./payments.module.scss";
import Header from "../Components/Header/Header.jsx";

function Payments() {
  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <SideBar />
      </div>
      <div className={styles.main}>
        <Header />
      </div>
    </div>
  );
}

export default Payments;
