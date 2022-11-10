import React, { ReactText, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ITodo } from "../../interfaces/todo";

type Props = {
    onAdd: (todo: any) => void;
};

const AddTodo = (props: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ITodo>();

    const onSubmit: SubmitHandler<ITodo> = (data) => {
        props.onAdd(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Thêm sản phẩm</h1>
                <input type="text" {...register("title")} />
                <input type="checkbox" {...register("completed")} /> completed
                <br />
                <button>Add</button>
            </form>
            <hr />
        </div>
    );
};

export default AddTodo;
