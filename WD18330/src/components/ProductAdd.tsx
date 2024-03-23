import useProductMutation from "../hooks/useProductMutation";

const ProductAdd = () => {
    const { form, onSubmit, isPending } = useProductMutation({
        action: "CREATE",
    });
    return (
        <div>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <input type="text" {...form.register("name")} />
                <input type="number" {...form.register("price")} />
                <button>{isPending ? "Creating..." : "Thêm sản phẩm"}</button>
            </form>
        </div>
    );
};

export default ProductAdd;
