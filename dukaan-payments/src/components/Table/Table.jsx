import React, { useState } from "react";
import styles from "./paginationTable.module.scss";
import PaginationButtons from "./PaginationButtons/Buttons";
import NavButtons from "./PaginationButtons/NavButtons/NavButtons";
import TableItem from "./PaginationButtons/TableItem/TableItem";

const PaginationTable = ({ data, itemsPerPage }) => {
  const [activePage, setActivePage] = useState(1);

  const lastItem = activePage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const paymentsData = data.slice(firstItem, lastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrevClick = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  const handleNextClick = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
    }
  };

  return (
    <div className={styles.tableCard}>
      <div className={styles.header}>
        <div className={styles.headerItem}>Order ID</div>
        <div className={styles.headerItem}>Order date</div>
        <div className={styles.headerItem} style={{justifyContent:"end"}}>Order Amount</div>
        <div className={styles.headerItem} style={{justifyContent:"end"}}>Transaction fees</div>
      </div>
      <TableItem id="#281209" date="7 July, 2023" amount="₹1,278.23" fees="₹22" />
      <div className={styles.pagination}>
        <NavButtons
          action={handlePrevClick}
          disabled={activePage === 1}
          title="Previous"
        />
        <div className={styles.paginationButton}>
          {PaginationButtons({ activePage, totalPages, setActivePage })}
        </div>
        <NavButtons
          action={handleNextClick}
          disabled={activePage === totalPages}
          title="Next"
        />
      </div>
    </div>
  );
};

export default PaginationTable;
