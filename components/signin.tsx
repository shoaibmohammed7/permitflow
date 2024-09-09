"use client"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { signIn } from 'next-auth/react';
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"






export function Signin() {
  const router = useRouter();
  const [email, setEmail]= useState("");
  const [password, setPassword]=useState("");
  const { toast } = useToast();
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-dark">
      <Link href="/">
      <img src="https://cdn.prod.website-files.com/6388a088c0a35a9c812b566a/638ee66743bb2e5e27941a6e_logo-blue.svg" loading="eager" alt="Permitflow Logo" style={{marginBottom:30}} ></img>
      </Link>
      <div className="mx-auto flex max-w-[900px] flex-col items-center justify-center gap-8 rounded-2xl rounded-lg bg-muted p-8 shadow-lg md:flex-row md:gap-16 mb-12" >
        <div className="flex flex-col items-start justify-center space-y-4 md:w-1/2">
          <div className="space-y-2 ">
            <div className="inline-block rounded-lg bg-black px-3 py-1  text-sm text-white">Permitting Made Easy</div>
            <h1 className="text-3xl font-bold tracking-tighter text-muted-foreground pt-5   md:text-4xl md:text-5xl">Welcome to <p style={{ display: "inline-block", color: "Black", margin: 0 }}>Permit</p>
            <p style={{ display: "inline-block", color: "#0A7AFF", margin: 0 }}>Flow</p></h1>
            <p className="max-w-[500px] text-black-foreground pt-5 pb-2 md:text-.5xl/relaxed">
              Streamline your permitting process with our user-friendly platform. Get the permits you need, faster than
              ever before.
            </p>
          </div>
          <div className="flex w-full flex-col items-start gap-4 pt-14 sm:flex-row">
            <Link
              href="https://www.permitflow.com/product"
              className="inline-flex h-10 w-full items-center justify-center rounded-md bg-blu px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
              prefetch={false}
            >
              Learn More
            </Link>
            <Link
              href="https://www.permitflow.com/contact-us"
              className="inline-flex h-10 w-full items-center justify-center rounded-md border border-input  px-6 text-sm font-medium shadow-sm transition-colors hover:bg-dg hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
              prefetch={false}
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center space-y-4 rounded-lg bg-white p-6 md:w-1/2">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold">Sign In </h2>
            <p className="text-muted-foreground">Access your account</p>
          </div>
          <form className="w-full max-w-md space-y-4">
          <div className="relative">
    <input
      onChange={(e) => setEmail(e.target.value)}
      id="email"
      type="email"
      placeholder=" "
      required
      className="peer w-full px-2 pt-4 pb-2 border border-gray-800 rounded focus:outline-none focus:ring-0 focus:border-gb"
    />
    <label
      htmlFor="email"
      className="absolute -top-3 left-2 bg-white px-1 text-gray-800 font-light transition-all duration-200 ease-in-out transform scale-75 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:top-0 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:px-1 peer-focus:bg-white peer-focus:text-gb peer-focus:font-medium"
    >
      Email*
    </label>
  </div>

  {/* Password Field */}
  <div className="relative">
    <input
      onChange={(e) => setPassword(e.target.value)}
      id="password"
      type="password"
      placeholder=" "
      required
      className="peer w-full px-2 pt-4 pb-2 border border-gray-800 rounded focus:outline-none focus:ring-0 focus:border-gb"
    />
    <label
      htmlFor="password"
      className="absolute -top-3 left-2 bg-white px-1 text-gray-800 font-light transition-all duration-200 ease-in-out transform scale-75 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:top-0 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:px-1 peer-focus:bg-white peer-focus:text-gb peer-focus:font-medium"
    >
      Password*
    </label>
  </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-medium">
                  Remember me
                </Label>
              </div>
              <Link
                href="#"
                className="text-sm font-medium underline underline-offset-4 hover:text-primary"
                prefetch={false}
              >
                Forgot password?
              </Link>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
             
              <Button onClick={async()=>{
                const signInData = await signIn('credentials',{
                  email: email,
                  password:password,
                  redirect:false
                });
                if(signInData?.error){
                  toast({
                    title: "Error",
                    description: "Email or Password Incorrect",
                    variant:"destructive"
                  })
                }else{
                  router.push('/dashboard');
                }
              }} type="button" className="w-full sm:w-auto bg-blu justify-center">
                Sign In
              </Button>
             
              <br/>
               
            </div>
            <div className="flex justify-center  text-sm">
              
              <p> Dont have an account? &nbsp;
              <Link
                href="/signup"
                className="text-sm font-medium text-blu  hover:rounded-lg  hover:bg-blue-100 justify-center"
                prefetch={false}
              >
                 Signup!
              </Link>
              </p>
              </div>
           
            <Separator className="my-4 bg-black"/>
            <button onClick={async () => {
             await signIn("google", { callbackUrl: 'http://localhost:3000/dashboard' });
            
              
            
        }} className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-slate-400 rounded-lg font-light text-md text-gray-900 hover:bg-gray-200 hover:border-gray-400 hover:shadow-lg focus:outline-none focus:ring-2 ">
          <img src="https://www.vectorlogo.zone/logos/google/google-icon.svg" className="w-5 h-5 mr-2"/>
          Login with Google</button> 
          </form>
        </div>
      </div>
    </div>
  )
}
