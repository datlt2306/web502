import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContextProvider";
const Counter = () => {
    const { count, setCount } = useContext(CounterContext);
    return (
        <div>
            Counter: {count}
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
};

export default Counter;
