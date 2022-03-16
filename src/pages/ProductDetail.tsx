import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const ProductDetail = (props: Props) => {
    const { id } = useParams();
    console.log(id);
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail