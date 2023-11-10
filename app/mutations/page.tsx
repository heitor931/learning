import prisma from "@/prisma/index";
import { ITodo } from "./Todo";
import ShowTodos from "./ShowTodos";

async function Mutations() {
    const data = await prisma.todo.findMany({
    })
    const todos = data as ITodo[]
    return (
        <div className="h-screen">
            <h1 className="text-2xl bg-orange-700 text-white px-1">This is a section to learn server actions</h1>
            <div className="flex h-screen flex-col  items-center">
                <ShowTodos todos={todos} />
            </div>

        </div>
    );
}

export default Mutations;