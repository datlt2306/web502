import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { IProduct } from "../interfaces/product";
import { axiosInstance } from "../config/axios";
type useProductMutationProps = {
    action: "CREATE" | "UPDATE" | "DELETE";
}
const useProductMutation = ({ action }: useProductMutationProps) => {
    const form = useForm();
    const queryClient = useQueryClient();
    const { mutate, ...rest } = useMutation({
        mutationFn: async (product: IProduct) => {
            switch (action) {
                case "CREATE":
                    await axiosInstance.post(`http://localhost:3000/products`, product);
                    break;
                case "UPDATE":
                    await axiosInstance.put(`http://localhost:3000/products/${product.id}`, product);
                    break;
                default:
                    return null
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["PRODUCT_KEY"],
            });
        },
    });
    const onSubmit = (product: IProduct) => {
        mutate(product);
    };

    return { form, onSubmit, ...rest }
}
export default useProductMutation;