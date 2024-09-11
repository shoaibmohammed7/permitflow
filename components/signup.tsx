"use client"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"
import axios from "axios"
import { useToast } from "@/hooks/use-toast"

interface ZodError {
  path: (string | number)[];
  message: string;
}

export function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const router = useRouter();
  const [errors, setErrors] = useState<ZodError[]>([]);

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/api/user", {
        username,
        email,
        password
      });
  
      // Check if the response status is in the range of successful responses (200-299)
      if (res.status >= 200 && res.status < 300) {
        // Show a success toast before redirecting
        toast({
          title: "Registration Successful",
          description: "You have signed up successfully. Sigin to acesses Dashboard",
          variant: "default",
          className: "bg-green-500 text-white"
        });
  
        // Redirect to the signin page after a short delay
        setTimeout(() => {
          router.push("/signin");
        }, 2000); // 2 seconds delay
      }
    } catch (error: any) {
      if (error.response) {
        const { status, data } = error.response;
  
        if (status === 409) {
          // Check the specific conflict type (username or email)
          if (data.message.includes("email")) {
            toast({
              title: "Registration Error",
              description: "A user with this email already exists.",
              variant: "destructive",
            });
          } else if (data.message.includes("username")) {
            toast({
              title: "Registration Error",
              description: "A user with this username already exists.",
              variant: "destructive",
            });
          }
        } else if (status === 400) {
          // Validation errors from Zod
          setErrors(data.errors);
          data.errors.forEach((error: ZodError) => {
            toast({
              title: "Validation Error",
              description: `${error.path.join(' -> ')}: ${error.message}`,
              variant: "destructive",
            });
          });
        } else {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again.",
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Error",
          description: "An unexpected error occurred. Please try again later.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-dark">
      <Link href="/">
        <img
          src="https://cdn.prod.website-files.com/6388a088c0a35a9c812b566a/638ee66743bb2e5e27941a6e_logo-blue.svg"
          loading="eager"
          alt="Permitflow Logo"
          style={{ marginBottom: 30 }}
        />
      </Link>
      <div className="mx-auto flex max-w-[900px] flex-col items-center justify-center gap-8 rounded-2xl rounded-lg bg-muted p-8 shadow-lg md:flex-row md:gap-16 mb-12">
        <div className="flex flex-col items-start justify-center space-y-4 md:w-1/2">
          <div className="space-y-2">
            <div className="inline-block bg-black rounded-lg text-white px-3 py-1 text-sm">
              Permitting Made Easy
            </div>
            <h1 className="text-3xl font-bold tracking-tighter text-muted-foreground pt-5 md:text-4xl md:text-5xl">
              Welcome to <p style={{ display: "inline-block", color: "Black", margin: 0 }}>Permit</p>
              <p style={{ display: "inline-block", color: "#0A7AFF", margin: 0 }}>Flow</p>
            </h1>
            <p className="max-w-[500px] text-muted-foreground pt-5 pb-2 md:text-.5xl/relaxed">
              Streamline your permitting process with our user-friendly platform. Get the permits
              you need, faster than ever before.
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
              className="inline-flex h-10 w-full items-center justify-center rounded-md border border-input px-6 text-sm font-medium shadow-sm transition-colors hover:bg-dg hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
              prefetch={false}
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center space-y-4 rounded-lg bg-white p-6 md:w-1/2">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold">Sign Up </h2>
            <p className="text-muted-foreground">Create your account to get started</p>
          </div>
          <form className="w-full max-w-md space-y-4">
            <div className="space-y-4">
              {/* Username Field */}
              <div className="relative">
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  id="name"
                  type="text"
                  placeholder=" "
                  required
                  className="peer w-full px-2 pt-4 pb-2 border border-black rounded focus:outline-none focus:ring-0 focus:border-pb bg-white"
                />
                <label
                  htmlFor="name"
                  className="absolute left-2 -top-3 bg-white px-1 text-gray-800 font-light transition-all duration-200 ease-out transform scale-75 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:top-4 peer-focus:scale-75 peer-focus:-top-3 peer-focus:px-1 peer-focus:bg-white peer-focus:text-gb peer-focus:font-medium"
                >
                  Username*
                </label>
                {errors &&
                  errors.find((err: ZodError) => err.path.includes("username")) && (
                    <p className="text-red-500 text-sm">
                      {errors.find((err: ZodError) => err.path.includes("username"))?.message}
                    </p>
                  )}
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  type="email"
                  placeholder=" "
                  required
                  className="peer w-full px-2 pt-4 pb-2 border border-black rounded focus:outline-none focus:ring-0 focus:border-pb bg-white"
                />
                <label
                  htmlFor="email"
                  className="absolute left-2 -top-3 bg-white px-1 text-gray-800 font-light transition-all duration-200 ease-out transform scale-75 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:top-4 peer-focus:scale-75 peer-focus:-top-3 peer-focus:px-1 peer-focus:bg-white peer-focus:text-gb peer-focus:font-medium"
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
                  className="peer w-full px-2 pt-4 pb-2 border border-black rounded focus:outline-none focus:ring-0 focus:border-pb bg-white"
                />
                <label
                  htmlFor="password"
                  className="absolute left-2 -top-3 bg-white px-1 text-gray-800 font-light transition-all duration-200 ease-out transform scale-75 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:top-4 peer-focus:scale-75 peer-focus:-top-3 peer-focus:px-1 peer-focus:bg-white peer-focus:text-gb peer-focus:font-medium"
                >
                  Password*
                </label>
              </div>
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

            <div className="flex flex-col gap-2 sm:flex-row ">
              <Button onClick={handleSubmit} type="button" className="w-full sm:w-auto bg-blu">
                Sign Up
              </Button>
            </div>

            <br />

            <div className="flex justify-center text-sm">
              <p>
                Already have an account? &nbsp;
                <Link
                  href="/signin"
                  className="text-sm font-medium rounded-full text-blu hover:bg-blue-100  justify-center"
                  prefetch={false}
                >
                  Signin!
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
