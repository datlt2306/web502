import { useQuery } from "@tanstack/react-query";
import { getAllProducts, getSingleProduct } from "../services/product";

const useProductQuery = (id?: number | string) => {
    const { data, ...rest } = useQuery({
        queryKey: ["PRODUCT_KEY", id],
        queryFn: async () => {
            return id ? await getSingleProduct(id) : await getAllProducts();
        },
    });

    return { data, ...rest };
}

export default useProductQuery