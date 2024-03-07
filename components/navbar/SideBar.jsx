import React from "react";
import styles from "./NavBar.module.css";
import globals from "../global.module.css";
const SideBar = () => {
  return (
    <React.Fragment>
      <main className={styles.headNav}>
        <h1 className={globals.heading}>i am a SideBar</h1>
      </main>
    </React.Fragment>
  );
};

export default SideBar;
