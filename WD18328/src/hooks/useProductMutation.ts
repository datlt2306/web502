import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "../interfaces/product";

type Inputs = {
    name: string;
    price: number;
};
type useProductMutationProps = {
    action: "CREATE" | "UPDATE" | "DELETE",
    callback?: () => void
}
const useProductMutation = ({ action, callback }: useProductMutationProps) => {
    const { mutate } = useMutation({
        mutationFn: async (product: IProduct) => {
            switch (action) {
                case "CREATE":
                    await axios.post(`http://localhost:3000/products`, product);
                    break;
                default:
                    return null
            }

        },
        onSuccess: () => {
            callback && callback();
        },
    });
    const {
        register,
        handleSubmit,
        formState
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (product) => {
        mutate(product);
    };


    return {
        mutate,
        onSubmit,
        register,
        formState,
        handleSubmit
    }
}

export default useProductMutation;