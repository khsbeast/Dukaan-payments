import React from "react";
import styles from "./inputBox.module.scss";
import searchIcon from "../../../Assets/search.svg";

const InputBox = () => {
  return (
    <div className={styles.inputBox}>
      <img src={searchIcon} alt="search" />
      <input type="text" placeholder="Search features, tutorials, etc." />
    </div>
  );
};

export default InputBox;
