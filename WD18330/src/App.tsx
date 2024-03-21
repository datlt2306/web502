import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import "./App.css";
import { IProduct } from "./interfaces/product";
import ProductAdd from "./components/ProductAdd";

function App() {
    const queryClient = useQueryClient();
    const { data, isLoading } = useQuery({
        queryKey: ["PRODUCT_KEY"],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/products`);
            return data;
        },
    });

    const { mutate: add } = useMutation({
        mutationFn: async (product: IProduct) => {
            const { data } = await axios.post(`http://localhost:3000/products`, product);
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["PRODUCT_KEY"],
            });
        },
    });
    const { mutate: remove } = useMutation({
        mutationFn: async (id: number) => {
            const { data } = await axios.delete(`http://localhost:3000/products/${id}`);
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["PRODUCT_KEY"],
            });
        },
    });
    const { mutate: update } = useMutation({
        mutationFn: async (product: IProduct) => {
            const { data } = await axios.put(
                `http://localhost:3000/products/${product.id}`,
                product
            );
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["PRODUCT_KEY"],
            });
        },
    });

    if (isLoading) return <div>Loading...</div>;
    return (
        <>
            {data?.map((product: IProduct) => (
                <div key={product.id}>
                    <span>{product.name}</span>
                    <span>{product.price}</span>
                </div>
            ))}
            <ProductAdd />
        </>
    );
}

export default App;
