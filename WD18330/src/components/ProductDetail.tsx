import { useParams } from "react-router-dom";
import useProductQuery from "../hooks/useProductQuery";

const ProductDetail = () => {
    const { id } = useParams();
    const { data, isLoading } = useProductQuery(+id!);
    if (isLoading) return <div>Loading...</div>;
    return <div>{data?.name}</div>;
};

export default ProductDetail;
