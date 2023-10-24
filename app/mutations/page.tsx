import prisma from "@/prisma/index";
import Todo from "./Todo";
import { ITodo } from "./Todo";
import { v4 as uuidv4 } from "uuid"
import { revalidatePath } from "next/cache";

async function Mutations() {
    const data = await prisma.todo.findMany({
    })
    const todos = data as ITodo[]

    const addTodo = async (formData: FormData) => {
        "use server"
        const todo = formData.get("todo")
        console.log(todo);
        const addData = await prisma.todo.create({
            data: {
                todoId: uuidv4(),
                todoTitle: todo
            } as ITodo
        })
        revalidatePath("/mutations")
        
    }

    return (
        <div className="h-screen">
            <h1 className="text-2xl bg-orange-700 text-white px-1">This is a section to learn server actions</h1>
            <div className="flex h-screen flex-col  items-center">
                <form action={addTodo} className="border-2 w-1/3 mt-6 rounded p-1 flex flex-col gap-2" >
                    <input placeholder="add new todo" className="p-1 text-black placeholder:italic rounded" type="text" name="todo" id="" />
                    <input className="bg-blue-500 cursor-pointer p-1 rounded" type="submit" value="submit" />
                </form>
                <div className="border bg-white w-1/3 flex flex-col gap-1 justify-center items-center py-2">
                    {todos.map((todo) => <Todo key={todo.todoId} {...todo} />)}
                </div>

            </div>

        </div>
    );
}

export default Mutations;