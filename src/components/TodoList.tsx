import {Edit, Trash2, Save, X, Square, CheckSquare} from "lucide-react";
import type { TodoListProps} from "../types.ts";
import {useState} from "react";

// type Todo = {
//     id: number;
//     text: string;
// }
//
//
// type TodoListProps = {
//     todos: Todo[];
//     dispatch: React.Dispatch<{type: "DELETE"; payload: number}>;
// }

const TodoList= ({todos, dispatch}: TodoListProps) => {

    const [editId, setEditId] = useState<number | null>(null);
    const [editText, setEditText] = useState("");

    const handleDelete = (id: number)=> () => {
        dispatch({type: "DELETE", payload: id});
    }

    const handleEdit = (id: number, text: string)=> () => {
        setEditId(id);
        setEditText(text);
    }

    const handleCancel = () => {
        setEditId(null);
        setEditText("");
    }

    const handleSave = (id: number) => () => {
        dispatch({type: "EDIT", payload: {id, newText: editText}});
        setEditId(null);
        setEditText("");
    }

    const handleToggle = (id: number) => () => {
        dispatch({type: "COMPLETE", payload: id});
    }

    return (
        <>
            <ul className="space-y-2">
                {todos.map(
                    todo => (
                        <li key={todo.id} className="flex items-center justify-between bg-cf-gray p-2" >
                            {editId === todo.id ? (
                                <>
                                    <div className="flex items-center justify-between">


                                    </div>

                                    <button
                                    className="text-green-500"
                                    onClick={handleToggle(todo.id)}
                                    >
                                        {todo.completed ? (
                                            <CheckSquare size={16} />
                                        ) : (
                                            <Square size={18}/>
                                            )}
                                    </button>
                                    <span>{todo.text}</span>
                                    <div className="flex flex-1">
                                        <input
                                            type="text"
                                            value={editText}
                                            onChange={(e) => setEditText(e.target.value)}
                                            className="flex-1 border rounded p-1"
                                        />
                                        <button
                                            onClick={handleSave(todo.id)}
                                            className="text-gray-600"
                                        >
                                            <Save size={18}/>
                                        </button>
                                        <button
                                            onClick={handleCancel}
                                            className="text-red-400">
                                            <X size={18}/>
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <span>{todo.text}</span>
                                    <div className="flex gap-2">
                                        <button
                                            type="button"
                                            onClick={handleEdit(todo.id, todo.text)}
                                            className="text-gray-600 hover:text-gray-800">
                                            <Edit size={18}/>
                                        </button>
                                        <button
                                            onClick={handleDelete(todo.id)}
                                            className="text-red-400">
                                            <Trash2 size={18}/>
                                        </button>
                                    </div>
                                </>


                            )}


                </li>
                ))}
            </ul>
        </>
    )
}

export default TodoList;