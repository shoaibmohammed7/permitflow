import Link from 'next/link'

export function SessionLogin () {
    return (
        <div className="flex items-center justify-center min-h-screen bg-dark">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <p className="mb-4">Please Login to See The Dashboard</p>
            <Link href="/signin" className="text-blue-500 underline underline-offset-4 text-rose-600 hover:text-blue">
              Back to Signin
            </Link>
          </div>
        </div>
      )

}