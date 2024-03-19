import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { ProductContext } from "./context/ProductContextProvider";
import { IProduct } from "./interfaces/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function App() {
    // const [products, setProducts] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [isError, setIsError] = useState("");
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             setIsLoading(true);
    //             const { data } = await axios.get(`http://localhost:3000/products`);
    //             setProducts(data);
    //             setIsLoading(false);
    //         } catch (error) {
    //             setIsError(error);
    //         }
    //     })();
    // }, []);

    // if (isLoading) return <div>Loading...</div>;
    const queryClient = useQueryClient();
    const { data, isLoading } = useQuery({
        queryKey: ["PRODUCT_KEY"],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/products`);
            return data;
        },
    });

    const mutation = useMutation({
        mutationFn: async (product: IProduct) => {
            const { data } = await axios.post(`http://localhost:3000/products`, product);
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries("PRODUCT_KEY");
        },
    });

    if (isLoading) return <div>Loading...</div>;
    return (
        <>
            <button onClick={() => mutation.mutate({ name: "Sản phẩm 2", price: 200 })}>
                Thêm sản phẩm
            </button>
            {data.map((item: IProduct, index: number) => (
                <div key={index}>{item.name}</div>
            ))}
        </>
    );
}

export default App;
