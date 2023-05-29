import styles from './description.module.css'
import { Carousel } from 'antd';
import { useEffect, useState } from 'react';

export default function Description() {
    
    return (
       
        <Carousel className={styles.cover}  autoplay>
            <div className={styles.contentStyle}>
            <img className={styles.img} src="/images/home1.jpg" alt="1" />
            </div>
            <div className={styles.contentStyle}>
            <img className={styles.img} src="/images/home2.jpg" alt="2" />
            </div>
            <div className={styles.contentStyle}>
            <img className={styles.img} src="/images/home3.jpg" alt="3" />
            </div>
            <div className={styles.contentStyle}>
            <img className={styles.img} src="/images/home4.jpg" alt="4" />
            </div>
        </Carousel>
    )
}

