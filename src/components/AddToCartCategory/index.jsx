import { Button , notification} from "antd"
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cartSlice";
import styles from "./addtocart.module.css"

import FormatNumber from "../../thousand";
export default function AddToCart({ product, qty }) {
  const dispatch = useDispatch();

  const openNotification = () => {
    notification.open({
      message: 'Thank for your shopping !',
      description:
        `♡ add ${qty} ${qty > 1 ? "pieces" : "piece"} of ${product.name} to your bag ♡`,
      className: styles.myNotification,
      placement: 'bottomRight',
    });
  };
  const addToCart = () => {
    openNotification();
    dispatch(addCartItems({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      stock: product.stock,
      qty,
    }))
  };

  return (
    <Button className={styles.btn} onClick={addToCart}>
      <div className={styles.wordLayout}>${FormatNumber(product.price)}</div>
      <div></div>
    </Button>
  );
}