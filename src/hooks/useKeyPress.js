import {useEffect, useState} from "react";

export const useKeyPress = (keyTarget) => {
    const [isKeyPressed, setIsKeyPressed] = useState(false);

    const downHandler = ({key}) => {
        if (key === keyTarget) setIsKeyPressed(true)
        console.log("EGUWFIHOWE")
    }

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        return () => {
            window.removeEventListener('keydown', downHandler);
        }
    }, []);
    return isKeyPressed;
}