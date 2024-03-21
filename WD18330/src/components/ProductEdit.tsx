import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { IProduct } from "../interfaces/product";
const ProductEdit = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const queryClient = useQueryClient();

    useQuery({
        queryKey: ["PRODUCT_KEY", id],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/products/${id}`);
            // tự động fill dữ liệu vào input, dựa theo register name
            // { name: "Dat", price: vô giá}
            reset(data);
            return data;
        },
    });

    const mutation = useMutation({
        mutationFn: async (product: IProduct) => {
            const { data } = await axios.put(
                `http://localhost:3000/products/${product.id}`,
                product
            );
            return data;
        },
        onSuccess: () => {},
    });
    const onSubmit = (product: IProduct) => {
        mutation.mutate(product);
        console.log(product);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} />
                <input type="number" {...register("price")} />
                <button>Thêm sản phẩm</button>
            </form>
        </div>
    );
};

export default ProductEdit;
