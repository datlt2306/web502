import React, { createContext, useState } from "react";

type Props = {
    children: React.ReactNode;
};

export const CountContext = createContext({} as any);
const CountContextProvider = ({ children }: Props) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <CountContext.Provider value={{ count, setCount }}>{children}</CountContext.Provider>
        </div>
    );
};

export default CountContextProvider;
