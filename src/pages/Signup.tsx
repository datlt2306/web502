import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/auth';

type FormInputs = {
    name: string,
    email: string,
    password: string | number
}
const Signup = () => {
    const { register, handleSubmit, formState} = useForm<FormInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormInputs> = data => {
        signup(data);
        // navigate('/admin/product')
    }
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name', {required: true})}/>
        <input type="text" {...register('email', {required: true})}/>
        <input type="number"{...register('password', {required: true})} />
        <button>Đăng ký</button>
    </form>
  )
}

export default Signup