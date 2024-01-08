import React from "react";
import SideBar from "../Components/Sidebar/SideBar.jsx";
import styles from "./payments.module.scss";

function Payments() {
  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <SideBar />
      </div>
      <div className={styles.main}>Payments</div>
    </div>
  );
}

export default Payments;
