"use client"
import { z } from "zod"
import { UserFormSchema } from "../models/DataSchema";

type UserForm = z.infer<typeof UserFormSchema>
function Form() {
    return (
        <form className="flex w-96 bg-blue-800 border  shadow-md p-2 rounded flex-col gap-3" action="">
            <label htmlFor="name">First Name</label>
            <input className="h-8 rounded  p-1" type="text" name="" id="" />
            <label className="h-8 rounded  p-1" htmlFor="lastname">Last Name</label>
            <input className="h-8 rounded  p-1" type="text" name="" id="" />
            <label htmlFor="email">Email</label>
            <input className="h-8 rounded  p-1" type="email" name="" id="" />
            <label htmlFor="age">age</label>
            <input className="h-8 rounded  p-1" type="number" name="" id="" />
            <label htmlFor="password">password</label>
            <input className="h-8 rounded  p-1" type="password" name="" id="" />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input className="h-8 rounded  p-1" type="password" name="" id="" />

        </form>
    );
}

export default Form;