import { create } from "zustand"
import { ITodo } from "./Todo"

type TodoStore = {
    todos: ITodo[]
    setTodos: (todos: ITodo[]) => void
    addTodos: (todo: ITodo) => void
    deleteTodos: () => void
  
    // countTodos: () => number
}

export const useTodoStore = create<TodoStore>()(

    (set) => ({
        todos: [],
        setTodos: (todos: ITodo[]) => set(() => ({ todos: [...todos] })),
        addTodos: (todo: ITodo) => set((state) => ({ todos: [...state.todos, todo] })),
        deleteTodos: () => set((state) => ({todos: []}))
    })
)