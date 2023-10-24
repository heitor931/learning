import { todos } from "../app/mutations/dummyTodos"
import prisma from "./index"
async function main() {
    const data = await prisma.todo.createMany({
        data: todos
    })
}

main()