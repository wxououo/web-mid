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

            </motion.div>

            {/* <motion.div layout className={styles.child} >
                <div>
                    hello
                </div>
            </motion.div> */}
        </div>
    );
}
