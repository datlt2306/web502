import { useState } from "react";
import { useForm } from "react-hook-form";

const AddTodo = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log("data", data);
        const formData = new FormData();
        formData.append("file", data.image[0]);
        formData.append("upload_preset", "jkbdphzy");
        formData.append("cloud_name", "ecommercer2021");

        fetch("https://api.cloudinary.com/v1_1/ecommercer2021/image/upload", {
            method: "post",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Thêm sản phẩm</h1>
                <input type="text" {...register("name")} />
                <input type="file" {...register("image")} />
                <button>Add</button>
            </form>
            <hr />
        </div>
    );
};

export default AddTodo;
