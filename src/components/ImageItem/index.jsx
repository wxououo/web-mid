import styles from './imageitem.module.css'

export default function ImageItem({ imagedata }) {
    return (
        <div className={styles.imageLayout}>
            <img src={imagedata.image} alt="" className={styles.imageStyle} />
        </div>
    )
}