import { ReactNode, createContext, useReducer } from "react";
import { IProduct } from "../interfaces/product";
import { produce } from "immer";
type Props = {
    children: ReactNode;
};
export const ProductContext = createContext({} as any);

const initialState = {
    value: [] as IProduct[],
};
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            state.value = action.payload;
            break;
        case "DELETE_PRODUCT":
            state.value = state.value.filter((item: number) => item.id !== action.payload);
            break;
        case "ADD_PRODUCT":
            state.value.push(action.payload);
            break;
        default:
            return state;
    }
};
const ProductContextProvider = ({ children }: Props) => {
    // const [products, setProducts] = useState<IProduct[]>([]);

    // const onHanleRemove = async (id: number) => {
    //     try {
    //         await axios.delete(`http://localhost:3000/products/${id}`);
    //         setProducts(products.filter((item) => item.id !== id));
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // const onHandleAdd = async (product: IProduct) => {
    //     try {
    //         const { data } = await axios.post(`http://localhost:3000/products`, product);
    //         setProducts([...products, data]);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // const onHandleEdit = async (product: IProduct) => {
    //     try {
    //         const { data } = await axios.put(
    //             `http://localhost:3000/products/${product.id}`,
    //             product
    //         );
    //         setProducts(products.map((item) => (item.id == data.id ? data : item)));
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
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
