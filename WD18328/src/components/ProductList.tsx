import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { IProduct } from "../interfaces/product";
import { Link } from "react-router-dom";

const ProductList = () => {
    // const queryClient = useQueryClient();
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
    if (isLoading) return <>Loading....</>;
    if (isError) return <>Error....</>;
    return (
        <div>
            {data.map((item: IProduct, index: number) => (
                <div key={index}>
                    {item.name}
                    <Link to={`/admin/products/${item.id}/edit`}>Cập nhật</Link>
                    {/* <button onClick={() => remove(item.id!)}>Remove</button> */}
                </div>
            ))}
        </div>
    );
};

export default ProductList;
