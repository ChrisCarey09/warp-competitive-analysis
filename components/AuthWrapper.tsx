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
  const publicRoutes = ['/auth/signin', '/auth/error', '/debug']
  const isPublicRoute = publicRoutes.includes(pathname)

  // Debug logging
  console.log('AuthWrapper Debug:', {
    status,
    hasSession: !!session,
    pathname,
    isPublicRoute,
    sessionEmail: session?.user?.email
  })

  useEffect(() => {
    console.log('AuthWrapper useEffect:', { status, hasSession: !!session, isPublicRoute, pathname })
    
    if (status === 'loading') {
      console.log('Still loading session...')
      return // Still loading
    }

    if (!session && !isPublicRoute) {
      console.log('No session, redirecting to signin')
      // Redirect to sign-in if not authenticated and trying to access protected route
      router.push('/auth/signin')
    } else if (session && isPublicRoute) {
      console.log('Has session, redirecting away from auth pages')
      // Redirect to home if authenticated and trying to access auth pages
      router.push('/')
    }
  }, [session, status, isPublicRoute, router, pathname])

  // Show loading screen while checking authentication
  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-warp-cream flex items-center justify-center">
        <div className="text-warp-gray">Loading session...</div>
      </div>
    )
  }

  // Show auth pages without navigation
  if (isPublicRoute) {
    return <>{children}</>
  }

  // Show protected content with navigation if authenticated
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

  // No session and not a public route - should redirect but show loading
  return (
    <div className="min-h-screen bg-warp-cream flex items-center justify-center">
      <div className="text-warp-gray">Redirecting to sign in...</div>
    </div>
  )
}
