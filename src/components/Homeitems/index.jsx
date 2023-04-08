import styles from './homeitems.module.css'
import { Row, Col } from 'antd';
import React from 'react';

export default function Homeitems() {
    return (
        <div>
            <div className={styles.sqare}>
                <div className={styles.Sentence1}>we have four kind of</div>
                <div className={styles.Sentence2}>Special Products</div>

            </div>
            <div className={styles.imageShapeArea}>
                <Row gutter={15}>
                    <Col span={12} lg={6} md={12} sm={12} xs={12}>
                        <div className={styles.imageShape}>
                            <img src="./images/pet.jpeg" alt="Home Image" />
                            <svg>
                                <defs>
                                    <clipPath id="my-clip-path">
                                        {/* 这里放置您的不规则形状 */}
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </Col>

                    <Col span={12} lg={6} md={12} sm={12} xs={12}>
                        <div className={styles.imageShape}>
                            <img src="./images/island.jpg" alt="Home Image" />
                            <svg>
                                <defs>
                                    <clipPath id="my-clip-path">
                                        {/* 这里放置您的不规则形状 */}
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </Col>

                    <Col span={12} lg={6} md={12} sm={12} xs={12}>
                        <div className={styles.imageShape}>
                        <img src="./images/planet.jpg" alt="Home Image"/>
                            <svg>
                                <defs>
                                    <clipPath id="my-clip-path">
                                        {/* 这里放置您的不规则形状 */}
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </Col>

                    <Col span={12} lg={6} md={12} sm={12} xs={12}>
                    <div className={styles.imageShape}>
                    <img src="./images/rocketticket.jpg" alt="Home Image"/>
                            <svg>
                                <defs>
                                    <clipPath id="my-clip-path">
                                        {/* 这里放置您的不规则形状 */}
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className={styles.circle}>
                <div className={styles.Sentence3}>Whoever said money doesn't buy happiness, didn't know where to shop.</div>
            </div>

        </div>
    )
}