import React from "react";
import { IProduct } from "../interfaces/product";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type ProductAddProps = {
    onAdd: (product: IProduct) => void;
};
type Inputs = {
    name: string;
    price: number;
};

const ProductAdd = ({ onAdd }: ProductAddProps) => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        onAdd(data);
        navigate("/products");
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Tên sản phẩm" {...register("name")} />
                {errors.name && <span style={{ color: "red" }}>This field is required</span>}
                <input type="number" placeholder="Giá sản phẩm" {...register("price")} />
                <button>Thêm sản phẩm</button>
            </form>
        </div>
    );
};

export default ProductAdd;
