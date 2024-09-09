import { z } from "zod"

export const SignupSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
    email: z.string().min(5)
});

export const SigninSchema = z.object({
    username: z.string(),
    password: z.string()
});

