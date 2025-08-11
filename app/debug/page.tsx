'use client'

import { useSession } from 'next-auth/react'

export default function DebugPage() {
  const { data: session, status } = useSession()

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-2xl font-bold mb-4">Debug Page</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Session Status:</h2>
          <p>{status}</p>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold">Session Data:</h2>
          <pre className="bg-gray-800 p-4 rounded">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold">Environment Check:</h2>
          <p>NEXTAUTH_URL: {process.env.NEXTAUTH_URL || 'Not set'}</p>
        </div>
      </div>
    </div>
  )
}
