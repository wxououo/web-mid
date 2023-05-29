import styles from './imageitem.module.css'
import { Link } from 'react-router-dom';
import AddToCart from '../AddToCartCategory';
import { motion } from "framer-motion";

export default function ImageItem({ imagedata }) {
    return (
        <div >
            <Link to={`/products/${imagedata.id}`} className={styles.imageLayout}>
                <img src={imagedata.image} alt="" className={styles.imageStyle} />
            </Link>
            <div className={styles.nameLayout}>{imagedata.name}</div>
            <div className={styles.categoryLayout}>{imagedata.category}</div>
            <motion.div
                className="box"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
            <AddToCart product={imagedata} qty={1} />
            </motion.div>
        </div>
    )
}