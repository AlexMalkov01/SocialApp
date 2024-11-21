import React, { useState } from "react";
import style from "./counter.module.scss"


const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    } 


    return (
        <div>
            <h1 className="h1">Counter: {count}</h1>
            <button className={style.btn} onClick={handleIncrement}>Increment</button>

            
        </div>
    )
}

export default Counter;