import styles from './Footer.module.css'
import { Row, Col } from 'antd'

export default function Footer() {
    return (
        <footer className="footer">
            <div className={styles.footerAbove}>
                <div className="container">
                    <Row>
                        <Col className={styles.footerDescription}  sm={{span:24}} lg={{ span: 12 }}>
                        <p className={styles.footerDescription}>Footer1</p>
                        </Col>
                        <Col className={styles.footerDescription2} sm={{span:24}} lg={{ span:12 }} >
                        <p className={styles.footerDescription2}>Footer2</p>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className={styles.footerBelow}>
                <div className="container">
                    <h6>
                        &copy; Copyright All rights reserved.
                    </h6>
                </div>
            </div>
        </footer >
    )
}