import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/auth';

type TypeInputs = {
    name: string,
    email: string,
    password: string
}

const Signup = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<TypeInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<TypeInputs> = data => {
        signup(data);
        navigate("/signin");
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Tên' {...register('name')} />
        <input type="email" placeholder='Email' {...register('email')} />
        <input type="password" placeholder='Mật khẩu' {...register('password')} />
        <button>Đăng ký</button>
    </form>
  )
}

export default Signup