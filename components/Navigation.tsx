'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Terminal, Zap, Target, Shield, Building, MessageSquare } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Overview', icon: Terminal },
  { href: '/competitive-analysis', label: 'Competitive Analysis', icon: Target },
  { href: '/elevator-pitches', label: 'Elevator Pitches', icon: MessageSquare },
  { href: '/technical-differentiators', label: 'Technical Differentiators', icon: Zap },
  { href: '/battle-cards', label: 'Battle Cards', icon: Shield },
  { href: '/enterprise-strategy', label: 'Enterprise Strategy', icon: Building },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Terminal className="h-8 w-8 text-warp-blue" />
            <span className="text-xl font-bold text-gray-900">Warp 2.0 Sales Intelligence</span>
          </div>
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition-colors ${
                    isActive
                      ? 'bg-warp-blue text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
