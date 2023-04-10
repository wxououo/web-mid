import styles from './description.module.css'
import { Carousel } from 'antd';


export default function Description() {
    return (
       
        <Carousel className={styles.cover}  autoplay>
            <div className={styles.contentStyle}>
            <img className={styles.img} src="../../../public/images/home1.jpg" alt="1" />
            </div>
            <div className={styles.contentStyle}>
            <img className={styles.img} src="../../../public/images/home2.jpeg" alt="2" />
            </div>
            <div className={styles.contentStyle}>
            <img className={styles.img} src="../../../public/images/home3.webp" alt="3" />
            </div>
            <div className={styles.contentStyle}>
            <img className={styles.img} src="../../../public/images/home4.png" alt="4" />
            </div>
        </Carousel>
    )
}

