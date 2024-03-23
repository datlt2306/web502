import React from "react";
import { useParams } from "react-router-dom";
import useProductQuery from "../hooks/useProductQuery";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../services/product";

const ProductDetail = () => {
    const { id } = useParams();
    const { data, isLoading } = useProductQuery(+id!);
    if (isLoading) return <div>Loading...</div>;
    return <div>{data?.name}</div>;
};

export default ProductDetail;
