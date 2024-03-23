import { useParams } from "react-router-dom";
import useProductQuery from "../hooks/useProductQuery";
import { useEffect } from "react";
import useProductMutation from "../hooks/useProductMutation";
const ProductEdit = () => {
    const { id } = useParams();
    // const { register, handleSubmit, reset } = useForm();
    // const queryClient = useQueryClient();

    // useQuery({
    //     queryKey: ["PRODUCT_KEY", id],
    //     queryFn: async () => {
    //         const { data } = await axios.get(`http://localhost:3000/products/${id}`);
    //         // tự động fill dữ liệu vào input, dựa theo register name
    //         // { name: "Dat", price: vô giá}
    //         reset(data);
    //         return data;
    //     },
    // });

    // const mutation = useMutation({
    //     mutationFn: async (product: IProduct) => {
    //         const { data } = await axios.put(
    //             `http://localhost:3000/products/${product.id}`,
    //             product
    //         );
    //         return data;
    //     },
    //     onSuccess: () => {},
    // });
    // const onSubmit = (product: IProduct) => {
    //     mutation.mutate(product);
    //     console.log(product);
    // };

    const { data } = useProductQuery(id);
    const { form, onSubmit } = useProductMutation({
        action: "UPDATE",
    });
    useEffect(() => {
        form.reset(data);
    }, [id, form, data]);
    return (
        <div>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <input type="text" {...form.register("name")} />
                <input type="number" {...form.register("price")} />
                <button>Thêm sản phẩm</button>
            </form>
        </div>
    );
};

export default ProductEdit;
