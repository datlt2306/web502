import { produce } from "immer";
import React, { createContext, useReducer } from "react";
import { IProduct } from "../interfaces/product";
interface IProductContext {
    products: { value: IProduct[] }; // replace ProductType with the actual type of your products
    dispatch: React.Dispatch<Action>; // replace Action with the actual type of your actions
}

export const ProductContext = createContext({} as IProductContext);

type State = {
    value: IProduct[];
};
type Action =
    | { type: "SET_PRODUCTS"; payload: IProduct[] }
    | { type: "ADD_PRODUCT"; payload: IProduct }
    | { type: "REMOVE_PRODUCT"; payload: string } // assuming the id is a string
    | { type: "UPDATE_PRODUCT"; payload: IProduct };
const initialState = {
    value: [] as IProduct[],
};
const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            state.value = action.payload;
            break;
        default:
            return state;
    }
};

const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, dispatch] = useReducer(produce(reducer), initialState);
    return (
        <div>
            <ProductContext.Provider value={{ products, dispatch }}>
                {children}
            </ProductContext.Provider>
        </div>
    );
};

export default ProductContextProvider;
