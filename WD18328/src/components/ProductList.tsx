import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { IProduct } from "../interfaces/product";
import { Link } from "react-router-dom";
import useProductQuery from "../hooks/useProductQuery";

const ProductList = () => {
    const { data, isLoading, isError } = useProductQuery();
    if (isLoading) return <>Loading....</>;
    if (isError) return <>Error....</>;
    return (
        <div>
            {data.map((item: IProduct, index: number) => (
                <div key={index}>
                    {item.name}
                    <Link to={`/admin/products/${item.id}/edit`}>Cập nhật</Link>
                    {/* <button onClick={() => remove(item.id!)}>Remove</button> */}
                </div>
            ))}
        </div>
    );
};

export default ProductList;
