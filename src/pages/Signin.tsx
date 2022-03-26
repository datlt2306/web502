import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../api/auth';

type FormInputs = {
    name: string,
    email: string,
    password: string | number
}
const Signin = () => {
    const { register, handleSubmit, formState} = useForm<FormInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormInputs> = async data => {
        const { data: user } = await signin(data);
        localStorage.setItem('user', JSON.stringify(user))
        // navigate('/admin/product')
    }
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register('email', {required: true})}/>
        <input type="number"{...register('password', {required: true})} />
        <button>Đăng ký</button>
    </form>
  )
}

export default Signin