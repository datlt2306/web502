import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { IProduct } from "../interfaces/product";
import useProductQuery from "../hooks/useProductQuery";

type Inputs = {
    name: string;
    price: number;
};

const ProductEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>();

    // const { isLoading } = useQuery({
    //     queryKey: ["PRODUCT_KEY", id],
    //     queryFn: async () => {
    //         const { data } = await axios.get(`http://localhost:3000/products/${id}`);
    //         // Fill giá trị từ api vào form
    //         reset(data);
    //         return data;
    //     },
    // });
    const { isLoading } = useProductQuery(id);

    const mutation = useMutation({
        mutationFn: async (product: IProduct) => {
            const { data } = await axios.put(
                `http://localhost:3000/products/${product.id}`,
                product
            );
            return data;
        },
        onSuccess: () => {
            console.log("Update success");
        },
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        mutation.mutate(data);
        navigate("/products");
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {isLoading ? (
                    <span>Loading...</span>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Tên sản phẩm"
                            {...register("name", { required: true })}
                        />
                        {errors.name && (
                            <span style={{ color: "red" }}>This field is required</span>
                        )}
                        <input type="number" placeholder="Giá sản phẩm" {...register("price")} />
                        <button>Cập nhật sản phẩm</button>
                    </>
                )}
            </form>
        </div>
    );
};

export default ProductEdit;
