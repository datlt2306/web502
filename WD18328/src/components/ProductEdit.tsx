import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProductMutation from "../hooks/useProductMutation";
import useProductQuery from "../hooks/useProductQuery";

const ProductEdit = () => {
    const { id } = useParams();
    const { data, isLoading } = useProductQuery(id);
    const { form, onSubmit } = useProductMutation({
        action: "UPDATE",
        onSuccess: () => {
            console.log("Update success");
        },
    });
    useEffect(() => {
        form.reset(data);
    }, [id, form, data]);
    return (
        <div>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                {isLoading ? (
                    <span>Loading...</span>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Tên sản phẩm"
                            {...form.register("name", { required: true })}
                        />
                        {form.formState.errors.name && (
                            <span style={{ color: "red" }}>This field is required</span>
                        )}
                        <input
                            type="number"
                            placeholder="Giá sản phẩm"
                            {...form.register("price")}
                        />
                        <button>Cập nhật sản phẩm</button>
                    </>
                )}
            </form>
        </div>
    );
};

export default ProductEdit;
