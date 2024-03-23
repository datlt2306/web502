import { useNavigate } from "react-router-dom";
import useProductMutation from "../hooks/useProductMutation";

const ProductAdd = () => {
    const navigate = useNavigate();
    const { form, onSubmit } = useProductMutation({
        action: "CREATE",
        onSuccess: () => {
            // toast => thông báo
            alert("Bạn đã thêm sản phẩm thành công");
            navigate("/admin/products");
        },
    });
    return (
        <div>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <input type="text" placeholder="Tên sản phẩm" {...form.register("name")} />
                {form.formState.errors.name && (
                    <span style={{ color: "red" }}>This field is required</span>
                )}
                <input type="number" placeholder="Giá sản phẩm" {...form.register("price")} />
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
