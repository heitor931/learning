export type ITodo = {
    todoId: string
    todoTitle: string
}

function Todo({ todoTitle }: ITodo) {
    return (
        <div className="bg-red-950 text-white text-center p-1 rounded w-[90%]">
            {todoTitle}
        </div>
    );
}

export default Todo;