import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
type Props = {}
type ProductType = {
    _id: number,
    name: string,
    price: number
}

const ProductDetail = (props: Props) => {
    const { id} = useParams();
    const [product, setProduct] = useState<ProductType>(); // 1
    useEffect(() => { // 3
        const getProduct = async () => {
            const response = await fetch('http://localhost:8000/api/product/'+id);
            const data = await response.json();
            setProduct(data);
        }   
        getProduct();
    }, []);
  return ( // 2
    <div>{product?.name}</div>
  )
}

export default ProductDetail
