import { v4 as uuidv4 } from "uuid"

import { ITodo } from "./Todo";

export const todos: ITodo[] = [
    { todoId: uuidv4(), todoTitle: "Acordar cedo" },
    { todoId: uuidv4(), todoTitle: "Praticar Tai Chi" },
    { todoId: uuidv4(), todoTitle: "Praticar Yoga" },
    { todoId: uuidv4(), todoTitle: "Praticar Programação" }
]