import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = { // kiểu dữ liệu của từng input
    name: string,
    price: number,
  };
  
type ProductAddProps = {
    name: string,
    onAdd: (product: Inputs) => void
}
const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors}} = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs>  = (dataInput) => {
        // console.log(dataInput); // 
        props.onAdd(dataInput)
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('name')} placeholder='Tên sản phẩm' />
            <input type="number"  {...register('price')} placeholder='Giá sản phẩm' />
            <button>Thêm</button>
        </form>
    </div>
  )
}

export default ProductAdd