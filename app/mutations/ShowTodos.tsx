"use client"
import { addTodo } from "@/actions/actions";
import Todo, { ITodo } from "./Todo";
import { useEffect, experimental_useOptimistic as useOptimistic, useRef } from "react"
import { v4 as uuidv4 } from "uuid"
import { useTodoStore } from "./mutatons-context";
import CountDeleteTodos from "./CountTodos";

type ShowTodosProps = {
    todosx: ITodo[]
}

function ShowTodos({ todosx }: ShowTodosProps) {
    const { todos, setTodos, addTodos } = useTodoStore()
    useEffect(() => {
        setTodos(todosx)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const render = todos.length !== 0 ? todos : todosx

    const inputRef = useRef<HTMLFormElement>(null)
    return (
        <section className="flex w-1/2 justify-center items-center gap-2 ">
            <div className="flex flex-col w-full">
                <form ref={inputRef} action={async formData => {
                const data = formData.get("todo") as string
                inputRef.current?.reset()
                const newTodo: ITodo = {
                    todoId: uuidv4(),
                    todoTitle: data
                }
                    addTodos(newTodo)
                await addTodo(newTodo)
            }} className="border-2  mt-6 rounded p-1 flex flex-col gap-2" >
                <input placeholder="add new todo" className="p-1 text-black placeholder:italic rounded" type="text" name="todo" id="" />
                <input className="bg-blue-500 cursor-pointer p-1 rounded" type="submit" value="submit" />
            </form>
            <div className="border bg-white  flex flex-col gap-1 justify-center items-center py-2">
                    {render.map((todo) => <Todo key={todo.todoId} {...todo} />)}
            </div>

            </div>
            <CountDeleteTodos />
        </section>
    );
}

export default ShowTodos;