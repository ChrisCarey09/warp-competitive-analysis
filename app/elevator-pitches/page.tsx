import { MessageSquare, Users, Swords, Clock } from 'lucide-react'

export default function ElevatorPitches() {
  const pitches = [
    {
      title: "30-Second Collaborative Pitch",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
      content: "Claude gives you advice, Cursor helps you write code, but Warp actually gets the job done. We're the only AI that doesn't just suggest what to do - we execute it. From git operations to deployments to debugging production issues, Warp completes the entire development workflow, not just the coding part. It's like having a senior DevOps engineer who never sleeps, sitting right in your terminal.",
    },
    {
      title: "60-Second Collaborative Pitch",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
      content: "Here's the thing about developer AI tools: Claude is brilliant for advice but requires copy-paste. Cursor is amazing for writing code but stops at your editor. Both leave developers with the same problem - you still have to manually execute everything they suggest.\n\nWarp 2.0 is different. We're the AI that actually lives in your terminal and executes tasks. Need to debug a failing deployment? We don't just tell you what commands to run - we run them, analyze the output, and fix the issue. Need to onboard a new developer? We don't just explain your codebase - we set up their environment and walk them through your workflows.\n\nThink of it this way: if Claude is your AI consultant and Cursor is your AI pair programmer, Warp is your AI DevOps engineer. We're the missing piece that bridges the gap between 'here's what you should do' and 'it's done.'",
    },
    {
      title: "30-Second Aggressive Pitch",
      icon: Swords,
      color: "text-red-600",
      bgColor: "bg-red-50",
      content: "Cursor and Claude are half-solutions. Cursor writes code but can't run it. Claude gives advice but can't execute it. Warp 2.0 is the complete AI developer - we write the code, run the tests, fix the bugs, deploy to production, and debug when things break. Why juggle three tools when one can do it all?",
    },
    {
      title: "60-Second Aggressive Pitch",
      icon: Swords,
      color: "text-red-600",
      bgColor: "bg-red-50",
      content: "Let me ask you this: when you're debugging a production issue at 2 AM, do you want to copy-paste between Claude, switch to Cursor to edit files, then jump to terminal to run commands? Or do you want one AI that sees the problem, writes the fix, tests it, and deploys it?\n\nCursor makes you a faster coder. Claude makes you a smarter architect. But Warp makes you a complete developer. We're not just AI-assisted development - we're AI-driven development. From initial concept to production deployment, it's one conversation with one AI that actually gets work done.\n\nThe difference is simple: they help you think about solutions, we deliver solutions.",
    },
  ]

  const hooks = [
    "How much of your developers' day is spent not coding, but running commands, debugging builds, and managing deployments?",
    "What if your AI could actually complete those tasks instead of just suggesting them?",
    "When Claude tells you to run fifteen terminal commands, wouldn't you rather just say 'fix this' and have it happen automatically?",
    "Are you buying AI tools or AI results? Because there's a big difference.",
  ]

  const positioning = [
    {
      title: "vs. Cursor",
      message: "Cursor stops at the editor, Warp completes the workflow",
      detail: "Cursor is stuck in the editor while real development happens everywhere else. 60% of development time is outside your IDE - builds, tests, deployments, debugging, DevOps. Cursor can't touch any of that. We own the entire workflow."
    },
    {
      title: "vs. Claude",
      message: "Claude gives advice, Warp takes action",
      detail: "Claude is a consultant in a chat window. We're a developer on your team. Claude tells you what to do. We do it. The productivity difference is like having a meeting about fixing something versus actually fixing it."
    },
    {
      title: "vs. Both",
      message: "The only AI that lives where developers actually work",
      detail: "Developers spend 40%+ of time in terminal (git, builds, deployments, debugging). Neither Cursor nor Claude address this critical part of the workflow. Warp is the missing piece that completes the AI-assisted development story."
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Elevator Pitches</h1>
        <p className="text-lg text-gray-600">
          Ready-to-use pitches for different competitive scenarios and positioning strategies
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {pitches.map((pitch, index) => {
          const Icon = pitch.icon
          return (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg ${pitch.bgColor}`}>
                  <Icon className={`h-6 w-6 ${pitch.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 ml-3">{pitch.title}</h3>
              </div>
              <div className="prose prose-sm text-gray-600">
                {pitch.content.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-3 last:mb-0">{paragraph}</p>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Clock className="h-6 w-6 text-warp-blue mr-2" />
          Hook Questions
        </h2>
        <p className="text-gray-600 mb-4">Use these questions to grab attention and create urgency:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hooks.map((hook, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700 italic">"{hook}"</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Competitive Positioning Messages</h2>
        <div className="space-y-6">
          {positioning.map((pos, index) => (
            <div key={index} className="border-l-4 border-warp-blue pl-4">
              <h3 className="font-bold text-gray-900">{pos.title}</h3>
              <p className="text-warp-blue font-medium text-sm mb-2">"{pos.message}"</p>
              <p className="text-gray-600 text-sm">{pos.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-warp-blue to-warp-purple rounded-lg p-6 text-white">
        <h2 className="text-xl font-bold mb-4">The Killer Close</h2>
        <div className="bg-white/10 rounded-lg p-4">
          <p className="text-sm italic">
            "Look, every other AI tool stops at the suggestion. We're the first AI that follows through. 
            In six months, do you want your team to be faster at getting AI advice, or do you want them 
            to be faster at shipping software? Because those are very different outcomes."
          </p>
        </div>
        <div className="mt-4">
          <h3 className="font-bold mb-2">ROI Framework</h3>
          <p className="text-sm">
            "Let's do the math. Cursor costs $20/month per developer. Claude Pro is $20/month. 
            That's $480/year per developer for tools that still require manual execution. 
            Warp replaces both and actually completes the work. The ROI isn't just cost savings - 
            it's productivity multiplication."
          </p>
        </div>
      </div>
    </div>
  )
}
