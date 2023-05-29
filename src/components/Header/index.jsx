import styles from './header.module.css'
import NavBar from "../NavBar";
import { Link } from "react-router-dom"
import { useState } from "react";
import HamburgerMenu from "../HamburgerMenu"
import Cart from "../CartSummary"
import LoginIcon from '../LoginIcon';

export default function Header({ title, slogan }) {
    const [isOnTouch, setIsOnTouch] = useState(false);
    return (
        <header className={styles.header}>
            <div  className={styles.sqare} > 
            
           <HamburgerMenu
                onClick={() => setIsOnTouch(!isOnTouch)}
                isOnTouch={isOnTouch}
            />
            <Link to="/" className={styles.a}>
                <div className={styles.headerTitle}>iridescent</div>
                <div className={styles.headerLine}></div>
            </Link>
            <LoginIcon />
            <Cart />
            </div>
            <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)}/>
        </header>
    )
}

