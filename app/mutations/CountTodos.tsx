"use client"

import { deleteTodo } from "@/actions/actions";
import { useTodoStore } from "./mutatons-context";

type CountTodos = {
    todoCount: number
}

function CountDeleteTodos({ }) {

    const { todos, deleteTodos } = useTodoStore()
    const handleDeleteTodo = async () => { 
            deleteTodos()
            await deleteTodo()
     }
    return (
        <div className="text-white w-64 border-2 border-red-600 h-fit p-4 ">
            <p className="w-fit">Number of todos: <span className="text-2xl text-green-800">{todos.length}</span></p>
            <form action={handleDeleteTodo} className="text-white text-center cursor-pointer bg-red-700 px-1 rounded">
                <button type="submit">delete todos</button>
            </form>
        </div>
    );
}


export default CountDeleteTodos;