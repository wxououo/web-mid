import { Row, Col } from 'antd'
import styles from './imagelist.module.css'
import planets from '../../json/planets.json'
import ImageItem from '../ImageItem'


export default function ImageList({ products }) {
    return (
        <article className="row">
            <h1>ITEMS</h1>
            <Row gutter={[24, 8]}>
                {products.map(data => (

                    <Col key={data.id} className={styles.image} sm={{ span: 12 }} lg={{ span: 6 }}>

                        <ImageItem imagedata={data} />

                    </Col>
                ))}
            </Row>
            {/* </div> */}
        </article>
    )
}