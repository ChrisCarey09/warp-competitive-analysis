import { Shield, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react'

export default function BattleCards() {
  const battleCards = [
    {
      objection: "We're already using Cursor and our developers love it",
      category: "Competitive",
      response: "That's great to hear! Cursor is excellent for the coding phase - we actually complement each other perfectly. Cursor helps you write better code faster, and Warp helps you ship that code reliably. Most of our enterprise customers use both - Cursor for development, Warp for everything else in their pipeline.",
      demo: "Show a complete workflow: write code → test → build → deploy → monitor",
      outcome: "Position as complementary, not replacement"
    },
    {
      objection: "We can just use ChatGPT/Claude for development help",
      category: "Competitive", 
      response: "Absolutely, and many developers do for architectural advice. But there's a fundamental difference between getting advice and getting work done. Let me show you the difference between asking Claude how to fix a deployment issue versus having Warp actually fix it for you.",
      demo: "Side-by-side problem resolution - Claude gives steps, Warp executes them",
      outcome: "Highlight execution vs advice gap"
    },
    {
      objection: "Our developers are happy with their current tools",
      category: "Status Quo",
      response: "That's great to hear. We're not asking them to replace their editors or change their workflows. Warp enhances what they're already doing in the terminal. In fact, most developers don't realize how much of their day is spent on repetitive terminal tasks until they see Warp automate them.",
      demo: "Show time-saving on common but tedious tasks (complex git operations, environment setup, debugging deployment issues)",
      outcome: "Position as enhancement, not disruption"
    },
    {
      objection: "This seems too risky - I don't want AI running commands on our systems",
      category: "Security/Risk",
      response: "I completely understand that concern. Security is paramount. Warp operates with the same permissions as the developer - we can't do anything they couldn't do manually. Plus, you have full visibility and control over every command. Think of it like having a very smart junior developer who asks before doing anything destructive.",
      demo: "Show permission controls, command preview, and rollback capabilities",
      outcome: "Address security while positioning as productivity gain"
    },
    {
      objection: "We don't have budget for another developer tool",
      category: "Budget",
      response: "Let's talk ROI. Your developers are probably spending $480/year on Cursor + Claude subscriptions, plus countless hours on manual execution. Warp consolidates that spend and multiplies productivity. If we can save each developer 2 hours per week on deployment and debugging tasks, what's that worth to your organization?",
      demo: "ROI calculator showing time savings converted to salary costs",
      outcome: "Shift from cost to investment mindset"
    },
    {
      objection: "We need to see this work in our specific environment first",
      category: "Proof",
      response: "Absolutely. That's exactly why we offer a pilot program. Let's start with your most DevOps-heavy team for 30 days. We'll measure time-to-resolution for common issues, deployment frequency, and developer satisfaction. You'll see the impact on your specific workflows before any company-wide decision.",
      demo: "Outline pilot program structure and success metrics",
      outcome: "Convert to pilot opportunity"
    },
    {
      objection: "Our team is too busy to learn another tool right now",
      category: "Adoption",
      response: "I hear this a lot, and it's exactly why Warp is different. There's no steep learning curve - developers just describe what they want to accomplish in plain English. We're not adding complexity, we're removing it. Most teams see productivity gains from day one because they're doing less manual work, not learning new interfaces.",
      demo: "Show natural language interface and immediate productivity",
      outcome: "Emphasize simplicity and immediate value"
    },
    {
      objection: "What happens when your AI makes a mistake?",
      category: "Risk Management",
      response: "Great question. First, Warp shows you exactly what it plans to do before executing. Second, we maintain complete audit logs of every action. Third, for critical operations, we always ask for confirmation. And finally, we can help you implement proper backup and rollback procedures as part of your workflow automation.",
      demo: "Show preview mode, confirmation prompts, and rollback capabilities",
      outcome: "Build confidence in safety measures"
    }
  ]

  const competitiveScenarios = [
    {
      scenario: "Prospect mentions they're evaluating Cursor",
      approach: "Collaborative Positioning",
      response: "Cursor is a great choice for the coding phase. How are you planning to handle the deployment and DevOps side of your workflow?",
      followUp: "Most teams use Cursor for writing code and Warp for shipping it. They complement each other perfectly."
    },
    {
      scenario: "Prospect is using Claude for development help",
      approach: "Execution Gap", 
      response: "Claude is incredibly smart. How much time do your developers spend copying and pasting Claude's suggestions into your terminal?",
      followUp: "What if you could skip that step entirely and have the AI execute the solutions directly?"
    },
    {
      scenario: "Prospect wants to replace all existing tools",
      approach: "Aggressive Positioning",
      response: "We can absolutely do that. While other tools make you choose between AI advice OR AI coding, we're the complete AI development platform.",
      followUp: "One conversation, one AI, complete software delivery. No more juggling multiple subscriptions."
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-warp-text-primary mb-4">Battle Cards</h1>
        <p className="text-lg text-warp-text-secondary">
          Ready-to-use responses for common objections and competitive scenarios
        </p>
      </div>

      <div className="bg-red-100 border-2 border-red-300 rounded-lg p-6 mb-8">
        <div className="flex items-center mb-2">
          <Shield className="h-6 w-6 mr-2" />
          <h2 className="text-xl font-bold text-red-700">Battle Card Strategy</h2>
        </div>
        <p className="text-sm text-red-600">
          Remember: Don't just overcome objections - use them as opportunities to reinforce 
          your key differentiator (execution capability) and demonstrate value.
        </p>
      </div>

      <div className="space-y-6 mb-8">
        {battleCards.map((card, index) => (
          <div key={index} className="bg-warp-bg-primary rounded-lg shadow-md border border-warp-border overflow-hidden">
            <div className="bg-warp-bg-secondary px-6 py-4 border-b border-warp-border">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-warp-text-primary">
                  "{card.objection}"
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  card.category === 'Competitive' ? 'bg-red-100 text-red-800' :
                  card.category === 'Security/Risk' ? 'bg-yellow-100 text-yellow-800' :
                  card.category === 'Budget' ? 'bg-orange-100 text-orange-800' :
                  card.category === 'Status Quo' ? 'bg-blue-100 text-blue-800' :
                  card.category === 'Proof' ? 'bg-purple-100 text-purple-800' :
                  card.category === 'Adoption' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {card.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-warp-text-primary">Response</h4>
                  </div>
                  <p className="text-warp-text-secondary text-sm mb-4">{card.response}</p>
                  
                  <div className="flex items-center mb-2">
                    <ArrowRight className="h-4 w-4 text-warp-accent mr-2" />
                    <h5 className="font-semibold text-warp-text-primary text-sm">Recommended Demo</h5>
                  </div>
                  <p className="text-warp-text-secondary text-xs">{card.demo}</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <AlertTriangle className="h-4 w-4 text-warp-accent mr-2" />
                    <h5 className="font-semibold text-warp-accent text-sm">Desired Outcome</h5>
                  </div>
                  <p className="text-warp-accent text-xs">{card.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-warp-bg-primary rounded-lg shadow-md border border-warp-border mb-8">
        <div className="bg-warp-bg-secondary px-6 py-4 border-b border-warp-border">
          <h2 className="text-xl font-bold text-warp-text-primary">Competitive Scenario Playbook</h2>
        </div>
        
        <div className="p-6">
          <div className="space-y-6">
            {competitiveScenarios.map((scenario, index) => (
              <div key={index} className="border-l-4 border-warp-accent pl-6">
                <h3 className="font-bold text-warp-text-primary mb-2">{scenario.scenario}</h3>
                <div className="bg-blue-50 p-4 rounded-lg mb-3">
                  <h4 className="font-semibold text-warp-accent text-sm mb-1">Approach: {scenario.approach}</h4>
                  <p className="text-warp-text-secondary text-sm italic">"{scenario.response}"</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <h5 className="font-semibold text-green-700 text-sm mb-1">Follow-up:</h5>
                  <p className="text-green-700 text-sm">{scenario.followUp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-warp-bg-primary rounded-lg p-6 shadow-md border border-warp-border">
          <h3 className="text-lg font-bold text-warp-text-primary mb-4">Quick Wins</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-warp-text-primary">Time to Value Demo</p>
                <p className="text-xs text-warp-text-secondary">Show immediate productivity gain with common task automation</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-warp-text-primary">ROI Calculator</p>
                <p className="text-xs text-warp-text-secondary">Convert time savings to dollar impact for their team size</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-warp-text-primary">Pilot Program</p>
                <p className="text-xs text-warp-text-secondary">30-day trial with their most DevOps-heavy team</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-warp-accent bg-opacity-10 border-2 border-warp-accent rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4 text-warp-accent">Remember</h3>
          <div className="space-y-3 text-sm text-warp-text-primary">
            <p>• Always lead with <strong>execution capability</strong> as the key differentiator</p>
            <p>• Use their current tools as <strong>context</strong>, not competition</p>
            <p>• Focus on <strong>outcomes</strong> (faster shipping) not features</p>
            <p>• Offer <strong>proof</strong> through pilots, not promises</p>
          </div>
        </div>
      </div>
    </div>
  )
}
