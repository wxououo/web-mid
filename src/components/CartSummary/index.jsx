import { useState } from "react";
import { Badge, theme } from "antd";
import { CartIcon } from "./Icons";
import { selectCartItems } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
import styles from "./cartsummary.module.css"

export default function CartSummary() {
  const { token: { colorTextBase }} = theme.useToken();
  const [isOpen, setIsOpen] = useState(false)
  const cartItems = useSelector(selectCartItems);
  const count = (cartItems.length > 0) 
              ? cartItems.reduce((sum, item) => sum + item.qty, 0)
              : 0;
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <nav onClick={toggleModal} className={styles.cartSummary} >
      <Badge count={count} color="#6366F2" style={{color: 'white'}}>
        <CartIcon size={32} color={colorTextBase} />
      </Badge>
      <p className={styles.cartText}> Shopping bag </p>
    </nav>
  );
}
