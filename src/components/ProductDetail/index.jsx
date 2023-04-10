import { Row, Col ,Select } from "antd";
import AddToCart from "../AddToCart"
import styles from "./productdetail.module.css"
import { useState } from "react";
const { Option } = Select;

import FormatNumber from "../../thousand";

function ProductDetail({ product }) {
   const money=FormatNumber(product.price);  
   const [qty, setQty] = useState(product.stock > 0 ? 1 : 0);
   const total=FormatNumber(product.price * qty);
 
   return (
      <div className={styles.mainLayout}>
         <Row gutter={[50,0]}
         style={{ justifyContent: 'center' }}
      >
         <Col
            xs={{ span: 24 }}
            lg={{ span: 12 }}
         >
            <img
               className={styles.image}
               src={product.image}
            />
         </Col>
         <Col
            xs={{ span: 24 }}
            lg={{ span: 12 }}
         >
            <div className={styles.info} >
            <h1 className={styles.category} >{product.category}</h1>
            <h1 className={styles.title} >{product.name}</h1>
            <div className={styles.square}>
                <p className={styles.intro}>{product.intro1} </p>
                <p className={styles.intro}>{product.intro2} </p>
                <p className={styles.intro}>{product.intro3} </p>
                <p className={styles.intro}>{product.intro4} </p>

                <p className={styles.price}>${money} </p>
            </div>

               <div className={styles.wrap}>

                  {/* <p className={styles.status}>
                     Status: {product.stock > 0 ? "In Stock" : "Unavailable."}
                  </p> */}

                  <div className={styles.qty}>
                      {"   "}
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
                     Total Price: {total}
                  </p>

                  <AddToCart  product={product} qty={qty}/>

               </div>
            </div>
         </Col>
      </Row>
      </div>
      
   );
}

export default ProductDetail;