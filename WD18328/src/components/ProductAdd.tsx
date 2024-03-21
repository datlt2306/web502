import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { IProduct } from "../interfaces/product";

type Inputs = {
    name: string;
    price: number;
};

const ProductAdd = () => {
    const navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: async (product: IProduct) => {
            const { data } = await axios.post(`http://localhost:3000/products`, product);
            return data;
        },
        onSuccess: () => {
            // toast => thông báo
            alert("Bạn đã thêm sản phẩm thành công");
            navigate("/admin/products");
        },
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (product) => {
        mutation.mutate(product);
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

// Tạo form
// nhận giá trị của input thông react-hook-form: { register, handleSubmit,  }
// sử dụng useMutation để thực hiện post dữ liệu lên server
// sử dụng navigate để chuyển trang nếu thêm dữ liệu thành công
