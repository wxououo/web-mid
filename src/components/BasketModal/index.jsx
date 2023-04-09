import { Modal, Button, Select } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems } from "../../redux/cartSlice";

import styles from "./basketmodal.module.css"
import { CartIcon } from "./Icons";
import { selectCartItems } from "../../redux/cartSlice";
const { Option } = Select;
import { Drawer } from 'antd';

import FormatNumber from "../../thousand";

export default function BasketModal({ isOpen, toggleModal }) {
   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);

   const handleCancel = () => toggleModal(!isOpen);
   const getTotalPrice = () => {
      return (cartItems.length > 0) ?
         cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
         : 0;   
   } 

   return (
      <Drawer
         title="Shopping Basket"
         open={isOpen}
         onClose={toggleModal}
         onCancel={handleCancel}
         // footer={null}
      >
         {cartItems.length === 0 ? (
            <div>Cart is empty</div>
         ) : (
            cartItems.map(item => (
               
               <li key={item.id} className={styles.item}>
                  <Link to={`/products/${item.id}`}>
                     <div onClick={handleCancel}>
                        <img className={styles.image} src={item.image} alt={item.name} />
                     </div>
                  </Link>
                  <div className={styles.content}>
                     <div className={styles.name}>{item.name}</div>
                     <div>
                        Qty: {"   "}
                        <Select
                           defaultValue={item.qty}
                           onChange={(qty) => dispatch(addCartItems({
                              id: item.id,
                              name: item.name,
                              image: item.image,
                              price: item.price,
                              stock: item.stock,
                              qty,
                           }))}
                        >
                           {[...Array(item.stock).keys()].map((x) => (
                              <Option key={x + 1} value={x + 1}>
                                 {x + 1}
                              </Option>
                           ))}
                        </Select>
                     </div>
                  </div>
                  <div>
                     <div className={styles.priceCount}>
                         
                     {FormatNumber(item.price )}x{item.qty}=
                        </div>
                        <div className={styles.price}>
                        
                        ${FormatNumber(item.price * item.qty)}
                     </div>
                     <div className={styles.delete} onClick={() => dispatch(removeCartItems(item.id))}>
                        x
                     </div>
                  </div>
               </li>
            ))
         )}
         <div className={styles.wrap}>
            Total
            <div className={styles.totalPrice}>${FormatNumber(getTotalPrice())}</div>
         </div>
         <Button
            className={styles.btn}
            type="primary"
         >
            <CartIcon size={20} color={"#ffffff"}/>
            <span style={{ marginLeft: 12 }}>Start Checkout</span>
         </Button>
      </Drawer>
   );
}