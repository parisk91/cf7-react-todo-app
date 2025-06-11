import {useState} from "react";
import type {TodoFormProps} from "../types.ts";

// type Action =
//     | { type: "ADD" ; payload: string}
//     | { type: "DELETE" ; payload: number}
//
// type TodoFormProps =
//     { dispatch : React.Dispatch<Action> };

const TodoForm = ({dispatch}: TodoFormProps) => {

    const [text, setText] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent)=> {
        e.preventDefault();
        if (text.trim() !== "") {
            dispatch({type: "ADD", payload: text});
            setText("");
        }
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex gap-2}">
                <input  type="text"
                        value={text}
                        onChange={handleChange}
                        className="border p-2 rounded-2xl"
                        placeholder="New Task"
                />
                <button type="submit"
                        className="bg-cf-gray text-white px-4 py-2 rounded-2xl"
                        onClick={() => {}}
                >
                    Add
                </button>
            </form>
        </>
    )
}

export default TodoForm