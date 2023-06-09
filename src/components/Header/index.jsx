import styles from './header.module.css'
import NavBar from "../NavBar";
import { Link } from "react-router-dom"
import { useState } from "react";
import HamburgerMenu from "../HamburgerMenu"
import Cart from "../CartSummary"

export default function Header({ title, slogan }) {
    const [isOnTouch, setIsOnTouch] = useState(false);
    return (
        <header className={styles.header}>
            <HamburgerMenu
                onClick={() => setIsOnTouch(!isOnTouch)}
                isOnTouch={isOnTouch}
            />
            <Link to="/" className={styles.sqare} >
                <div className={styles.headerTitle}>iridescent</div>
                <div className={styles.headerLine}></div>
            </Link>
            <Cart />
            <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)}/>
        </header>
    )
}

