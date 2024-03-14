import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContextProvider";
const Counter = () => {
    const count = useContext(CounterContext);
    return <div>Counter: {count}</div>;
};

export default Counter;
