import styles from "./style.module.css";
import React from 'react'
import Header from "../Header";
import Main from "../Main";
import List from "../List";
function Layout() {
    return (
        <div className={styles.layout}>Layout
            <Header />
            <Main />
            <List />
        </div>
    )
}

export default Layout