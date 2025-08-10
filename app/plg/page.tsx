export default function PLGPage() {
  return (
    <div className="min-h-screen bg-warp-cream">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-warp-text-primary mb-6">
            Product-Led Growth Strategy
          </h1>
          <p className="text-xl text-warp-text-secondary max-w-3xl mx-auto">
            A comprehensive multi-channel outreach strategy to drive user acquisition, 
            engagement, and conversion for Warp 2.0's AI development capabilities.
          </p>
        </div>

        {/* Executive Summary */}
        <div className="bg-warp-bg-primary rounded-xl p-8 mb-12 border border-warp-border">
          <h2 className="text-2xl font-semibold text-warp-text-primary mb-6">Executive Summary</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-warp-accent mb-2">30 Days</div>
              <div className="text-warp-text-secondary">Sprint Duration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warp-accent mb-2">6 Channels</div>
              <div className="text-warp-text-secondary">Outreach Methods</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warp-accent mb-2">40%</div>
              <div className="text-warp-text-secondary">Target Conversion Lift</div>
            </div>
          </div>
        </div>

        {/* Key Strategy Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-warp-bg-primary rounded-xl p-6 border border-warp-border">
            <h3 className="text-xl font-semibold text-warp-text-primary mb-4">Market Education</h3>
            <p className="text-warp-text-secondary mb-4">
              Position Warp as the only AI that executes code end-to-end, not just suggests improvements.
            </p>
            <ul className="text-sm text-warp-text-secondary space-y-2">
              <li>• Technical content marketing</li>
              <li>• Developer community engagement</li>
              <li>• Thought leadership positioning</li>
            </ul>
          </div>
          
          <div className="bg-warp-bg-primary rounded-xl p-6 border border-warp-border">
            <h3 className="text-xl font-semibold text-warp-text-primary mb-4">Multi-Channel Reach</h3>
            <p className="text-warp-text-secondary mb-4">
              Target developers where they consume content and make tool decisions.
            </p>
            <ul className="text-sm text-warp-text-secondary space-y-2">
              <li>• Product Hunt launches</li>
              <li>• LinkedIn thought leadership</li>
              <li>• Reddit community engagement</li>
            </ul>
          </div>
          
          <div className="bg-warp-bg-primary rounded-xl p-6 border border-warp-border">
            <h3 className="text-xl font-semibold text-warp-text-primary mb-4">Sales Acceleration</h3>
            <p className="text-warp-text-secondary mb-4">
              Convert interest into trials with targeted SDR outreach and personalized demos.
            </p>
            <ul className="text-sm text-warp-text-secondary space-y-2">
              <li>• Personalized outreach cadences</li>
              <li>• Technical demo workflows</li>
              <li>• Enterprise trial programs</li>
            </ul>
          </div>
        </div>

        {/* 30-Day Sprint Plan */}
        <div className="bg-warp-bg-primary rounded-xl p-8 mb-12 border border-warp-border">
          <h2 className="text-2xl font-semibold text-warp-text-primary mb-6">30-Day Implementation Sprint</h2>
          
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Week 1 */}
            <div className="border-l-4 border-warp-accent pl-4">
              <h3 className="text-lg font-semibold text-warp-text-primary mb-3">Week 1: Foundation</h3>
              <ul className="text-sm text-warp-text-secondary space-y-2">
                <li>✓ Content audit & gap analysis</li>
                <li>✓ Competitor battle cards creation</li>
                <li>✓ SDR cadence development</li>
                <li>✓ Product Hunt submission prep</li>
                <li>✓ LinkedIn content calendar</li>
              </ul>
            </div>

            {/* Week 2 */}
            <div className="border-l-4 border-warp-accent pl-4">
              <h3 className="text-lg font-semibold text-warp-text-primary mb-3">Week 2: Launch</h3>
              <ul className="text-sm text-warp-text-secondary space-y-2">
                <li>🚀 Product Hunt campaign launch</li>
                <li>🚀 First wave LinkedIn posts</li>
                <li>🚀 Reddit community engagement</li>
                <li>🚀 SDR outreach begins</li>
                <li>📊 Initial metrics tracking</li>
              </ul>
            </div>

            {/* Week 3 */}
            <div className="border-l-4 border-warp-accent pl-4">
              <h3 className="text-lg font-semibold text-warp-text-primary mb-3">Week 3: Scale</h3>
              <ul className="text-sm text-warp-text-secondary space-y-2">
                <li>📈 Campaign optimization</li>
                <li>📈 Content performance analysis</li>
                <li>📈 Lead qualification scaling</li>
                <li>📈 Demo booking acceleration</li>
                <li>📈 Community feedback integration</li>
              </ul>
            </div>

            {/* Week 4 */}
            <div className="border-l-4 border-warp-accent pl-4">
              <h3 className="text-lg font-semibold text-warp-text-primary mb-3">Week 4: Optimize</h3>
              <ul className="text-sm text-warp-text-secondary space-y-2">
                <li>🎯 ROI analysis & reporting</li>
                <li>🎯 Successful channel doubling</li>
                <li>🎯 Conversion rate optimization</li>
                <li>🎯 Next sprint planning</li>
                <li>🎯 Team process refinement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Channel Strategy Breakdown */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-warp-text-primary mb-8">Multi-Channel Strategy</h2>
          
          <div className="space-y-8">
            {/* Product Hunt */}
            <div className="bg-warp-bg-primary rounded-xl p-6 border border-warp-border">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-warp-text-primary">Product Hunt Campaign</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-warp-text-primary mb-2">Launch Strategy</h4>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• 2-week pre-launch preparation</li>
                    <li>• Hunter network activation</li>
                    <li>• Media kit & demo videos</li>
                    <li>• Follow-up content series</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-warp-text-primary mb-2">Success Metrics</h4>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• Target: Top 5 product of the day</li>
                    <li>• 1,000+ upvotes</li>
                    <li>• 500+ website visits</li>
                    <li>• 50+ trial signups</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-warp-text-primary mb-2">Budget Allocation</h4>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• Media production: $2,000</li>
                    <li>• Hunter fees: $500</li>
                    <li>• Promotion budget: $1,000</li>
                    <li>• Total: $3,500</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* LinkedIn Strategy */}
            <div className="bg-warp-bg-primary rounded-xl p-6 border border-warp-border">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-warp-text-primary">LinkedIn Thought Leadership</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-warp-text-primary mb-2">Content Strategy</h4>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• "The AI That Actually Ships" series</li>
                    <li>• Developer productivity insights</li>
                    <li>• Behind-the-scenes content</li>
                    <li>• Customer success stories</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-warp-text-primary mb-2">Posting Schedule</h4>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• Mon: Technical deep-dive</li>
                    <li>• Wed: Industry insights</li>
                    <li>• Fri: Community highlights</li>
                    <li>• 3x/week consistency</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-warp-text-primary mb-2">Engagement Targets</h4>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• 500+ impressions per post</li>
                    <li>• 50+ engagements per post</li>
                    <li>• 20+ profile visits daily</li>
                    <li>• 10+ demo requests/month</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Reddit Strategy */}
            <div className="bg-warp-bg-primary rounded-xl p-6 border border-warp-border">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-orange-600 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-warp-text-primary">Reddit Community Engagement</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-warp-text-primary mb-2">Target Subreddits</h4>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• r/programming (2.4M members)</li>
                    <li>• r/webdev (800K members)</li>
                    <li>• r/MachineLearning (2.1M members)</li>
                    <li>• r/entrepreneur (1.2M members)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-warp-text-primary mb-2">Content Types</h4>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• Technical tutorials & demos</li>
                    <li>• "Show HN" style posts</li>
                    <li>• Ask Me Anything sessions</li>
                    <li>• Community problem-solving</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-warp-text-primary mb-2">Engagement Goals</h4>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• 2 high-value posts/week</li>
                    <li>• 100+ upvotes per post</li>
                    <li>• 50+ meaningful comments</li>
                    <li>• 25+ trial conversions/month</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AE vs SDR Strategy */}
        <div className="bg-warp-bg-primary rounded-xl p-8 mb-12 border border-warp-border">
          <h2 className="text-2xl font-semibold text-warp-text-primary mb-6">AE vs SDR Target Strategy</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-warp-text-primary mb-3">Account Executives (AEs)</h3>
              <div className="mb-4">
                <div className="text-sm font-medium text-warp-accent mb-2">Target: A-Tier Accounts</div>
                <ul className="text-sm text-warp-text-secondary space-y-1">
                  <li>• Enterprise accounts (500+ developers)</li>
                  <li>• Active deals in pipeline</li>
                  <li>• Complex technical requirements</li>
                  <li>• Multi-stakeholder decision process</li>
                  <li>• $50K+ ARR potential</li>
                </ul>
              </div>
              <div className="text-xs text-warp-text-secondary bg-warp-bg-secondary p-3 rounded">
                <strong>Activities:</strong> Strategic relationship building, executive alignment, technical deep dives, custom demos, contract negotiation
              </div>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold text-warp-text-primary mb-3">Sales Development Reps (SDRs)</h3>
              <div className="mb-4">
                <div className="text-sm font-medium text-warp-accent mb-2">Target: B, C, D-Tier Accounts</div>
                <ul className="text-sm text-warp-text-secondary space-y-1">
                  <li>• Free tier users ready to convert</li>
                  <li>• Small to mid-size teams (5-100 devs)</li>
                  <li>• Single decision maker</li>
                  <li>• Quick evaluation cycles</li>
                  <li>• $2K-$15K ARR potential</li>
                </ul>
              </div>
              <div className="text-xs text-warp-text-secondary bg-warp-bg-secondary p-3 rounded">
                <strong>Activities:</strong> Outbound prospecting, qualification, demo booking, trial conversion, handoff to AE if upsells
              </div>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-lg font-semibold text-warp-text-primary mb-3">Handoff Criteria</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-warp-text-primary mb-1">SDR → AE Escalation:</div>
                  <ul className="text-xs text-warp-text-secondary space-y-1">
                    <li>• Account expansion opportunity</li>
                    <li>• Multiple team involvement</li>
                    <li>• Enterprise security requirements</li>
                    <li>• Custom integration needs</li>
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-medium text-warp-text-primary mb-1">AE → SDR Support:</div>
                  <ul className="text-xs text-warp-text-secondary space-y-1">
                    <li>• Multi-touch nurture campaigns</li>
                    <li>• Champion identification</li>
                    <li>• Event follow-up coordination</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SDR Cadence */}
        <div className="bg-warp-bg-primary rounded-xl p-8 mb-12 border border-warp-border">
          <h2 className="text-2xl font-semibold text-warp-text-primary mb-6">SDR 7-Touch Outreach Cadence</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-warp-text-primary mb-4">Complete 7-Touch Sequence</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-warp-accent rounded-full flex items-center justify-center text-xs text-warp-bg-primary font-medium">1</div>
                  <div>
                    <div className="font-medium text-warp-text-primary">LinkedIn Connection + Personalized Note (Day 1)</div>
                    <div className="text-sm text-warp-text-secondary">Research their recent work, mention specific pain points</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-warp-accent rounded-full flex items-center justify-center text-xs text-warp-bg-primary font-medium">2</div>
                  <div>
                    <div className="font-medium text-warp-text-primary">Email: Technical Pain Point (Day 3)</div>
                    <div className="text-sm text-warp-text-secondary">"Noticed you work with [tech stack] - see how Warp executes end-to-end"</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-warp-accent rounded-full flex items-center justify-center text-xs text-warp-bg-primary font-medium">3</div>
                  <div>
                    <div className="font-medium text-warp-text-primary">LinkedIn Message: Value Proof (Day 7)</div>
                    <div className="text-sm text-warp-text-secondary">Share specific use case + 2-minute demo video</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-warp-accent rounded-full flex items-center justify-center text-xs text-warp-bg-primary font-medium">4</div>
                  <div>
                    <div className="font-medium text-warp-text-primary">Phone Call: Direct Outreach (Day 10)</div>
                    <div className="text-sm text-warp-text-secondary">Brief call to understand current workflow challenges</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-warp-accent rounded-full flex items-center justify-center text-xs text-warp-bg-primary font-medium">5</div>
                  <div>
                    <div className="font-medium text-warp-text-primary">Email: Social Proof + ROI (Day 14)</div>
                    <div className="text-sm text-warp-text-secondary">Case study from similar company/role with quantified benefits</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-warp-accent rounded-full flex items-center justify-center text-xs text-warp-bg-primary font-medium">6</div>
                  <div>
                    <div className="font-medium text-warp-text-primary">Video Message: Personalized Demo (Day 18)</div>
                    <div className="text-sm text-warp-text-secondary">Loom video showing Warp solving their specific tech stack challenges</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-warp-accent rounded-full flex items-center justify-center text-xs text-warp-bg-primary font-medium">7</div>
                  <div>
                    <div className="font-medium text-warp-text-primary">LinkedIn + Email: Final Value Attempt (Day 25)</div>
                    <div className="text-sm text-warp-text-secondary">"Last attempt" with exclusive trial offer and direct calendar link</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-warp-text-primary mb-4">Key Messaging Angles</h3>
              <div className="space-y-4">
                <div className="p-4 border border-warp-border rounded-lg">
                  <h4 className="font-medium text-warp-text-primary mb-2">vs. Cursor Users</h4>
                  <p className="text-sm text-warp-text-secondary">
                    "Love Cursor's suggestions? Imagine if it could also execute your deployments, run your tests, and manage your entire workflow."
                  </p>
                </div>
                <div className="p-4 border border-warp-border rounded-lg">
                  <h4 className="font-medium text-warp-text-primary mb-2">vs. Claude Users</h4>
                  <p className="text-sm text-warp-text-secondary">
                    "Claude gives great advice. Warp takes that advice and ships your code to production."
                  </p>
                </div>
                <div className="p-4 border border-warp-border rounded-lg">
                  <h4 className="font-medium text-warp-text-primary mb-2">General Developer</h4>
                  <p className="text-sm text-warp-text-secondary">
                    "Tired of context switching between your editor, terminal, and deployment tools? Warp is the only AI that handles your entire development workflow."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-warp-bg-primary rounded-xl p-8 border border-warp-border">
          <h2 className="text-2xl font-semibold text-warp-text-primary mb-6">Success Metrics & KPIs</h2>
          
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-warp-text-primary mb-3">Awareness</h3>
              <div className="space-y-2 text-sm text-warp-text-secondary">
                <div>Brand mentions: +200%</div>
                <div>Organic search: +150%</div>
                <div>Social engagement: +300%</div>
                <div>Community growth: +40%</div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold text-warp-text-primary mb-3">Lead Generation</h3>
              <div className="space-y-2 text-sm text-warp-text-secondary">
                <div>MQLs: 200+/month</div>
                <div>SQLs: 50+/month</div>
                <div>Demo requests: 100+/month</div>
                <div>Trial signups: 300+/month</div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold text-warp-text-primary mb-3">Sales Pipeline</h3>
              <div className="space-y-2 text-sm text-warp-text-secondary">
                <div>Pipeline value: $500K+</div>
                <div>Conversion rate: 15%+</div>
                <div>Sales cycle: &lt;30 days</div>
                <div>Average deal: $2,400</div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold text-warp-text-primary mb-3">Product Adoption</h3>
              <div className="space-y-2 text-sm text-warp-text-secondary">
                <div>Trial-to-paid: 25%+</div>
                <div>DAU growth: +50%</div>
                <div>Feature adoption: 70%+</div>
                <div>NPS Score: 50+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
