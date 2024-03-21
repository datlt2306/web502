import { useState } from "react";

function useCounter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const increase = (value: number) => {
        setCount(count + value);
    };

    return { count, increment, decrement, increase };
}

const Counter = () => {
    const { count, increment, decrement, increase } = useCounter();
    return (
        <div>
            Counter: {count}
            <button onClick={increment}>INCREMENT</button>
            <button onClick={decrement}>DECREMENT</button>
            <button onClick={() => increase(10)}>INCREASE</button>
        </div>
    );
};

export default Counter;
