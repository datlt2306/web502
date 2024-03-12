import axios from "axios";
import React, { useEffect } from "react";
import { IProduct } from "../interfaces/product";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
type ProductAddProps = {
    onEdit: (product: IProduct) => void;
};
type Inputs = {
    name: string;
    price: number;
};

const ProductEdit = ({ onEdit }: ProductAddProps) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>();

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:8080/api/products/${id}`);
            reset(data);
        })();
    }, []);
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        onEdit(data);
        navigate("/products");
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Tên sản phẩm"
                    {...register("name", { required: true })}
                />
                {errors.name && <span style={{ color: "red" }}>This field is required</span>}
                <input type="number" placeholder="Giá sản phẩm" {...register("price")} />
                <button>Cập nhật sản phẩm</button>
            </form>
        </div>
    );
};

export default ProductEdit;
