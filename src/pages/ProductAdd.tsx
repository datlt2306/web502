import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {};
type TypeInputs = {
    name: string,
    price: number
}

const ProductAdd = (props: Props) => {
    const { register, handleSubmit, formState: { errors }} = useForm<TypeInputs>();

    const themSanpham: SubmitHandler<TypeInputs> = data => {
        console.log(data);
    }
  return (
    <form onSubmit={handleSubmit(themSanpham)}>
        <input type="text" placeholder='Ten san pham' {...register('name')} />
        <input type="number" placeholder='Gia san pham' {...register('price')} />
        <button>Add</button>
    </form>
  )
}

export default ProductAdd