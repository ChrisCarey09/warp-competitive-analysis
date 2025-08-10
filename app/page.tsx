import Link from 'next/link'
import { ArrowRight, Target, MessageSquare, Zap, Shield, Building, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Warp 2.0 Competitive Sales Intelligence
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Everything you need to position Warp 2.0 against Claude and Cursor, 
          with detailed competitive analysis, battle cards, and enterprise sales strategies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Link href="/competitive-analysis" className="group">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
            <Target className="h-12 w-12 text-warp-blue mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Analysis</h3>
            <p className="text-gray-600 mb-4">
              Deep dive into Warp vs Cursor vs Claude - features, strengths, weaknesses, and positioning matrix.
            </p>
            <div className="flex items-center text-warp-blue group-hover:text-warp-purple">
              <span className="text-sm font-medium">Explore Analysis</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </div>
          </div>
        </Link>

        <Link href="/elevator-pitches" className="group">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
            <MessageSquare className="h-12 w-12 text-warp-purple mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Elevator Pitches</h3>
            <p className="text-gray-600 mb-4">
              30-second and 60-second pitches for different scenarios - competitive, collaborative, and aggressive positioning.
            </p>
            <div className="flex items-center text-warp-purple group-hover:text-warp-blue">
              <span className="text-sm font-medium">View Pitches</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </div>
          </div>
        </Link>

        <Link href="/technical-differentiators" className="group">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
            <Zap className="h-12 w-12 text-warp-green mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Differentiators</h3>
            <p className="text-gray-600 mb-4">
              The technical capabilities that enable Warp to ship software end-to-end while competitors cannot.
            </p>
            <div className="flex items-center text-warp-green group-hover:text-warp-blue">
              <span className="text-sm font-medium">See Differentiators</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </div>
          </div>
        </Link>

        <Link href="/battle-cards" className="group">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
            <Shield className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Battle Cards</h3>
            <p className="text-gray-600 mb-4">
              Ready-to-use responses for common objections and competitive scenarios you'll face in the field.
            </p>
            <div className="flex items-center text-red-500 group-hover:text-warp-blue">
              <span className="text-sm font-medium">Arm Yourself</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </div>
          </div>
        </Link>

        <Link href="/enterprise-strategy" className="group">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
            <Building className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Strategy</h3>
            <p className="text-gray-600 mb-4">
              ROI models, discovery questions, and sales processes tailored for enterprise prospects.
            </p>
            <div className="flex items-center text-orange-500 group-hover:text-warp-blue">
              <span className="text-sm font-medium">Scale Up</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </div>
          </div>
        </Link>

        <div className="bg-gradient-to-br from-warp-blue to-warp-purple rounded-lg p-6 text-white">
          <TrendingUp className="h-12 w-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Key Insights</h3>
          <ul className="text-sm space-y-2">
            <li>• Execution capability is the #1 differentiator</li>
            <li>• Target the 60% of dev time outside the editor</li>
            <li>• Position as workflow completion, not just assistance</li>
            <li>• Enterprise ROI: 40% faster shipping, 60% faster onboarding</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Reference</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Against Cursor</h3>
            <p className="text-sm text-gray-600">
              "Cursor stops at the editor, Warp completes the workflow"
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Against Claude</h3>
            <p className="text-sm text-gray-600">
              "Claude gives advice, Warp takes action"
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Key Value Prop</h3>
            <p className="text-sm text-gray-600">
              "The only AI that actually ships software, not just suggests how to"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
