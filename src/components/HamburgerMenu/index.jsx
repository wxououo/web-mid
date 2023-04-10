import styles from "./hamburgermenu.module.css"

export default function HamMenu({ onClick, isOnTouch }) {

   return (
      <span onClick={onClick} className={`${styles.hamMenu} ${styles.showMobile}`}>
         <img src="/images/menu.svg" alt="1" />
      </span>
   );
}