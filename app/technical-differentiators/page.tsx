import { Terminal, Database, GitBranch, Cog, Network, FileText } from 'lucide-react'

export default function TechnicalDifferentiators() {
  const differentiators = [
    {
      title: "Direct System Access & Execution",
      icon: Terminal,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      capabilities: [
        "Run terminal commands directly (git push, docker build, npm run deploy)",
        "Execute build scripts and trigger CI/CD pipelines", 
        "Interact with APIs and make HTTP requests",
        "Manage environment variables and configure services"
      ],
      limitation: "Cursor/Claude: Cannot execute commands or interact with external systems"
    },
    {
      title: "File System Integration",
      icon: FileText,
      color: "text-green-600", 
      bgColor: "bg-green-50",
      capabilities: [
        "Read any file in your project (configs, logs, package.json)",
        "Edit multiple files simultaneously across your codebase",
        "Create entire project structures and scaffold new services",
        "Analyze log files and build outputs for diagnostics"
      ],
      limitation: "Claude: No file system access; Cursor: Limited to editor context"
    },
    {
      title: "Workflow Automation & Chaining", 
      icon: Cog,
      color: "text-purple-600",
      bgColor: "bg-purple-50", 
      capabilities: [
        "Complete multi-step workflows in one conversation",
        "Conditional logic (if tests pass, deploy to staging)",
        "Error handling and automatic retry mechanisms", 
        "State persistence throughout sessions"
      ],
      limitation: "Cursor/Claude: Require manual execution of each suggested step"
    },
    {
      title: "Environment Awareness & Context",
      icon: Database,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      capabilities: [
        "Understands installed packages and environment variables", 
        "Git integration (knows current branch, uncommitted changes)",
        "Process management (start/stop services, monitor resources)",
        "Network access for connectivity testing and health checks"
      ],
      limitation: "Cursor/Claude: No visibility into actual system state"
    },
    {
      title: "Continuous Feedback Loops",
      icon: Network, 
      color: "text-red-600",
      bgColor: "bg-red-50",
      capabilities: [
        "Real-time command output analysis",
        "Adaptive problem-solving when commands fail",
        "Live debugging with running processes",
        "Automatic verification loops after changes"
      ],
      limitation: "Cursor/Claude: Cannot see actual results of suggested actions"
    },
    {
      title: "Development Toolchain Integration",
      icon: GitBranch,
      color: "text-indigo-600", 
      bgColor: "bg-indigo-50",
      capabilities: [
        "Version control operations (git, SVN, Mercurial)",
        "Package managers (npm, pip, composer, cargo)",
        "Build tools (webpack, gradle, maven, make)", 
        "Cloud services (AWS CLI, gcloud, azure CLI)"
      ],
      limitation: "Cursor/Claude: Cannot interact with development tools directly"
    }
  ]

  const workflowExample = [
    { step: 1, action: "User: 'Deploy version 2.1.4'", warp: "Analyzes current state", competitors: "Lists deployment steps" },
    { step: 2, action: "Version Management", warp: "Updates package.json automatically", competitors: "User manually edits files" },
    { step: 3, action: "Testing", warp: "Runs full test suite", competitors: "User runs tests manually" },
    { step: 4, action: "Build", warp: "Builds production assets", competitors: "User runs build commands" },
    { step: 5, action: "Deployment", warp: "Deploys to staging automatically", competitors: "User deploys manually" },
    { step: 6, action: "Verification", warp: "Runs smoke tests automatically", competitors: "User checks manually" },
    { step: 7, action: "Production", warp: "Deploys to production if tests pass", competitors: "User deploys manually" }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Technical Differentiators</h1>
        <p className="text-lg text-gray-600">
          The architectural capabilities that enable Warp to ship software end-to-end
        </p>
      </div>

      <div className="bg-gradient-to-r from-warp-blue to-warp-purple rounded-lg p-6 text-white mb-8">
        <h2 className="text-xl font-bold mb-2">The Fundamental Difference</h2>
        <p className="text-sm">
          Warp has direct access to your development environment - your file system, terminal, 
          and all the tools in your development toolchain. This architectural advantage allows 
          us to execute entire workflows, not just suggest them.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {differentiators.map((diff, index) => {
          const Icon = diff.icon
          return (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg ${diff.bgColor}`}>
                  <Icon className={`h-6 w-6 ${diff.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 ml-3">{diff.title}</h3>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">What Warp Can Do:</h4>
                <ul className="space-y-1">
                  {diff.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="text-sm text-gray-600 flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 p-3 rounded-lg">
                <h4 className="font-semibold text-red-700 mb-1">Competitor Limitation:</h4>
                <p className="text-sm text-red-600">{diff.limitation}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Real Workflow Comparison</h2>
        <p className="text-gray-600 mb-6">
          Here's how a typical deployment workflow differs between Warp and competitors:
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Step</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action Required</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-warp-blue uppercase tracking-wider bg-blue-50">Warp 2.0</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Cursor/Claude</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {workflowExample.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.step}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{item.action}</td>
                  <td className="px-4 py-3 text-sm text-center bg-green-50">
                    <span className="text-green-700">✓ {item.warp}</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-center">
                    <span className="text-orange-600">⚠ {item.competitors}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
          <h3 className="font-bold text-gray-900 mb-2">Result</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-warp-blue">Warp 2.0</h4>
              <p className="text-sm text-gray-600">
                One conversation, complete deployment, automated verification
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-orange-600">Cursor/Claude</h4>
              <p className="text-sm text-gray-600">
                7 manual steps, context switching, potential for human error
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Why This Matters for Software Shipping</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Software Delivery Pipeline</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="w-16 text-gray-500">Build:</span>
                <span className="text-green-600">✓ Warp executes</span>
              </div>
              <div className="flex items-center">
                <span className="w-16 text-gray-500">Test:</span>
                <span className="text-green-600">✓ Warp executes</span>
              </div>
              <div className="flex items-center">
                <span className="w-16 text-gray-500">Package:</span>
                <span className="text-green-600">✓ Warp executes</span>
              </div>
              <div className="flex items-center">
                <span className="w-16 text-gray-500">Deploy:</span>
                <span className="text-green-600">✓ Warp executes</span>
              </div>
              <div className="flex items-center">
                <span className="w-16 text-gray-500">Monitor:</span>
                <span className="text-green-600">✓ Warp executes</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Competitive Limitation</h3>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-sm text-red-700 mb-2">
                <strong>Cursor and Claude can only help with step 1</strong> - writing the code. 
                Steps 2-6 require manual execution by the developer.
              </p>
              <p className="text-sm text-red-600">
                This is why they're "productivity tools" but not "delivery tools."
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-warp-blue rounded-lg text-white">
          <h3 className="font-bold mb-2">Sales Positioning</h3>
          <p className="text-sm">
            "We're not competing on who writes code faster - we're competing on who ships software faster. 
            And that requires execution capability that our competitors simply don't have."
          </p>
        </div>
      </div>
    </div>
  )
}
