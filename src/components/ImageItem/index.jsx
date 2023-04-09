import styles from './imageitem.module.css'
import { Link } from 'react-router-dom';
import AddToCart from '../AddToCart-category';

export default function ImageItem({ imagedata }) {
    return (
        <div >
            <Link to={`/products/${imagedata.id}`} className={styles.imageLayout}>
                <img src={imagedata.image} alt="" className={styles.imageStyle} />
            </Link>
            <div className={styles.nameLayout}>{imagedata.name}</div>
            <div className={styles.categoryLayout}>{imagedata.category}</div>
            <AddToCart product={imagedata} qty={1}/>
        </div>
    )
}