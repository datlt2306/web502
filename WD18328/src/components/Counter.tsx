import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContextProvider";
const Counter = () => {
    const { count, dispatch } = useContext(CounterContext);
    return (
        <div>
            Counter: {count.value}
            <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
            <button onClick={() => dispatch({ type: "INCREASE", payload: 10 })}>INCREASE</button>
        </div>
    );
};

export default Counter;
