import React, { ReactNode, createContext, useState } from "react";

type Props = {
    children: ReactNode;
};

export const CounterContext = createContext(0 as number);
const CounterContextProvider = ({ children }: Props) => {
    const [count] = useState(10);
    return (
        <div>
            <CounterContext.Provider value={count}>{children}</CounterContext.Provider>
        </div>
    );
};

export default CounterContextProvider;
