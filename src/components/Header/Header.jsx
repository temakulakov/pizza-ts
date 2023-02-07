import {Link} from "react-router-dom";
import firstLogoSvg from "../../assets/img/logo-first-layer.svg"
import styles from "./Header.module.scss";
import {LayoutGroup, motion, useTransform} from "framer-motion";
import {useEffect, useState} from "react";

const Header = (props) => {
    const [secondPosition, setSecondPosition] = useState("2px");
    const [thirtPosition, setThirtPosition] = useState("4px");
    useEffect(() => {
        setSecondPosition("-40px");
        setThirtPosition("-80px");
    }, []);
    return <div className={styles.root} >
        <div className={styles.top}>
            <Link to={"/"} className={styles.logotype}
                  onMouseOver={() => {
                      setSecondPosition("-15px");
                      setThirtPosition("-25px");
                  }
                  }
                  onMouseLeave={() => {
                      setSecondPosition("-40px");
                      setThirtPosition("-80px");
                  }
                  }
            >
                <LayoutGroup>
                    <motion.img
                        key={0}
                        src={firstLogoSvg}
                        className={styles.image_second}

                    />
                    <motion.img
                        key={1}
                        src={firstLogoSvg}
                        className={styles.image_second}
                        animate={{
                            x: secondPosition,
                        }}
                        transition={{
                            duration: '.25',
                        }}
                    />
                    <motion.img
                        key={2}
                        src={firstLogoSvg}
                        className={styles.image}
                        animate={{
                            x: thirtPosition,
                        }}
                        transition={{
                            duration: '.25',
                        }}
                    />

                    <motion.div
                        className={styles.text}
                        animate={{
                            x: thirtPosition,
                        }}
                        transition={{
                            duration: '.25',
                        }}>
                        <h1>Pizza's Cards</h1>
                        <p>This app working on React</p>
                    </motion.div>
                </LayoutGroup>
            </Link>


            <motion.div
                className={styles.authorization}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
            ><span>Cart</span>
            </motion.div>
        </div>
    </div>
};

export default Header;