import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { IProduct } from "../interfaces/product";
import axios from "axios";
const ProductAdd = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const queryClient = useQueryClient();
    const mutation = useMutation({
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
    const onSubmit = (product) => {
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

export default ProductAdd;
