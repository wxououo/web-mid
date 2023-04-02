import { Row, Col } from 'antd'
import styles from './imagelist.module.css'
import planets from '../../json/planets.json'
import ImageItem from '../ImageItem'

export default function ImageList() {
    return (
        <article className="row">
            <h1>ITEMS</h1>
            <Row gutter={[24, 8]}>
                {planets.map(imagedata => (
                    <Col key={imagedata.id} className={styles.image} sm={{ span: 12 }} lg={{ span: 6 }}>
                        <ImageItem imagedata={imagedata} />
                    </Col>
                ))}
            </Row>
            {/* </div> */}
        </article>
    )
}