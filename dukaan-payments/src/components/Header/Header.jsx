import React from "react";
import styles from "./header.module.scss";
import InputBox from "./InputBox/InputBox";
import helpIcon from "../../../src/Assets/help.svg";
import Chat from "./Chat/Chat";

const Header = () => {
  return (
    <div className={styles.container}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <h2>Payments</h2>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <img
            src={helpIcon}
            alt="help Icon"
            style={{ width: "14px", height: "14px" }}
          />{" "}
          <span> How it works</span>
        </div>
      </div>
      <div>
        <InputBox />
      </div>
      <div>
        <Chat />
      </div>
    </div>
  );
};

export default Header;
