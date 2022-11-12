import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ITodo } from "../../interfaces/todo";

type AddTodoProps = {
    onAdd: (todo: any) => void;
};

const AddTodo = (props: AddTodoProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ITodo>();

    const onSubmit: SubmitHandler<ITodo> = (data) => {};
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Thêm sản phẩm</h1>
                <input type="text" {...register("title", { required: true, minLength: 500 })} />
                {errors.title && errors.title.type === "required" && (
                    <p>Bắt buộc phải nhập trường này</p>
                )}
                {errors.title && errors.title.type === "minLength" && <p>Min length is 500</p>}
                <input type="checkbox" {...register("completed")} /> completed
                <br />
                <button>Add</button>
            </form>
            <hr />
        </div>
    );
};

export default AddTodo;
