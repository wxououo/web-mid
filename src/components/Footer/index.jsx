import styles from './Footer.module.css'
import { Row, Col } from 'antd'

export default function Footer() {
    return (
        <footer className="footer">
            <div className={styles.footerAbove}>
                <div className="container">
                    <Row>
                        <Col  sm={{span:24}} lg={{ span: 6 }}>
                        <p className={styles.main}>Home</p>
                        <p className={styles.sub}>Brand concept</p>
                        <p className={styles.sub}>Product introduce</p>
                        </Col>
                        <Col sm={{span:24}} lg={{ span:6 }} >
                        <p className={styles.main}>Shop</p>
                        <p className={styles.sub}>All product</p>
                        <p className={styles.sub}>pet</p>
                        <p className={styles.sub}>island</p>
                        <p className={styles.sub}>planet</p>
                        <p className={styles.sub}>rocket ticket</p>
                        </Col>
                        <Col sm={{span:24}} lg={{ span:6 }} >
                        <p className={styles.main}>About</p>
                        <p className={styles.sub}>How to buy</p>
                        <p className={styles.sub}>complement</p>
                        <p className={styles.sub}>Q&A</p>
                        <p className={styles.sub}>contact</p>
                        </Col>
                        <Col sm={{span:24}} lg={{ span:6 }} >
                        <p className={styles.main}>Social Media</p>
                        <p className={styles.sub}>Instagram</p>
                        <p className={styles.sub}>Facebook</p>
                        <p className={styles.sub}>Twitter</p>
                        </Col>
                    </Row>
                </div>
            </div>
            {/* <div className={styles.footerBelow}>
                <div className="container">
                    <h6>
                        &copy; Copyright All rights reserved.
                    </h6>
                </div>
            </div> */}
        </footer >
    )
}