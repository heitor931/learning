import { z } from "zod"

export const UserFormSchema = z.object({
    firstName: z.string().min(2).max(3),
    lastName: z.string().min(2).max(3),
    email: z.string().email(),
    age: z.number().min(18).max(70),
    password: z.string().min(5).max(20),
    confirmPassword: z.string().min(5).max(20),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"]
})

