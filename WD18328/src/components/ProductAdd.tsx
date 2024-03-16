import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductProvider";
import axios from "axios";

type Inputs = {
    name: string;
    price: number;
};

const ProductAdd = () => {
    const { dispatch } = useContext(ProductContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (product) => {
        try {
            const { data } = await axios.post(`http://localhost:3000/products`, product);
            dispatch({ type: "ADD_PRODUCT", payload: data });
            navigate("/products");
        } catch (error) {
            console.log(error);
        }
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
