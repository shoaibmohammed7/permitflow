import { db } from "@/lib/db";
import { SignupSchema } from "@/types";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import * as z from 'zod';



// //Schema for input validation
const userSchema = z
        .object ({
            username: z.string() .min(1, 'min 5 character required') .max (100), 
            email: z.string() .min(1,'Email is required') .email( 'Invalid email'),
            password: z 
            .string ()
            .min(1, 'Password is required') 
            .min(8, 'need atleast 8 characters')
        })


export async function POST(req:Request) {
    
    try{

        const body = await req.json();
        const { email, username, password} = userSchema.parse(body);

        //check if email already exists

        const existingUserByEmail = await db.user.findUnique({
            where: {email:email}
        });

        if (existingUserByEmail){
            return NextResponse.json({user:null, message:"user with email already exists"}, {status:409})
        }

        //check username

        const existingUserByUsername = await db.user.findUnique({
            where: {username:username}
        });

        if (existingUserByUsername){
            return NextResponse.json({user:null, message:"user with username already exists"}, {status:409})
        }

        const hashedPassword = await hash(password, 10)
        const newUser = await db.user.create({
            data:{
                username,
                email,
                password : hashedPassword
            }
        });
         const { password:newUserpassword, ...rest} =newUser;

        return NextResponse.json( {user: rest, message: "user created succesfully"}, {status:201});

    } catch(error){
      if (error instanceof z.ZodError) {
        // Return validation errors
        return NextResponse.json({ errors: error.errors }, { status: 400 });
      }

        return NextResponse.json( {message: "Something went wrong"}, {status:500});


    }
}