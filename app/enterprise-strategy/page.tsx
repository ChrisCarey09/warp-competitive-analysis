import { Building, TrendingUp, Users, Clock, DollarSign, CheckCircle } from 'lucide-react'

export default function EnterpriseStrategy() {
  const discoveryQuestions = [
    {
      category: "Process Mapping",
      question: "Walk me through your deployment process from code commit to production",
      purpose: "Understand current workflow complexity and identify automation opportunities"
    },
    {
      category: "Pain Point Identification", 
      question: "Where do your developers get stuck most often?",
      purpose: "Target specific use cases where Warp provides immediate value"
    },
    {
      category: "Knowledge Management",
      question: "What happens when your senior DevOps person is on vacation?",
      purpose: "Highlight knowledge bottleneck and democratization value"
    },
    {
      category: "Standardization",
      question: "How do you ensure all developers follow the same procedures?",
      purpose: "Position Warp as workflow standardization tool"
    },
    {
      category: "Onboarding",
      question: "How long does it take a new developer to become productive?",
      purpose: "Quantify onboarding improvement ROI"
    },
    {
      category: "Tool Sprawl",
      question: "How many different tools do your developers use daily?",
      purpose: "Identify consolidation and simplification opportunities"
    }
  ]

  const roiMetrics = [
    {
      metric: "Developer Productivity",
      baseline: "40 hours/week productive time",
      improvement: "8 hours/week saved on manual tasks",
      calculation: "20% productivity gain",
      value: "$15,000/year per developer"
    },
    {
      metric: "Deployment Frequency", 
      baseline: "2 deployments/week",
      improvement: "5 deployments/week",
      calculation: "2.5x faster shipping",
      value: "Features to market 60% faster"
    },
    {
      metric: "Issue Resolution Time",
      baseline: "4 hours average",
      improvement: "1.5 hours average",
      calculation: "62% faster resolution", 
      value: "$8,000/year in reduced downtime"
    },
    {
      metric: "Onboarding Time",
      baseline: "4 weeks to productivity", 
      improvement: "1.5 weeks to productivity",
      calculation: "62% faster onboarding",
      value: "$12,000 savings per new hire"
    }
  ]

  const salesProcess = [
    {
      week: "Week 1",
      phase: "Terminal Automation",
      activities: ["Git workflow optimization", "Build process automation", "Common command templating"],
      successCriteria: "30% reduction in repetitive terminal tasks"
    },
    {
      week: "Week 2", 
      phase: "Incident Response",
      activities: ["Log analysis automation", "Debugging workflow setup", "Alert response procedures"],
      successCriteria: "50% faster issue resolution"
    },
    {
      week: "Week 3",
      phase: "Developer Onboarding", 
      activities: ["Environment setup automation", "Codebase explanation tools", "Team workflow training"],
      successCriteria: "New developers productive in <2 weeks"
    },
    {
      week: "Week 4",
      phase: "Custom Workflows",
      activities: ["Deployment pipeline integration", "Team-specific automations", "Workflow optimization"],
      successCriteria: "End-to-end workflow automation"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Strategy</h1>
        <p className="text-lg text-gray-600">
          ROI models, discovery frameworks, and sales processes for enterprise prospects
        </p>
      </div>

      <div className="bg-gradient-to-r from-warp-blue to-warp-purple rounded-lg p-6 text-white mb-8">
        <div className="flex items-center mb-3">
          <Building className="h-8 w-8 mr-3" />
          <h2 className="text-2xl font-bold">Enterprise Value Proposition</h2>
        </div>
        <p className="text-lg mb-4">
          "Transform your development organization from AI-assisted to AI-driven. 
          Warp doesn't just make developers faster - it makes your entire software delivery pipeline faster."
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white/10 rounded-lg p-3">
            <div className="font-bold">40% Faster Shipping</div>
            <div>End-to-end workflow automation</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <div className="font-bold">60% Faster Onboarding</div>
            <div>AI-guided developer ramp-up</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <div className="font-bold">75% Less Context Switching</div>
            <div>Single interface for entire workflow</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
          <div className="flex items-center mb-4">
            <Users className="h-6 w-6 text-warp-blue mr-2" />
            <h2 className="text-xl font-bold text-gray-900">Discovery Framework</h2>
          </div>
          <p className="text-gray-600 mb-4 text-sm">
            Leverage your ERP/finance background - these questions map complex workflows just like business processes.
          </p>
          <div className="space-y-4">
            {discoveryQuestions.map((q, index) => (
              <div key={index} className="border-l-4 border-warp-blue pl-4">
                <h3 className="font-semibold text-gray-900 text-sm">{q.category}</h3>
                <p className="text-gray-700 text-sm italic mb-1">"{q.question}"</p>
                <p className="text-gray-600 text-xs">{q.purpose}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
          <div className="flex items-center mb-4">
            <DollarSign className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-xl font-bold text-gray-900">ROI Calculator</h2>
          </div>
          <div className="space-y-4">
            {roiMetrics.map((metric, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{metric.metric}</h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-500">Current:</span>
                    <div className="text-gray-700">{metric.baseline}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">With Warp:</span>
                    <div className="text-gray-700">{metric.improvement}</div>
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-gray-200">
                  <div className="text-warp-blue font-semibold text-sm">{metric.calculation}</div>
                  <div className="text-green-600 font-bold">{metric.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 mb-8">
        <div className="flex items-center mb-4">
          <Clock className="h-6 w-6 text-orange-600 mr-2" />
          <h2 className="text-xl font-bold text-gray-900">30-Day Pilot Program Structure</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {salesProcess.map((phase, index) => (
            <div key={index} className="bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-lg p-4">
              <div className="text-center mb-3">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-warp-blue text-white rounded-full text-sm font-bold mb-2">
                  {index + 1}
                </div>
                <h3 className="font-bold text-gray-900">{phase.week}</h3>
                <h4 className="text-sm text-warp-blue font-semibold">{phase.phase}</h4>
              </div>
              
              <div className="mb-3">
                <h5 className="text-xs font-semibold text-gray-700 mb-1">Activities:</h5>
                <ul className="space-y-1">
                  {phase.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="text-xs text-gray-600 flex items-start">
                      <span className="text-green-500 mr-1">•</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-green-50 p-2 rounded">
                <h5 className="text-xs font-semibold text-green-700 mb-1">Success:</h5>
                <p className="text-xs text-green-600">{phase.successCriteria}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Enterprise Risk Mitigation</h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Standardized Procedures</h3>
                <p className="text-gray-600 text-xs">Enforce consistent deployment and incident response processes</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Knowledge Preservation</h3>
                <p className="text-gray-600 text-xs">Capture and democratize senior developer expertise</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Audit Trail</h3>
                <p className="text-gray-600 text-xs">Complete logging of all automated actions for compliance</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Reduced Human Error</h3>
                <p className="text-gray-600 text-xs">Eliminate manual steps prone to mistakes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Business Case Template</h2>
          <div className="bg-gray-50 p-4 rounded-lg text-sm">
            <div className="mb-3">
              <h3 className="font-semibold text-gray-900">Current State Costs</h3>
              <ul className="text-gray-600 text-xs space-y-1 mt-1">
                <li>• Tool subscriptions: $480/dev/year</li>
                <li>• Manual task overhead: 8hr/dev/week</li>
                <li>• Slow onboarding: $12k/new hire</li>
                <li>• Deployment delays: 2.5 day cycle time</li>
              </ul>
            </div>
            <div className="mb-3">
              <h3 className="font-semibold text-gray-900">Warp Investment</h3>
              <ul className="text-gray-600 text-xs space-y-1 mt-1">
                <li>• Warp subscription: [Pricing TBD]</li>
                <li>• Implementation: 30-day pilot</li>
                <li>• Training: Minimal (natural language)</li>
              </ul>
            </div>
            <div className="bg-green-50 p-3 rounded">
              <h3 className="font-semibold text-green-800">Net ROI</h3>
              <p className="text-green-700 text-xs">3x productivity gain in 6 months</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-warp-blue to-warp-purple rounded-lg p-6 text-white">
        <div className="flex items-center mb-4">
          <TrendingUp className="h-6 w-6 mr-2" />
          <h2 className="text-xl font-bold">Your ERP Background Advantage</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-semibold mb-2">What You Already Know:</h3>
            <ul className="space-y-1">
              <li>• Complex system integration challenges</li>
              <li>• Workflow transformation methodology</li>
              <li>• ROI modeling for process automation</li>
              <li>• Long sales cycles and stakeholder alignment</li>
              <li>• Enterprise change management</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">How It Applies to Warp:</h3>
            <ul className="space-y-1">
              <li>• Development toolchain = ERP modules</li>
              <li>• Workflow automation = Process optimization</li>
              <li>• Developer productivity = Operational efficiency</li>
              <li>• Tool consolidation = System integration</li>
              <li>• Change management = Developer adoption</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 bg-white/10 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Key Message</h3>
          <p className="text-sm">
            "Just like ERP transformed finance operations, Warp transforms development operations. 
            You're not buying a tool - you're implementing a new way of shipping software."
          </p>
        </div>
      </div>
    </div>
  )
}
