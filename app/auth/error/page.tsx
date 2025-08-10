'use client'

import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function AuthError() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  let errorMessage = "An error occurred during authentication."

  if (error === "AccessDenied") {
    errorMessage = "Access denied. You must use a @warp.dev email or be an authorized user."
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-6 py-12">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-3xl font-bold text-white">
            Access Denied
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            {errorMessage}
          </p>
        </div>
        
        <div className="mt-8">
          <Link
            href="/auth/signin"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Try Again
          </Link>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-400">
            Contact your administrator if you believe this is an error.
          </p>
        </div>
      </div>
    </div>
  )
}
