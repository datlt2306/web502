import React from "react";

interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

type ListTodoProps = {
    todos: ITodo[];
    onRemove: (id: number) => void;
};

const ListTodo = (props: ListTodoProps) => {
    return (
        <div>
            {props.todos.map((todo) => (
                <div key={todo.id}>
                    {todo.title} <button onClick={() => props.onRemove(todo.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default ListTodo;
