import styles from "./style.module.css";
import React from 'react'
import logo from "../../assets/logo.png"
function Header() {
  return (
    <div className={styles.header}>Header
      <img src={logo} alt="logo" ></img>
    </div>
  )
}

export default Header