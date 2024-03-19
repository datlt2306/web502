import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { IProduct } from "../interfaces/product";

const ProductList = () => {
    // const [products, setProducts] = useState<IProduct[]>([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             setIsLoading(true);
    //             const { data } = await axios.get(`http://localhost:3000/products`);
    //             setProducts(data);
    //             setIsLoading(false);
    //         } catch (error) {
    //             setError(error);
    //         } finally {
    //             setError("");
    //             setIsLoading(false);
    //         }
    //     })();
    // }, []);
    // if (isLoading) return <>Loading....</>;

    const queryClient = useQueryClient();
    const { data, isLoading, isError } = useQuery({
        queryKey: ["PRODUCT_KEY"],
        queryFn: async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/products`);
                return data;
            } catch (error) {
                return error;
            }
        },
    });
    const { mutate: add, isPending } = useMutation({
        mutationFn: async (product) => {
            await axios.post(`http://localhost:3000/products`, product);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["PRODUCT_KEY"] });
        },
    });
    const { mutate: remove } = useMutation({
        mutationFn: async (id: number) => {
            await axios.delete(`http://localhost:3000/products/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["PRODUCT_KEY"] });
        },
    });
    const { mutate: edit } = useMutation({
        mutationFn: async (product: IProduct) => {
            await axios.put(`http://localhost:3000/products/${product.id}`, product);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["PRODUCT_KEY"] });
        },
    });
    if (isLoading) return <>Loading....</>;
    if (isError) return <>Error....</>;
    return (
        <div>
            <button onClick={() => add({ name: "Sản phẩm XXX", price: 200 })}>
                {isPending ? "Adding..." : "Add Product"}
            </button>

            {data.map((item: IProduct, index: number) => (
                <div key={index}>
                    {item.name}
                    <button
                        onClick={() => edit({ id: item.id, name: "Sản phẩm 3 update", price: 200 })}
                    >
                        cập nhật sản phẩm
                    </button>
                    <button onClick={() => remove(item.id!)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
