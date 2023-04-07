import styles from './description.module.css'
import { Carousel } from 'antd';
// import {Carousel} from '3d-react-carousal';

// let slides = [
//     <img className={styles.img} src="https://picsum.photos/800/300/?random" alt="1" />,
//     <img className={styles.img} src="https://picsum.photos/800/301/?random" alt="2" />  ,
//     <img className={styles.img} src="https://picsum.photos/800/302/?random" alt="3" />  ,
//     <img className={styles.img} src="https://picsum.photos/800/303/?random" alt="4" />  ,
//     <img className={styles.img} src="https://picsum.photos/800/304/?random" alt="5" />   ];

export default function Description() {
    return (
        // <Carousel className={styles.Carousel} slides={slides} autoplay={true} interval={3000} />
        <Carousel autoplay> 
             <div>
                <h3 className={styles.contentStyle}>1</h3>
            </div>
            <div>
                <h3 className={styles.contentStyle}>2</h3>
            </div>
            <div>
                <h3 className={styles.contentStyle}>3</h3>
            </div>
            <div>
                <h3 className={styles.contentStyle}>4</h3>
            </div>
        </Carousel> 
    )
}

