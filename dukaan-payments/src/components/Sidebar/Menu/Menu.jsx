import React from "react";
import styles from "./menu.module.scss";
import { menuItems } from "./Menu";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className={styles.menu}>
      {menuItems.map((item) => {
        return <MenuItem icon={item.icon} title={item.title} />;
      })}
    </div>
  );
};

export default Menu;
