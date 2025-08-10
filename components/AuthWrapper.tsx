'use client'

import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Navigation from './Navigation'

interface AuthWrapperProps {
  children: React.ReactNode
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const { data: session, status } = useSession()
  const pathname = usePathname()
  const router = useRouter()

  // Public routes that don't require authentication
  const publicRoutes = ['/auth/signin', '/auth/error']
  const isPublicRoute = publicRoutes.includes(pathname)

  useEffect(() => {
    if (status === 'loading') return // Still loading

    if (!session && !isPublicRoute) {
      // Redirect to sign-in if not authenticated and trying to access protected route
      router.push('/auth/signin')
    } else if (session && isPublicRoute) {
      // Redirect to home if authenticated and trying to access auth pages
      router.push('/')
    }
  }, [session, status, isPublicRoute, router])

  // Show loading screen while checking authentication
  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-warp-cream flex items-center justify-center">
        <div className="text-warp-gray">Loading...</div>
      </div>
    )
  }

  // Show auth pages without navigation
  if (isPublicRoute) {
    return <>{children}</>
  }

  // Show protected content with navigation
  if (session) {
    return (
      <div className="min-h-screen bg-warp-cream">
        <Navigation />
        <main className="container mx-auto px-4 py-8 max-w-6xl">
          {children}
        </main>
      </div>
    )
  }

  // Show loading while redirecting
  return (
    <div className="min-h-screen bg-warp-cream flex items-center justify-center">
      <div className="text-warp-gray">Redirecting...</div>
    </div>
  )
}
