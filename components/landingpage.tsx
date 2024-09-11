import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

export function Landingpage() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-[#1e3a8a] to-[#0f172a] px-4 lg:px-6 h-14 flex items-center justify-between z-50">
        <Link href="/" className="flex items-center" prefetch={false}>
          <img
            src="https://cdn.prod.website-files.com/6388a088c0a35a9c812b566a/638ee66743bb2e5e27941a6e_logo-blue.svg"
            alt="Logo"
            className="h-8"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-white text-lg font-medium hover:text-gray-300 transition-colors">
            Product
          </Link>
          <Link href="/" className="text-white text-lg font-medium hover:text-gray-300 transition-colors">
            Solutions
          </Link>
          <Link href="/" className="text-white text-lg font-medium hover:text-gray-300 transition-colors">
            Resources
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white text-lg font-medium">Menu</button>
        </div>

        {/* Sign In and Sign Up Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/signin"
            className="inline-flex h-9 items-center justify-center rounded-md bg-transparent border border-white text-white px-4 text-sm font-medium transition-all hover:bg-white hover:text-black"
            prefetch={false}
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="inline-flex h-9 items-center justify-center rounded-md bg-transparent border border-white text-white px-4 text-sm font-medium transition-all hover:bg-white hover:text-black"
            prefetch={false}
          >
            Sign Up
          </Link>
        </div>
      </header>

      <main className="pt-16"> {/* Adjusted padding-top to avoid overlap */}
        {/* Hero Section */}
        <section className="w-full min-h-screen flex flex-col justify-center py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#1e3a8a] to-[#0f172a]">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Fast, Nationwide Permitting
            </h1>
            <p className="mx-auto max-w-xl mt-6 text-lg text-white">
              Permit software for developers, builders, contractors, and more. PermitFlow handles the permit preparation, submission, and tracking nationwide — across all municipalities you’re building in.
            </p>
            <div className="mt-10">
              <Link
                href="https://www.permitflow.com/contact-us"
                className="inline-flex h-10 items-center justify-center rounded-full bg-black px-6 text-lg font-bold text-white hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out"
                prefetch={false}
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Streamlined Permitting</h2>
                <p className="mt-4 text-gray-600">
                  Our intuitive platform guides you through the permitting process, ensuring you submit the right
                  documents and meet all requirements.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <CheckIcon className="mr-2 h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">Easy Submission</h3>
                      <p className="text-gray-600">
                        Upload documents, track progress, and communicate with officials all in one place.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="mr-2 h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">Automated Notifications</h3>
                      <p className="text-gray-600">
                        Stay up-to-date on the status of your permits with real-time alerts and reminders.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="mr-2 h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">Compliance Tracking</h3>
                      <p className="text-gray-600">
                        Ensure your projects meet all local regulations and codes with our comprehensive tracking
                        system.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/dbord.jpg"
                  alt="Streamlined Permitting"
                  className="rounded-lg border-solid border border-black object-cover"
                  style={{ aspectRatio: "16/9", objectFit: "cover", width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 text-center mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">What Our Customers Say</h2>
            <p className="mt-4 text-gray-600">
              Hear from the construction professionals who have used Permit Pro to streamline their projects.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <Card className="text-left bg-white shadow-lg rounded-lg p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Sam Doe</h3>
                      <p className="text-gray-600">General Contractor</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    &quot;PermitFlow has been a game-changer for my construction business. The platform makes the permitting process so much easier and more efficient.&quot;
                  </p>
                </CardContent>
              </Card>

              <Card className="text-left bg-white shadow-lg rounded-lg p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Sarah Miller</h3>
                      <p className="text-gray-600">Architect</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    &quot;I love how PermitFlow keeps all my project documents organized and accessible. It&apos;s made my life so much easier.&quot;
                  </p>
                </CardContent>
              </Card>

              <Card className="text-left bg-white shadow-lg rounded-lg p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                      <AvatarFallback>TJ</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Tom Johnson</h3>
                      <p className="text-gray-600">Project Manager</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    &quot;PermitFlow’s automated notifications and compliance tracking have saved me so much time and hassle. I highly recommend it.&quot;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-indigo-950 text-white py-6 md:py-12 w-full">
        <div className="container max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm font-thin text-center md:text-left">
          <div className="grid gap-1">
            <h3 className="font-extrabold">Company</h3>
            <Link href="#" prefetch={false}>About Us</Link>
            <Link href="#" prefetch={false}>Our Team</Link>
            <Link href="#" prefetch={false}>Careers</Link>
            <Link href="#" prefetch={false}>News</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-extrabold">Products</h3>
            <Link href="#" prefetch={false}>Permit Pro</Link>
            <Link href="#" prefetch={false}>Compliance Tracking</Link>
            <Link href="#" prefetch={false}>Reporting</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-extrabold">Resources</h3>
            <Link href="#" prefetch={false}>Blog</Link>
            <Link href="#" prefetch={false}>Documentation</Link>
            <Link href="#" prefetch={false}>Support</Link>
            <Link href="#" prefetch={false}>FAQs</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-extrabold">Legal</h3>
            <Link href="#" prefetch={false}>Privacy Policy</Link>
            <Link href="#" prefetch={false}>Terms of Service</Link>
            <Link href="#" prefetch={false}>Cookie Policy</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-extrabold">Contact</h3>
            <Link href="#" prefetch={false}>Sales</Link>
            <Link href="#" prefetch={false}>Support</Link>
            <Link href="#" prefetch={false}>Partnerships</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
