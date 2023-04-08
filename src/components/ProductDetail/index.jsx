import { Row, Col ,Select } from "antd";
import AddToCart from "../AddToCart"
import styles from "./productdetail.module.css"
import { useState } from "react";
const { Option } = Select;

function ProductDetail({ product }) {
   const [qty, setQty] = useState(product.stock > 0 ? 1 : 0);
   
   return (
      <Row gutter={[]}
         style={{ justifyContent: 'center' }}
      >
         <Col
            xs={{ span: 24 }}
            lg={{ span: 6 }}
         >
            <img
               className={styles.image}
               src={product.image}
            />
         </Col>
         <Col
            xs={{ span: 24 }}
            lg={{ span: 14 }}
         >
            <div className={styles.info} >
               <h1 className={styles.name} >
                  {product.id}
               </h1>

               <div className={styles.wrap}>
                  <p className={styles.price} >
                     US${product.price}.00
                  </p>
                  <p className={styles.status}>
                     Status: {product.stock > 0 ? "In Stock" : "Unavailable."}
                  </p>
                  <div className={styles.qty}>
                     Qty: {"   "}
                     <Select
                        defaultValue={qty}
                        key={qty}                        
                        className={styles.selectStyle}
                        onChange={val => setQty(val)}
                     >
                        {[...Array(product.stock).keys()].map((x) => (
                           <Option key={x + 1} value={x + 1}>
                              {x + 1}
                           </Option>
                        ))}
                     </Select>
                  </div>
                  <p className={styles.qty}>
                     Total Price: {product.price * qty}
                  </p>

                  <AddToCart  product={product} qty={qty}/>

               </div>
            </div>
         </Col>
      </Row>
   );
}

export default ProductDetail;