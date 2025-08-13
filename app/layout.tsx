import './globals.css'
import AuthSessionProvider from '../components/SessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from '../lib/auth'
import AuthWrapper from '../components/AuthWrapper'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Warp Competitive Analysis',
  description: 'Sales intelligence and competitive positioning for Warp 2.0 - The AI-powered terminal',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body>
        <AuthSessionProvider session={session}>
          <AuthWrapper>
            {children}
          </AuthWrapper>
        </AuthSessionProvider>
        <Analytics />
      </body>
    </html>
  )
}
