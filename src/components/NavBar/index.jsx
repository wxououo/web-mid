import { NavLink } from 'react-router-dom';
import { Drawer } from 'antd';
import styles from './navbar.module.css';

export default function NavBar({ open, onClose }) {
    const NavBarContent = () => (
        <>
            <NavLink to="/category/pet"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                PET
            </NavLink>
            <NavLink to="/category/island"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                ISLAND
            </NavLink>
            <NavLink to="/category/planet"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                PLANET
            </NavLink>
            <NavLink to="/category/rocketticket"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                ROCKET TICKET
            </NavLink>
            
        </>
    )
    return (
        <>
            <div className={styles.navBar}>
                <NavBarContent />
            </div>
            <Drawer
                title="CATEGORY"
                placement="left"
                onClose={onClose}
                open={open}
            >
                <div className={styles.drawer}>
                    <NavBarContent />
                </div>
            </Drawer>
        </>

    );
}