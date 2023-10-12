"use client"
import { z } from "zod"
import { UserFormSchema } from "../models/DataSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

type UserForm = z.infer<typeof UserFormSchema>
function Form() {
    const { register, handleSubmit } = useForm<UserForm>({ resolver: zodResolver(UserFormSchema) })
    const sendDataToDatabse = (data: UserForm) => {
        console.log("It worked", data);

    }
    return (
        <form onSubmit={handleSubmit(sendDataToDatabse)} className="flex w-96 text-black  bg-blue-800 border  shadow-md p-2 rounded flex-col gap-3" action="">
            <label  className="font-bold" htmlFor="name">First Name</label>
            <input {...register("firstName")} className="h-8 rounded font-bold  p-1" type="text" name="" />
            <label   className="h-8 rounded font-bold p-1" htmlFor="lastname">Last Name</label>
            <input {...register("lastName")} className="h-8 rounded  p-1" type="text" name="" />
            <label className="font-bold" htmlFor="email">Email</label>
            <input {...register("email")} className="h-8 rounded  p-1" type="email" name="" />
            <label className="font-bold" htmlFor="age">age</label>
            <input {...register("age", { valueAsNumber: true })} className="h-8 rounded  p-1" type="number" name="" />
            <label className="font-bold" htmlFor="password">password</label>
            <input {...register("password")} className="h-8 rounded  p-1" type="password" name="" />
            <label className="font-bold" htmlFor="confirmPassword">Confirm Password</label>
            <input {...register("confirmPassword")} className="h-8 rounded  p-1" type="password" name="" />
            <input className="bg-red-700 p-1 rounded text-white" type="submit" value="submit" />
        </form>
    );
}

export default Form;