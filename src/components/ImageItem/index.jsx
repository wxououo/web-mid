import styles from './imageitem.module.css'
import { Link } from 'react-router-dom';

export default function ImageItem({ imagedata }) {
    return (
        <div >
            <Link to={`/products/${imagedata.id}`} className={styles.imageLayout}>
                <img src={imagedata.image} alt="" className={styles.imageStyle} />
            </Link>
        </div>
    )
}