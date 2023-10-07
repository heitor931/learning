"use client"
import { useReducer, useState } from "react"

const initialState = {
    result: 0
}

type ReducerState = typeof initialState
enum ReducerActionTypes {
    INCREMENT,
    DECREMENT,
    MULTIPLY,
    DIVIDE
}

type ReducerAction = {
    type: ReducerActionTypes
    payload1: number
    payload2: number
}

const reducer = (state: ReducerState, action: ReducerAction): typeof initialState => {
    switch (action.type) {
        case ReducerActionTypes.INCREMENT:
            const result1 = action.payload1 + action.payload2
            return { ...state, result: result1 }
        case ReducerActionTypes.DECREMENT:
            const result2 = action.payload1 - action.payload2
            return { ...state, result: result2 }
        case ReducerActionTypes.MULTIPLY:
            const result3 = action.payload1 * action.payload2
            return { ...state, result: result3 }
        case ReducerActionTypes.DIVIDE:
            const result4 = action.payload1 / action.payload2
            return { ...state, result: result4 }

        default:
            throw new Error("something went wrong")
    }
}

function Calculator() {
    const [inputs, setInputs] = useState({
        number1: 0,
        number2: 0
    })
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="flex items-center flex-col border border-red-700 rounded gap-4 w-fit p-4">
            <h3 className="text-2xl text-red-950 font-bold bg-blue-400 items-center  w-fit px-1 rounded">The Grand Calculator</h3>
            <div className="flex items-center justify-center gap-3">
                <input onChange={(e) => setInputs({ ...inputs, number1: Number(e.target.value) })} className="h-24 text-center text-red-950 text-6xl font-bold rounded w-32" type="number" name="" id="" value={inputs.number1} />
                <input onChange={(e) => setInputs({ ...inputs, number2: Number(e.target.value) })} className="h-24 text-center w-32 text-blue-950 text-6xl font-bold rounded" type="number" name="" id="" value={inputs.number2} />
            </div>
            <div className="flex gap-3">
                <button onClick={() => dispatch({ type: ReducerActionTypes.INCREMENT, payload1: inputs.number1, payload2: inputs.number2 })} className="p-1 bg-slate-900 text-white text-xl rounded">Soma</button>
                <button onClick={() => dispatch({ type: ReducerActionTypes.DECREMENT, payload1: inputs.number1, payload2: inputs.number2 })} className="p-1 bg-slate-900 text-white text-xl rounded">Subtração</button>
                <button onClick={() => dispatch({ type: ReducerActionTypes.MULTIPLY, payload1: inputs.number1, payload2: inputs.number2 })} className="p-1 bg-slate-900 text-white text-xl rounded">Multiplicação</button>
                <button onClick={() => dispatch({ type: ReducerActionTypes.DIVIDE, payload1: inputs.number1, payload2: inputs.number2 })} className="p-1 bg-slate-900 text-white text-xl rounded">Divisão</button>
            </div>
            <div className="bg-white rounded self-center flex items-center justify-center border h-32 w-64">
                <p className="text-green-600 text-6xl font-bold">{state.result}</p>
            </div>

        </div>
    );
}

export default Calculator;