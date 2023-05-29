import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./AboutUs.module.css"

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.bg}>
            <motion.div
                layout
                data-isOpen={isOpen}
                initial={{ borderRadius: 50 }}
                className={styles.parent}
                onClick={() => setIsOpen(!isOpen)}
            >
Brand Introduction:
We are a company dedicated to providing unique experiences on our Magical Animal Island Planet. Through our services, you will have the opportunity to name a breathtaking Magical Animal Island Planet and embark on adventurous journeys with rocket tickets. We believe that everyone should have the chance to explore new unknown worlds, interact with extraordinary creatures, and experience limitless wonders.
            </motion.div>
            <motion.div
                layout
                data-isOpen={isOpen}
                initial={{ borderRadius: 50 }}
                className={styles.parent}
                onClick={() => setIsOpen(!isOpen)}
            >
            </motion.div>
            <motion.div
                layout
                data-isOpen={isOpen}
                initial={{ borderRadius: 50 }}
                className={styles.parent}
                onClick={() => setIsOpen(!isOpen)}
            >
            </motion.div>
            <motion.div
                layout
                data-isOpen={isOpen}
                initial={{ borderRadius: 50 }}
                className={styles.parent}
                onClick={() => setIsOpen(!isOpen)}
            >
            </motion.div>
            
            {/* <motion.div layout className={styles.child} >
                <div>
                    hello
                </div>
            </motion.div> */}
        </div>
    );
}
