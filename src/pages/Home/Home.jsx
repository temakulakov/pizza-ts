import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import LoadingBlock from "../../components/PizzaBlock/LoadingBlock";
import PizzaCard from "../../components/PizzaBlock";
import {useEffect, useState} from "react";
import svg from "../../assets/img/pizza's-cards-logo-close.svg";

import styles from "./Home.module.scss"
import {useScroll, useMotionValueEvent, motion} from "framer-motion";

const Home = () => {
    const {scrollY} = useScroll();
    const [headerStock, setHeaderStock] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        latest >= 91 ? setHeaderStock(true) : setHeaderStock(false);
        console.log("Page scroll: ", latest)
    });

    const [pizzaCards, setPizzaCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        fetch('https://63d0de76120b32bbe8ec27f2.mockapi.io/pizzas')
            .then(res => res.json())
            .then(json => {
                setPizzaCards(json);
                setIsLoading(false);
            });

    }, []);
    return <div className={styles.root}>
        <motion.div className={styles.top} animate={headerStock ? {
            top: "10px",
            padding: "0 10px 9px 10px",
            borderRadius: "10px",
            boxShadow: "0 4px 30px #0000001a",
        } : {}} transition={{type: "spring"}}>
            <motion.div className={styles.animat_left}>
                <motion.img animate={
                    headerStock ? {
                        x: "0px",
                        y: "5px",
                        opacity: 1,
                        height: "36px"
                    } : {
                        x: "-20px",
                        y: "5px",
                        opacity: 0,
                        height: "36px"
                    }
                }
                src={svg}
                            style={{opacity: 0}}
                />
                <Categories headerStock={headerStock}/>
            </motion.div>
            <motion.div className={styles.animat_right}>
                <Sort headerStock={headerStock}/>
                <motion.div
                    className={styles.authorization}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    animate={ headerStock ? {
                        opacity: 1,
                        x: 0,
                        y: "3px",
                    } : {
                        opacity: 0,
                        x: "50px",
                        y: "3px"
                    }}
                ><span>Cart</span>
                </motion.div>
            </motion.div>
        </motion.div>
        <div className={styles.content}>
            <h2 className={styles.headers}>Все пиццы</h2>
            <div className={styles.grid}>
                {
                    isLoading ? [...new Array(12)].map((_, index) =>
                        <LoadingBlock key={index}/>) : pizzaCards.map((pizza, index) => <PizzaCard key={index}
                                                                                                   className={styles.card}
                                                                                                   description={pizza.description}
                                                                                                   title={pizza.title}
                                                                                                   price={pizza.price}
                                                                                                   imageUrl={pizza.imageUrl}
                                                                                                   sizes={pizza.sizes}
                                                                                                   types={pizza.types}/>)
                }
            </div>
        </div>
    </div>
};

export default Home;