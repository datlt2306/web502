import React, { ReactNode, createContext, useState } from "react";

type Props = {
    children: ReactNode;
};

export const CounterContext = createContext({} as { count: number; setCount: any });
const CounterContextProvider = ({ children }: Props) => {
    const [count, setCount] = useState(10);
    return (
        <div>
            <CounterContext.Provider value={{ count, setCount }}>
                {children}
            </CounterContext.Provider>
        </div>
    );
};

export default CounterContextProvider;
