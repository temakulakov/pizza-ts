import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
import NotFound from './pages/NotFound/NotFound'
import { useRoutes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";

import styles from "./App.module.scss";

function App() {

    const routes = [{
        path: '/',
        children: [
            { path: '/home', element: <Home/> },
            { path: '/', element: <Home/> },
            { path: 'cart', element: <Cart/> },
            { path: '*', element: <NotFound/> },
        ]
    },
    ];

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <Header />
                <div className={styles.content}>
                    {useRoutes(routes)}
                </div>
            </div>
        </div>
    );
}

export default App;
