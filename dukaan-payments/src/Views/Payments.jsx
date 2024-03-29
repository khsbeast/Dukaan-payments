import React from "react";
import SideBar from "../Components/Sidebar/SideBar.jsx";
import styles from "./payments.module.scss";
import Header from "../Components/Header/Header.jsx";
import Card from "../Components/Card/Card.jsx";
import PaymentsTable from "../Components/Table/PaymentsTable.jsx";
import { getPayments } from "./generateData.js";
import arrowRight from "../Assets/arrow-right.svg";

const data = getPayments();
console.log(data);

function Payments() {
  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <SideBar />
      </div>
      <div className={styles.main}>
        <Header />
        <div className={styles.bodyContainer}>
          <div className={styles.overviewSection}>
            <h3>Overview</h3>
            <div className={styles.dropdown}>
              <p> Last Month </p>
              <img src={arrowRight} alt="arrow" />{" "}
            </div>
          </div>
          <div style={{ display: "flex", gap: "20px", marginBottom: "32px" }}>
            <Card heading="Online orders" number="231" />
            <Card heading="Amount received" number="₹23,92,312.19" />
          </div>
          <h3 style={{ marginBottom: "20px" }}>Transactions | This Month</h3>
          <div>
            <PaymentsTable data={data} itemsPerPage={19} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
