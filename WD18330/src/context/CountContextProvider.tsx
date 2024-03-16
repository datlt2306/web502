import React, { createContext, useReducer, useState } from "react";

type Props = {
    children: React.ReactNode;
};
function reducer(state: any, action: any) {
    // action = { type: "INCREASE", payload: 10}
    if (action.type === "INCREMENT") {
        return { value: state.value + 1 };
    }
    if (action.type === "DECREMENT") {
        return { value: state.value - 1 };
    }
    if (action.type === "INCREASE") {
        return { value: state.value + action.payload };
    }
    return state;
}
export const CountContext = createContext({} as any);
const CountContextProvider = ({ children }: Props) => {
    const [count, dispatch] = useReducer(reducer, {
        value: 0,
    });
    return (
        <div>
            <CountContext.Provider value={{ count, dispatch }}>{children}</CountContext.Provider>
        </div>
    );
};

export default CountContextProvider;
