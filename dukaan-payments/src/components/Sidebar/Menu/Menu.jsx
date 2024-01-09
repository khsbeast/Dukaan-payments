import React from "react";
import styles from "./menu.module.scss";
import { menuItems } from "./Menu";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div>
      <div className={styles.menu}>
        {menuItems.map((item) => {
          return (
            <MenuItem
              icon={item.icon}
              title={item.title}
              active={item.active}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
