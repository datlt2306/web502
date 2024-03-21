import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

const useProductQuery = () => {
    const { data, ...rest } = useQuery({
        queryKey: ["PRODUCT_KEY"],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/products`);
            return data;
        },
    });

    return { data, ...rest }
}
export default useProductQuery;