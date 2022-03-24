import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams} from 'react-router-dom';
import { read } from '../api/product';

type ProductEditProps = {}
type FormInputs = {
    name: string,
    price: number
}
const ProductEdit = (props: ProductEditProps) => {
    const { register, handleSubmit, formState: {errors}} = useForm<FormInputs>();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            console.log(data);
        }
        getProduct();
    }, [])



    const onSubmit: SubmitHandler<FormInputs> = data => {
        console.log(data);
        // navigate('/admin/product')
    }
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name', { required: true})} />
        { errors.name && <span>Fields is required</span>}
        <input type="number" {...register('price')} />
        <button>Update</button>
    </form>
  )
}

export default ProductEdit