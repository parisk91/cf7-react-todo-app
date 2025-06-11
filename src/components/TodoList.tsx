import {Trash2} from "lucide-react";

type Todo = {
    id: number;
    text: string;
}


type TodoListProps = {
    todos: Todo[];
    dispatch: React.Dispatch<{type: "DELETE"; payload: number}>;
}

const TodoList= ({todos, dispatch}: TodoListProps) => {
    const handleDelete = (id: number)=> () => {
        dispatch({type: "DELETE", payload: id});
    }
    return (
        <>
            <ul className="space-y-2">
                {todos.map(
                    todo => (
                        <li key={todo.id} className="flex items-center justify-between bg-cf-gray p-2" >
                            <span>{todo.text}</span>
                   <button
                       onClick={handleDelete(todo.id)}
                    className="text-red-400">Delete<Trash2/></button>
                </li>
                ))}
            </ul>
        </>
    )
}

export default TodoList;