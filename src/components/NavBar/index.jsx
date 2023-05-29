import { NavLink, useLocation } from 'react-router-dom';
import { Drawer } from 'antd';
import styles from './navbar.module.css';

import { motion } from "framer-motion";
import { Dropdown, Menu } from 'antd';

export default function NavBar({ open, onClose }) {
    const NavBarContent = () => (
        <>
            <NavLink to="/"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                Home
            </NavLink>
            <NavLink to="/AboutUs"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                About Us
            </NavLink>
            <NavLink to="/category"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                <MyDropdown />
            </NavLink>
            <NavLink to="/11"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                FAQ
            </NavLink>

        </>
    )
    const menu = (
        <Menu >
            <Menu.Item key="1" className={styles.dropdown} >
                <NavLink to="/category/pet"
                    className={({ isActive }) => (isActive ? styles.dropdownActive : styles.dropdown)}>
                    PET
                </NavLink>
            </Menu.Item>
            <Menu.Item key="2" className={styles.dropdown}>
                <NavLink to="/category/island"
                    className={({ isActive }) => (isActive ? styles.dropdownActive : styles.dropdown)}>
                    ISLAND
                </NavLink>
            </Menu.Item>
            <Menu.Item key="3" className={styles.dropdown}>
                <NavLink to="/category/planet"
                    className={({ isActive }) => (isActive ? styles.dropdownActive : styles.dropdown)}>
                    PLANET
                </NavLink>
            </Menu.Item>
            <Menu.Item key="4" className={styles.dropdown}>
                <NavLink to="/category/rocketticket"
                    className={({ isActive }) => (isActive ? styles.dropdownActive : styles.dropdown)}>
                    ROCKET TICKET
                </NavLink>
            </Menu.Item>
        </Menu>
    );
    const MyDropdown = () => {
        return (
            <>
                <Dropdown overlay={menu}
                   >
                    {/* <NavLink to="/category"
                        className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}> */}
                        <div>
                        Products
                        </div>
                    {/* </NavLink> */}
                </Dropdown>
                {/* <NavLink to="/category/rocketticket"
                    className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                    ROCKET TICKET
                </NavLink> */}
            </>
        );
    }
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