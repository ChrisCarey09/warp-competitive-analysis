import './globals.css'
import Navigation from '../components/Navigation'

export const metadata = {
  title: 'Warp Competitive Analysis',
  description: 'Sales intelligence and competitive positioning for Warp 2.0 - The AI-powered terminal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-warp-cream">
          <Navigation />
          <main className="container mx-auto px-4 py-8 max-w-6xl">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
