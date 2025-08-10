'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Terminal, Zap, Target, Shield, Building, MessageSquare, TrendingUp, Settings, LogOut } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import WarpLogo from './WarpLogo'

const navItems = [
  { href: '/', label: 'Overview', icon: Terminal },
  { href: '/plg', label: 'PLG', icon: TrendingUp },
  { href: '/plg-tooling', label: 'PLG Tooling', icon: Settings },
  { href: '/enterprise-strategy', label: 'Enterprise Strategy', icon: Building },
  { href: '/competitive-analysis', label: 'Competitive Analysis', icon: Target },
  { href: '/elevator-pitches', label: 'Elevator Pitches', icon: MessageSquare },
  { href: '/technical-differentiators', label: 'Technical Differentiators', icon: Zap },
  { href: '/battle-cards', label: 'Battle Cards', icon: Shield },
]

export default function Navigation() {
  const pathname = usePathname()
  const { data: session } = useSession()

  return (
    <nav className="bg-warp-cream border-b border-warp-border backdrop-blur-md">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <WarpLogo className="h-6 w-auto text-warp-black" />
            <div className="h-6 w-px bg-warp-border" />
            <span className="text-lg font-medium text-warp-text-primary">Sales Intelligence</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-all duration-200 ${
                      isActive
                        ? 'bg-warp-accent text-warp-bg-primary'
                        : 'text-warp-text-secondary hover:text-warp-text-primary hover:bg-warp-bg-secondary'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden lg:block">{item.label}</span>
                  </Link>
                )
              })}
            </div>
            {session && (
              <div className="flex items-center space-x-3">
                <div className="hidden md:block text-sm text-warp-text-secondary">
                  {session.user?.email}
                </div>
                <button
                  onClick={() => signOut({ callbackUrl: '/auth/signin' })}
                  className="px-3 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 text-warp-text-secondary hover:text-warp-text-primary hover:bg-warp-bg-secondary transition-all duration-200"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden lg:block">Sign Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
