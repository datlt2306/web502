import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProductQuery = (id?: number | string) => {
    const { data, ...rest } = useQuery({
        queryKey: ["PRODUCT_KEY", id],
        queryFn: async () => {
            if (!id) {
                const { data } = await axios.get(`http://localhost:3000/products`);
                return data;
            } else {
                const { data } = await axios.get(`http://localhost:3000/products/${id}`);
                return data;
            }
        },
    });

    return { data, ...rest };
}

export default useProductQuery