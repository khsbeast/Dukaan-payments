import React from "react";
import "./navButtons.scss";
import arrowRight from "../../../../Assets/arrow-right.svg";

const NavButtons = ({ action, disabled, title }) => {
  return (
    <button
      onClick={action}
      disabled={disabled}
      style={
        title === "Next"
          ? { padding: "6px 6px 6px 12px" }
          : { padding: "6px 12px 6px 6px" }
      }
    >
      {title === "Previous" && <img src={arrowRight} alt="arrow" />}
      {title}
      {title === "Next" && (
        <img
          src={arrowRight}
          alt="arrow"
          style={{ transform: "rotate(180deg)" }}
        />
      )}
    </button>
  );
};

export default NavButtons;
