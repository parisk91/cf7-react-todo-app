import TodoForm from "./TodoForm.tsx";
import {useReducer} from "react";
import TodoList from "./TodoList.tsx";
import type {TodoProps, Action} from "../types.ts";

// type TodoProps = {
//     id: number;
//     text: string;
// }
//
// type Action =
//     | { type: "ADD" ; payload: string}
//     | { type: "DELETE" ; payload: number}

const todoReducer = (state: TodoProps[], action: Action): TodoProps[] => {
    switch (action.type) {
        // case "ADD":{
        //     const newTodo: TodoProps = {
        //         id: Date.now(),
        //         text: action.payload,
        //     }
        //     return [...state, newTodo];
        // }

        case "ADD":
            return [
                ...state,
                {
                    id:Date.now(),
                    text: action.payload,
                }
            ]

        case "DELETE":
            return state.filter(todo => todo.id !== action.payload);

        case "EDIT":
            return state.map(todo =>
            todo.id === action.payload.id
            ?{...todo, text:action.payload.newText}
            : todo
            )

        default:
            return state;
    }
};

const Todo = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    console.log(todos);

    return (
        <>
            <div className="max-w-sm mx-auto p-6">
                <h1 className="text-center">To-Do List</h1>
                <TodoForm dispatch = {dispatch}/>
                <TodoList todos={todos} dispatch={dispatch}/>
            </div>
        </>
    )
}

export default Todo