import { ReactNode, createContext, useReducer } from "react";
import { produce } from "immer";

const initialState = {
    value: 0,
};

const reducer = (state: any, action: any) => {
    console.log("action", action);
    switch (action.type) {
        case "INCREMENT":
            state.value++;
            break;
        case "DECREMENT":
            state.value--;
            break;
        case "INCREASE":
            state.value += action.payload;
            return;
        default:
            return state;
    }
};

type Props = {
    children: ReactNode;
};

export const CounterContext = createContext({} as { count: number; dispatch: any });
const CounterContextProvider = ({ children }: Props) => {
    const [count, dispatch] = useReducer(produce(reducer), initialState);
    return (
        <div>
            <CounterContext.Provider value={{ count, dispatch }}>
                {children}
            </CounterContext.Provider>
        </div>
    );
};

export default CounterContextProvider;

// npm i immer
// produce(reducer)
//
