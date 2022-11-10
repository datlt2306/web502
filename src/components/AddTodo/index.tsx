import React, { ReactText, useState } from "react";

type Props = {
    onAdd: (todo: any) => void;
};

const AddTodo = (props: Props) => {
    const [value, setValue] = useState("");
    const onHandleChange = (e: any) => {
        setValue(e.target.value);
    };

    const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fakeObject = {
            id: 10,
            completed: true,
            title: value,
        };
        props.onAdd(fakeObject);
    };
    return (
        <div>
            <form onSubmit={onHandleSubmit}>
                <h1>Thêm sản phẩm</h1>
                <input type="text" onChange={onHandleChange} />
                {/* <input type="checkbox" name="completed" /> completed */}
                <br />
                <button>Add</button>
            </form>
            <hr />
        </div>
    );
};

export default AddTodo;
