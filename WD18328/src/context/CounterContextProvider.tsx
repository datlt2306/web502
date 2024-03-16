import { ReactNode, createContext, useReducer } from "react";

const initialState = {
    value: 0,
};

const reducer = (state: any, action: any) => {
    console.log("action", action);
    switch (action.type) {
        case "INCREMENT":
            return { value: state.value + 1 };
        case "DECREMENT":
            return { value: state.value - 1 };
        case "INCREASE":
            return { value: state.value + action.payload };
        default:
            return state;
    }
};

type Props = {
    children: ReactNode;
};

export const CounterContext = createContext({} as { count: number; dispatch: any });
const CounterContextProvider = ({ children }: Props) => {
    const [count, dispatch] = useReducer(reducer, initialState);
    // action = { type: "INCREMENT" }
    return (
        <div>
            <CounterContext.Provider value={{ count, dispatch }}>
                {children}
            </CounterContext.Provider>
        </div>
    );
};

export default CounterContextProvider;
