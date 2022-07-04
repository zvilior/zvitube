import styles from "./style.module.css";
import React from 'react'
import logo from "../../assets/logo.png"
function Header() {
  return (
    <div className="header">
      <img src={logo} className={styles.logo} alt="logo" ></img>
      ZviTube
    </div>
  )
}

export default Header