"use server"
import { ITodo } from "@/app/mutations/Todo";
import prisma from "@/prisma/index"
import { revalidatePath } from "next/cache";

export const addTodo = async (newTodo: ITodo) => {

    try {
        await prisma.todo.create({
            data: newTodo
        })
    } catch (error) {
        revalidatePath("/mutations")
    } finally {
        revalidatePath("/mutations")
    }
}