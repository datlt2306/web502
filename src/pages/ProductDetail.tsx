import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { read } from '../api/product';
import { IProduct } from '../types/product';
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<IProduct>();
    useEffect(() => {
        const getProduct = async() => {
            const { data } = await read(id);
            setProduct(data)
        }
        getProduct();
    }, [id])
  return (
      // nullish : kiểm tra nếu product có dữ liệu thì cho phép truy cập vào thuộc tính name
      // ngược lại thì default null
    <div>{product?.name}</div>
  )
}

export default ProductDetail