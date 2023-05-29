import styles from "./LoginIcon.module.css"
import { useState, useEffect } from "react";
import { UserOutlined } from '@ant-design/icons'
import { NavLink, useLocation } from 'react-router-dom';

export default function LoginIcon({ onClick, isOnTouch }) {
   return (
      <NavLink to="/Login">
         <div className={styles.icon}>
            <UserOutlined />
         </div>
      </NavLink>
   );
}