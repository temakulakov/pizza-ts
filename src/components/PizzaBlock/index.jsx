import {useEffect, useState} from "react";
import styles from "./PizzaCard.module.scss"
import { LayoutGroup, motion} from "framer-motion";

const Index = (props) => {
    const [price, setPrice] = useState(props.price[0].length > 0 ? props.price[0][props.types[0]] : props.price[0])
    const [activeType, setActiveType] = useState(props.types[0]);
    const [activeSize, setActiveSize] = useState(0);
    const types = ['thin', 'traditionally'];



    useEffect(() => {
        setPrice(props.price.length > 0 ? props.price[activeSize][props.types.length === 1 ? 0 : activeType] : props.price[activeSize]);
    }, [activeSize, activeType]);

    return <div className={styles.root} onClick={() => console.log("Info for cart")}>
        <div>
            <motion.img
                className={styles.image}
                src={props.imageUrl}
                alt="Pizza"
                whileHover={{y: "4px", transition: { duration: 0.2 },}}
            />
            <h4 className={styles.title}>{props.title}</h4>
            {/*<div className={styles.selector}>*/}
            {/*    <ul>*/}
            {/*        {props.types.map((type, index) => <li className={activeType === type ? "active" : ""} key={index}*/}
            {/*                                              onClick={() => {*/}
            {/*                                                  setActiveType(type);*/}
            {/*                                              }*/}
            {/*                                              }>{types[type]}</li>)}*/}
            {/*    </ul>*/}
            {/*    <ul>*/}
            {/*        {props.sizes.map((size, index) => <li className={activeSize === index ? "active" : ""} onClick={() => {*/}
            {/*            setActiveSize(index);*/}
            {/*        }} key={index}>{size}</li>)}*/}
            {/*    </ul>*/}
            {/*</div>*/}
            <div className={styles.descriprion}>{props.description}</div>
        </div>
        <div className={styles.bottom}>
            <div className={styles.price}>от {price} ₽</div>
            <motion.div
                className={styles.button}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
            ><span>Выбрать</span>
            </motion.div>
        </div>
    </div>
};

export default Index;