import styles from "./style.module.css";
import React from 'react'
import Header from "../Header";

function Layout() {
    return (
        <div className={styles.layout}>Layout
            <Header />
        </div>
    )
}

export default Layout