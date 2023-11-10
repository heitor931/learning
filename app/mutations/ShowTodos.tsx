"use client"
import { addTodo } from "@/actions/actions";
import Todo, { ITodo } from "./Todo";
import { experimental_useOptimistic as useOptimistic, useRef } from "react"
import { v4 as uuidv4 } from "uuid"

type ShowTodosProps = {
    todos: ITodo[]
}

function ShowTodos({ todos }: ShowTodosProps) {
    const [optimisticTodos, addNewOptimistic] = useOptimistic(todos, (state, newTodo: ITodo) => {
        return [...state, newTodo]
    })
    const inputRef = useRef<HTMLFormElement>(null)
    return (
        <>
            <form ref={inputRef} action={async formData => {
                const data = formData.get("todo") as string
                inputRef.current?.reset()
                const newTodo: ITodo = {
                    todoId: uuidv4(),
                    todoTitle: data
                }
                addNewOptimistic(newTodo)
                await addTodo(newTodo)
            }} className="border-2 w-1/3 mt-6 rounded p-1 flex flex-col gap-2" >
                <input placeholder="add new todo" className="p-1 text-black placeholder:italic rounded" type="text" name="todo" id="" />
                <input className="bg-blue-500 cursor-pointer p-1 rounded" type="submit" value="submit" />
            </form>
            <div className="border bg-white w-1/3 flex flex-col gap-1 justify-center items-center py-2">
                {optimisticTodos.map((todo) => <Todo key={todo.todoId} {...todo} />)}
            </div>
        </>
    );
}

export default ShowTodos;