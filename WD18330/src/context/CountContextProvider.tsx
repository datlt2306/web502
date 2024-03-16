import React, { createContext, useReducer, useState } from "react";

import { produce } from "immer";
type Props = {
    children: React.ReactNode;
};

const initialState = {
    value: 0,
    isLoading: true,
    error: null,
};
function reducer(state: any, action: any) {
    // action = { type: "INCREASE", payload: 10}

    switch (action.type) {
        case "INCREMENT":
            state.value++;
            break;
        case "DECREMENT":
            state.value--;
            break;
        case "INCREASE":
            state.value += action.payload;
            break;
        default:
            return state;
    }
}
export const CountContext = createContext({} as any);
const CountContextProvider = ({ children }: Props) => {
    const [count, dispatch] = useReducer(produce(reducer), initialState);
    return (
        <div>
            <CountContext.Provider value={{ count, dispatch }}>{children}</CountContext.Provider>
        </div>
    );
};

export default CountContextProvider;
