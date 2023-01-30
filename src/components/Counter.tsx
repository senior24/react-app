import React, {useState} from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, seCount] = useState(0);

    const increment = () => {
        seCount(count + 1)
    }

    return (
        <div className={classes.button}>
            <h1>Счётчик</h1>
            <button onClick={increment}>increment</button>
            <span>{count}</span>
        </div>
    );
};

export default Counter;