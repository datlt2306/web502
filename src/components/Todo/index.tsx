import React from "react";
import ListTodo from "../ListTodo";

type Props = {};

const Todo = (props: Props) => {
    const [todos, setTodos] = React.useState([
        { id: 1, title: "Todo 1", completed: false },
        { id: 2, title: "Todo 2", completed: false },
        { id: 3, title: "Todo 3", completed: false },
    ]);
    const onHandleAddTodo = (id: number) => {
        console.log("id component todo", id);
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return (
        <div>
            <ListTodo todos={todos} addTodo={onHandleAddTodo} />
        </div>
    );
};

export default Todo;
