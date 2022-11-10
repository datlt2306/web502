import React from "react";
import AddTodo from "../AddTodo";
import ListTodo from "../ListTodo";

type Props = {};

const Todo = (props: Props) => {
    const [todos, setTodos] = React.useState([
        { id: 1, title: "Todo 1", completed: false },
        { id: 2, title: "Todo 2", completed: false },
        { id: 3, title: "Todo 3", completed: false },
    ]);
    const onHandleRemoveTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const onHandleAddTodo = (todo: any) => {
        setTodos([...todos, todo]);
    };
    return (
        <div>
            <AddTodo onAdd={onHandleAddTodo} />
            <ListTodo todos={todos} onRemove={onHandleRemoveTodo} />
        </div>
    );
};

export default Todo;
