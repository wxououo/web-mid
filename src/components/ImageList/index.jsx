import { Row, Col } from 'antd'
import styles from './imagelist.module.css'
import planets from '../../json/planets.json'
import ImageItem from '../ImageItem'


export default function ImageList({ products }) {
    return (
        <div className={styles.mainLayout}>
        <article className={styles.item}>
            <Row gutter={[0,50]}>
                {products.map(data => (
                
                    <Col key={data.id} className={styles.image} sm={24} lg={ 6 }>

                        <ImageItem imagedata={data} />

                    </Col>
                ))}
            </Row>
            {/* </div> */}
        </article>
        </div>
    )
}