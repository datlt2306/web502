import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import "./App.css";
import { IProduct } from "./interfaces/product";

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
            <button onClick={() => add({ name: "Sản phẩm 2", price: 200 })}>Thêm sản phẩm</button>
            {data.map((item: IProduct, index: number) => (
                <div key={index}>
                    {item.name}
                    <button onClick={() => update({ id: item.id, name: "Update", price: 200 })}>
                        Cập nhật
                    </button>
                    <button onClick={() => remove(item.id!)}>Xóa</button>
                </div>
            ))}
        </>
    );
}

export default App;
