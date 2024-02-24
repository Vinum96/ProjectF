import React, { useState } from "react";
import styles from "../../styles/headerStyles/Burger.module.css";
import Nav from "./Nav";

function Burger() {
  const [open, setOpen] = useState(false);
  const openBurger = () => setOpen(!open);
  return (
    <div className={styles.burger_container}>
      <div
        onClick={() => openBurger()}
        className={open ? `${styles.burger} ${styles.active}` : `${styles.burger}`}
      >
        <span></span>
      </div>
      {open && (
        <div className={styles.main_container}>
          <Nav open={open} navClassName={styles.links_burger} />
        </div>
      )}
    </div>
  );
}

export default Burger;
