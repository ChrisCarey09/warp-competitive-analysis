import { Check, X, Star } from 'lucide-react'

export default function CompetitiveAnalysis() {
  const capabilities = [
    { name: 'Code Generation', cursor: 5, claude: 4, warp: 3 },
    { name: 'Code Execution', cursor: 0, claude: 0, warp: 5 },
    { name: 'File System Access', cursor: 5, claude: 0, warp: 5 },
    { name: 'Multi-file Editing', cursor: 5, claude: 0, warp: 4 },
    { name: 'Terminal Integration', cursor: 2, claude: 0, warp: 5 },
    { name: 'DevOps/Deployment', cursor: 1, claude: 2, warp: 5 },
    { name: 'Learning Curve', cursor: 4, claude: 5, warp: 3 },
    { name: 'Team Collaboration', cursor: 3, claude: 2, warp: 4 },
  ]

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-warp-text-primary mb-4">Competitive Analysis</h1>
        <p className="text-lg text-warp-text-secondary">
          Detailed comparison of Warp 2.0 against Claude and Cursor across key capabilities
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-warp-bg-primary rounded-lg p-6 shadow-md border border-warp-border">
          <h2 className="text-xl font-bold text-warp-text-primary mb-4">Cursor</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-green-600">Strengths</h3>
              <ul className="text-sm text-warp-text-secondary mt-1 space-y-1">
                <li>• Excellent code generation</li>
                <li>• Native IDE experience</li>
                <li>• Context-aware suggestions</li>
                <li>• Multi-file operations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">Weaknesses</h3>
              <ul className="text-sm text-warp-text-secondary mt-1 space-y-1">
                <li>• No execution capability</li>
                <li>• Limited terminal integration</li>
                <li>• Editor-centric only</li>
                <li>• Another subscription fee</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-warp-bg-primary rounded-lg p-6 shadow-md border border-warp-border">
          <h2 className="text-xl font-bold text-warp-text-primary mb-4">Claude</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-green-600">Strengths</h3>
              <ul className="text-sm text-warp-text-secondary mt-1 space-y-1">
                <li>• Excellent reasoning</li>
                <li>• Broad knowledge base</li>
                <li>• No installation required</li>
                <li>• Multi-modal capabilities</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">Weaknesses</h3>
              <ul className="text-sm text-warp-text-secondary mt-1 space-y-1">
                <li>• No execution capability</li>
                <li>• Copy/paste friction</li>
                <li>• No persistent context</li>
                <li>• No file system access</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-warp-bg-primary rounded-lg p-6 border-2 border-warp-accent shadow-lg">
          <div className="flex items-center mb-4">
            <h2 className="text-xl font-bold text-warp-text-primary">Warp 2.0</h2>
            <span className="ml-2 px-2 py-1 bg-warp-accent bg-opacity-20 rounded text-xs font-medium text-warp-accent">Winner</span>
          </div>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-green-600">Strengths</h3>
              <ul className="text-sm mt-1 space-y-1 text-warp-text-secondary">
                <li>• Execution capability</li>
                <li>• Terminal-native</li>
                <li>• System integration</li>
                <li>• Multi-step automation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">Challenges</h3>
              <ul className="text-sm mt-1 space-y-1 text-warp-text-secondary">
                <li>• Learning curve for trust</li>
                <li>• Terminal-centric approach</li>
                <li>• Command-line comfort needed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-warp-bg-primary rounded-lg shadow-md border border-warp-border overflow-hidden mb-8">
        <div className="px-6 py-4 bg-warp-bg-secondary border-b border-warp-border">
          <h2 className="text-xl font-bold text-warp-text-primary">Capability Matrix</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-warp-bg-secondary">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-warp-text-tertiary uppercase tracking-wider">
                  Capability
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-warp-text-tertiary uppercase tracking-wider">
                  Cursor
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-warp-text-tertiary uppercase tracking-wider">
                  Claude
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-warp-text-primary uppercase tracking-wider bg-yellow-100">
                  Warp 2.0
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-warp-border">
              {capabilities.map((capability, index) => (
                <tr key={capability.name} className={index % 2 === 0 ? 'bg-warp-bg-primary' : 'bg-warp-bg-secondary'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-warp-text-primary">
                    {capability.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <StarRating rating={capability.cursor} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <StarRating rating={capability.claude} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center bg-blue-50">
                    <StarRating rating={capability.warp} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-warp-bg-primary rounded-lg p-6 shadow-md border border-warp-border">
          <h2 className="text-xl font-bold text-warp-text-primary mb-4">Target Markets</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-warp-accent">Cursor</h3>
              <p className="text-sm text-warp-text-secondary">
                Individual developers, small teams, frontend/full-stack developers who live in their editor
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-purple-600">Claude</h3>
              <p className="text-sm text-warp-text-secondary">
                Developers seeking architectural guidance, learning use cases, consultation without tool changes
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-green-600">Warp 2.0</h3>
              <p className="text-sm text-warp-text-secondary">
                Enterprise teams, DevOps-heavy workflows, complete development lifecycle automation
              </p>
            </div>
          </div>
        </div>

        <div className="bg-warp-bg-primary rounded-lg p-6 shadow-md border border-warp-border">
          <h2 className="text-xl font-bold text-warp-text-primary mb-4">Key Differentiator</h2>
          <div className="bg-warp-accent bg-opacity-10 p-4 rounded-lg border-2 border-warp-accent">
            <h3 className="font-bold mb-2 text-warp-accent">Execution Capability</h3>
            <p className="text-sm text-warp-text-primary">
              Warp is the only AI that doesn't just suggest what to do - it executes commands, 
              runs tests, deploys code, and completes entire workflows. This bridges the gap 
              between AI advice and actual software delivery.
            </p>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold text-warp-text-primary mb-2">This Enables:</h4>
            <ul className="text-sm text-warp-text-secondary space-y-1">
              <li>• End-to-end software shipping</li>
              <li>• Automated workflow completion</li>
              <li>• Real-time problem resolution</li>
              <li>• Single-conversation deployments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
