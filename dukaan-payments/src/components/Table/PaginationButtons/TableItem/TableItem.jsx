import React from "react";
import styles from "./tableItem.module.scss";

const TableItem = ({ id, date, amount, fees }) => {
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.itemHeader}>
        <div
          className={styles.tableItem}
          style={{ fontWeight: "500", color: "#146EB4" }}
        >
          {id}
        </div>
        <div className={styles.tableItem}>{date}</div>
        <div className={styles.tableItem} style={{ justifyContent: "end" }}>
          {amount}
        </div>
        <div className={styles.tableItem} style={{ justifyContent: "end" }}>
          {fees}
        </div>
      </div>
    </div>
  );
};

export default TableItem;
