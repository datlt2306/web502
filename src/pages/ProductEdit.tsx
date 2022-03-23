import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../api/product';
import { ProductType } from '../types/product';

type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number
}

const ProductEdit = (props: ProductEditProps) => {
    const { id } = useParams();
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormInputs>();
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
        }
        getProduct();
    }, []);

    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onUpdate(data);
        navigate('/admin/product');
    } 
    
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Tên sản phẩm' {...register('name')}/>
        <input type="number" placeholder='Giá sản phẩm' {...register('price')}/>
        <button>Update</button>
    </form>
  )
}

export default ProductEdit