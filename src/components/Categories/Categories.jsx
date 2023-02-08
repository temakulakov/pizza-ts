import React, {useEffect} from 'react';
import styles from "./Categories.module.scss"

import {motion, Reorder} from "framer-motion";

const indicatorWidth = [
    "58px",
    "65px",
    "107px",
    "60px",
    "72px",
    "89px",
];

const indicatorX = [
    "0px",
    "62px",
    "135px",
    "249px",
    "316px",
    "390px",
]

const Sort = (props) => {
    const [selectedCategory, setSelectedCategory] = React.useState(0);
    const [indicatorValues, setIndicatorValues] = React.useState({x: indicatorX[0], width: indicatorWidth[0]});
    const [hoverCaretValues, setHoverCaretValues] = React.useState({x: indicatorX[0], width: indicatorWidth[0], opacity: 0});

    const [listCategories, setListCategories] = React.useState([
        "All",
        "Meat",
        "Vegetarian",
        "Grill",
        "Sharp",
        "Closed",
    ]);

    const handleSetSelectedCategory = (index) => {
        setSelectedCategory(index);
    }

    return <motion.div className={styles.root} animate={props.headerStock ? {x: "8px"} : {x: "-25px"}} whileHover={{scale: 1.05}}>
        <motion.ul  >
            <motion.div
                className={styles.hover_caret}
                initial={{x: "0px", width: "0px"}}
                animate={{x: indicatorValues.x, width: indicatorValues.width, opacity: indicatorValues.opacity}}
            />
            <motion.div
                className={styles.activity_caret}
                animate={{x: hoverCaretValues.x, width: hoverCaretValues.width}}
                initial={{x: "0px", width: "0px"}}
                transition={{ stiffness: 1 }}
            />
            { listCategories.map((category, index) => <motion.div
                className={styles.wrapper}
                onMouseOver={() => setHoverCaretValues({x: indicatorX[index], width: indicatorWidth[index]})}
                onMouseLeave={() => setHoverCaretValues({x: indicatorX[selectedCategory], width: indicatorWidth[selectedCategory], opacity: 0})}
                key={category}
                onClick={() => {
                    handleSetSelectedCategory(index);
                    setIndicatorValues({x: indicatorX[index], width: indicatorWidth[index]});
                }}
            >
                <motion.li key={category}  value={category}
                               className={selectedCategory === index ? styles.active : ""}
                    >
                    <motion.span className={styles.text_span}>
                        {category}
                    </motion.span>
                </motion.li>
            </motion.div>)}
        </motion.ul>

    </motion.div>
};

export default Sort;