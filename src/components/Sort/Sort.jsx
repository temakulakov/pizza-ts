import {useEffect, useState} from "react";
import styles from "./Sort.module.scss"
import {motion} from "framer-motion";

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {type: "spring", stiffness: 300, damping: 24}
    },
    closed: {opacity: 0, y: 20, transition: {duration: 0.2}}
};

const indicatorPositions = [
    "",
    "0px",
    "40px",
    "76px",
]

const Sort = (props) => {
    const [isVisiblePopup, setIsVisiblePopup] = useState(false);
    const [activeSort, setActiveSort] = useState(0);
    const [y, setY] = useState(indicatorPositions[activeSort[1]]);
    const filterSortTitles = [
        "popular",
        "price",
        "alphabet",
    ];

    useEffect(() => {
        setIsVisiblePopup(false);
    }, [activeSort])

    return <motion.div
        className={styles.root}
        onClick={() => setIsVisiblePopup(!isVisiblePopup)}
        animate={ props.headerStock ? {
            x: 0,
        } : {
            x: "85px",
        }}
    >
        <motion.div
            initial={false}
            animate={isVisiblePopup ? "open" : "closed"}
            className={styles.button}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}

        >
            {"Sort by:"}   <h1 className={styles.data}>{filterSortTitles[activeSort]}</h1>
            <motion.svg
                className={styles.arrow}
                variants={{
                    open: {rotate: 180},
                    closed: {rotate: 0}
                }}

                transition={{duration: 0.2}}
                style={{originY: 0.55}}
            >
                <svg width="15" height="15" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 19L15 12M8 1V19V1ZM8 19L1 12L8 19Z" stroke="#303237" strokeWidth="2"
                          strokeLinecap="round" strokeinejoin="round"/>
                </svg>
            </motion.svg>

        </motion.div>
        {isVisiblePopup && <motion.ul
            className={styles.menu}
            variants={{
                open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.7,
                        delayChildren: 0.3,
                        staggerChildren: 0.05
                    }
                },
                closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.3
                    }
                }

            }}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}

            style={{pointerEvents: isVisiblePopup ? "auto" : "none"}}
        >
            <motion.div
                className={styles.indicator}
                animate={{y: y}}

            />
            {filterSortTitles.map((filter, index) => <div onClick={() =>
                setActiveSort(index)
            } key={index}>
                <motion.li className={styles.item}
                           onHoverStart={() => setY(indicatorPositions[index + 1])}
                           key={index} variants={itemVariants}
                >{filter}</motion.li>
            </div>)}

        </motion.ul>}
    </motion.div>
};

export default Sort;