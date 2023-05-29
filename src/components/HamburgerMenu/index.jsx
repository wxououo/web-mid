import styles from "./hamburgermenu.module.css"
import { Toggle } from "./Toggle";
import { useState, useEffect } from "react";

export default function HamMenu({ onClick, isOnTouch }) {
    const [isOpen, setIsOpen] = useState(false);
   return (
   
      <span onClick={onClick} className={`${styles.hamMenu} ${styles.showMobile}`}> 
      <Toggle toggle={() => setIsOpen(!isOpen)}/>
         {/* <img src="/images/menu.svg" alt="1" /> */}
      </span>
   );
}