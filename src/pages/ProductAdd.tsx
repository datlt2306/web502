import { useForm, SubmitHandler } from "react-hook-form";
import { ProductType } from "../types/product";

type ProductAddProps = {
    onAdd: (product: ProductType) => void
}
type FormValues = {
    name: string,
    price: number,
};
const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors}} = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        props.onAdd(data)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('name', { required: true, minLength: 5})}/>
            {errors.name && errors.name.type === "required" && <span>Required</span>}
            {errors.name && errors.name.type === "minLength" && <span>Min length</span>}
            <input type="number" {...register('price')}/>
            <button>Add</button>
        </form>
    </div>
  )
}

export default ProductAdd