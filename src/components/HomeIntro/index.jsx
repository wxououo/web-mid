import styles from './homeintro.module.css'
import { Row, Col } from 'antd';
import { Link } from "react-router-dom"
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from "framer-motion";

export default function Homeintro() {

    return (
        <div>
            
            <div className={styles.container}>
                <div class={styles.title}>Concept of Iridescent</div>

                <div className={styles.content}>
                    <Row gutter={[0, 50]}>

                        <Col span={12} lg={12} md={24} sm={24} xs={24} className={styles.rowReverse}>
                            <img src="./images/unicorn.png" className={styles.imageintro} />{/* 圖片內容 */}
                        </Col>
                        <Col span={12} lg={12} md={24} sm={24} xs={24} className={styles.rowReverse}>
                            <div className={styles.textarea}>
                                <div className={styles.texttitle}>PET</div>
                                <div className={styles.textword}>We believe that everyone should have the chance to explore new unknown worlds, interact with extraordinary creatures, and experience limitless wonders.</div>
                                <Link to="/category/pet">
                                    <div className={styles.learnmore}>
                                        Learn more
                                    </div>
                                </Link>
                            </div>                </Col>
                    </Row>
                </div>

                <div className={styles.content}>
                    <Row gutter={[0, 50]}>
                        <Col span={12} lg={0} md={24} sm={24} xs={24}>
                            <img src="./images/island.png" className={styles.imageintro2} />{/* 圖片內容 */}
                        </Col>
                        <Col span={12} lg={12} md={24} sm={24} xs={24} className={styles.rowReverse}>
                            <div className={styles.textarea}>
                                <div className={styles.texttitle}>ISLAND</div>
                                <div className={styles.textword}>At the Magical Island, we firmly believe in the importance of exploration and adventure. We believe that each person possesses unique dreams and desires.</div>
                                <Link to="/category/island">
                                    <div className={styles.learnmore}>
                                        Learn more
                                    </div>
                                </Link>
                            </div>                
                        </Col>
                        <Col span={12} lg={12} md={0} sm={0} xs={0}>
                            <img src="./images/island.png" className={styles.imageintro2} />{/* 圖片內容 */}
                        </Col>

                    </Row>
                </div>

                <div className={styles.content}>
                    <Row gutter={[0, 50]}>

                        <Col span={12} lg={12} md={24} sm={24} xs={24}>
                            <img src="./images/planet.png" className={styles.imageintro} />{/* 圖片內容 */}
                        </Col>
                        <Col span={12} lg={12} md={24} sm={24} xs={24}>
                            <div className={styles.textarea}>
                                <div className={styles.texttitle}>PLANET</div>
                                <div className={styles.textword}>Through our website, you can purchase the naming rights to the Magical Animal Island Planet, leaving your personal mark on this mystical world for eternity. </div>
                                <Link to="/category/planet">
                                    <div className={styles.learnmore}>
                                        Learn more
                                    </div>
                                </Link>
                            </div>               
                             </Col>
                    </Row>
                </div>

                <div className={styles.content}>
                    <Row gutter={[0, 50]}>
                        <Col span={12} lg={0} md={24} sm={24} xs={24}>
                            <img src="./images/rocketticket.png" className={styles.imageintro} />{/* 圖片內容 */}
                        </Col>
                        <Col span={12} lg={12} md={24} sm={24} xs={24}>
                            <div className={styles.textarea}>
                                <div className={styles.texttitle}>ROCKET TICKET</div>
                                <div className={styles.textword}>We aim to inspire the spirit of adventure, encouraging individuals to break out of their comfort zones and venture into the unknown. </div>
                                <Link to="/category/rocketticket">
                                    <div className={styles.learnmore}>
                                        Learn more
                                    </div>
                                </Link>
                            </div>               
                     </Col>
                        <Col span={12} lg={12} md={0} sm={0} xs={0}>
                            <img src="./images/rocketticket.png" className={styles.imageintro} />{/* 圖片內容 */}
                        </Col>

                    </Row>
                </div>
            </div>
        </div>
    )
}