

import { NextAuthOptions, User, getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google";
import { db } from "./db";
import { compare } from "bcrypt";




export const authConfig: NextAuthOptions = {
  
  adapter:PrismaAdapter(db),
  secret:process.env.NEXTAUTH_SECRET,
  session:{
    strategy: 'jwt',
  },
  

  pages:{
    signIn: '/signin',
  },
  
  
  providers: [

    CredentialsProvider({ 
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "john@mail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {

        if (!credentials?.email || !credentials?.password){
          return null;
        }

        const existingUser = await db.user.findUnique({
          where:{email:credentials?.email}
        });

        if(!existingUser){
          return null;
        }

        if(existingUser.password){
          const passwordMatch = await compare(credentials.password, existingUser.password)
        if (!passwordMatch){
          return null;
        }

        }
        

        return{
          id: `${existingUser.id}`,
          username: existingUser.username,
          email: existingUser.email
        }

        
      }
    }),
    
    
    
    
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    })
  ],

  callbacks:{
    async jwt ({token, user}){
      if(user){
        return{
          ...token,
          username: user.username, 
          name: user.name
        }
      }
      return token
    },
    async session({session, token}){
      return{
        ...session,
        user:{
          ...session.user,
          username: token.username,
          name: token.name
        }
      }
    }
    
    
    
  }
};

