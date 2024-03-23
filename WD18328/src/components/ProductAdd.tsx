import useProductMutation from "../hooks/useProductMutation";

const ProductAdd = () => {
    const { register, handleSubmit, onSubmit, formState } = useProductMutation({
        action: "CREATE",
        callback: () => {
            console.log("Đã thêm thành công");
        },
    });
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Tên sản phẩm" {...register("name")} />
                {formState.errors.name && (
                    <span style={{ color: "red" }}>This field is required</span>
                )}
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
