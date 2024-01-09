import React, { useState } from "react";
import styles from "./paginationTable.module.scss";
import PaginationButtons from "./PaginationButtons/Buttons";
import NavButtons from "./PaginationButtons/NavButtons/NavButtons";
import TableItem from "./PaginationButtons/TableItem/TableItem";
import searchIcon from "../../Assets/search.svg";
import sortIcon from "../../Assets/Sort.svg";
import downloadIcon from "../../Assets/download.svg";
import infoIcon from "../../Assets/Info.svg";

const PaymentsTable = ({ data, itemsPerPage }) => {
  const [activePage, setActivePage] = useState(1);
  const [query, setQuery] = useState("");

  // fuzzy search on order id column
  const fuzzySearch = (query, payment) => {
    const queryLowerCase = query?.toLowerCase();
    const targetLowerCase = payment?.toLowerCase();

    return targetLowerCase.includes(queryLowerCase);
  };

  const lastItem = activePage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const paymentsData = data.slice(firstItem, lastItem);

  const filteredData = paymentsData.filter((payment) =>
    fuzzySearch(query, payment.orderId)
  );

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
      <div className={styles.utilityWrapper}>
        <div className={styles.inputBox}>
          <img src={searchIcon} alt="search" />
          <input
            type="text"
            placeholder="Search by order ID..."
            className={styles.search}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <div className={styles.sort}>
            <button>
              Sort
              <img src={sortIcon} alt="sort" />
            </button>
          </div>
          <button>
            <img src={downloadIcon} alt="download" style={{ padding: "8px" }} />
          </button>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.headerItem}>Order ID</div>
        <div className={styles.headerItem}>Order date</div>
        <div className={styles.headerItem} style={{ justifyContent: "end" }}>
          Order Amount
        </div>
        <div className={styles.headerItem} style={{ justifyContent: "end" }}>
          Transaction fees
          <img src={infoIcon} alt="info" />
        </div>
      </div>
      {filteredData.map((item) => (
        <TableItem
          id={item.orderId}
          date={item.orderDate}
          amount={item.orderAmount}
          fees={item.transactionFee}
        />
      ))}
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

export default PaymentsTable;
