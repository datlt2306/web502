import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type ProductAddProps = {
    name: string,
    onAdd: (product: TypeInputs) => void
};
type TypeInputs = {
    name: string,
    price: number
}

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors }} = useForm<TypeInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<TypeInputs> = data => {
        props.onAdd(data); 
        navigate("/admin/products")
        
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        {props.name}
        <input type="text" placeholder='Ten san pham' {...register('name')} />
        <input type="number" placeholder='Gia san pham' {...register('price')} />
        <button>Add</button>
    </form>
  )
}

export default ProductAdd