import React, { useState } from "react";
import "./PaginationTable.scss";
import PaginationButtons from "./PaginationButtons/Buttons";
import NavButtons from "./PaginationButtons/NavButtons/NavButtons";

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
    <div className="tableCard">
      <div className="pagination-table">
        <table>
          <thead>
            <tr>
              <th>Field 1</th>
              <th>Field 2</th>
              <th>Field 3</th>
              <th>Field 4</th>
            </tr>
          </thead>
          <tbody>
            {paymentsData.map((item, index) => (
              <tr key={index}>
                <td>{item.field1}</td>
                <td>{item.field2}</td>
                <td>{item.field3}</td>
                <td>{item.field4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <NavButtons
          action={handlePrevClick}
          disabled={activePage === 1}
          title="Previous"
        />
        <div className="paginationButton">
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
