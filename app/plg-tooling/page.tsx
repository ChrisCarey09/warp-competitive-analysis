export default function PLGToolingPage() {
  return (
    <div className="min-h-screen bg-warp-cream">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-warp-text-primary mb-6">
            PLG Tooling Implementation
          </h1>
          <p className="text-xl text-warp-text-secondary max-w-3xl mx-auto">
            Complete technology stack and implementation strategy for successful 
            product-led growth operations, analytics, and sales enablement.
          </p>
        </div>

        {/* Implementation Overview */}
        <div className="bg-warp-bg-primary rounded-xl p-8 mb-12 border border-warp-border">
          <h2 className="text-2xl font-semibold text-warp-text-primary mb-6">Implementation Overview</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-warp-accent mb-2">12 Tools</div>
              <div className="text-warp-text-secondary">Core Platform</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warp-accent mb-2">6 Weeks</div>
              <div className="text-warp-text-secondary">Implementation Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warp-accent mb-2">$8-15K/mo</div>
              <div className="text-warp-text-secondary">Operating Cost Range</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warp-accent mb-2">4x ROI</div>
              <div className="text-warp-text-secondary">Expected Return</div>
            </div>
          </div>
        </div>

        {/* Core CRM & Sales Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-warp-text-primary mb-8">Core CRM & Sales Stack</h2>
          
          <div className="space-y-8">
            {/* HubSpot CRM */}
            <div className="bg-warp-bg-primary rounded-xl p-6 border border-warp-border">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-warp-text-primary">HubSpot CRM (Primary)</h3>
                <span className="ml-auto text-sm font-medium text-warp-accent">$1,600/mo</span>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-warp-text-primary mb-2">Core Features</h4>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• Contact & company management</li>
                    <li>• Deal pipeline tracking</li>
                    <li>• Email sequences & automation</li>
                    <li>• Landing page builder</li>
                    <li>• Lead scoring & qualification</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-warp-text-primary mb-2">Implementation</h4>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• Week 1: Initial setup & data import</li>
                    <li>• Week 2: Pipeline customization</li>
                    <li>• Week 3: Email template creation</li>
                    <li>• Week 4: Automation workflows</li>
                    <li>• Week 5: Team training & testing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-warp-text-primary mb-2">Success Metrics</h4>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• 100% lead capture accuracy</li>
                    <li>• &lt;24hr lead response time</li>
                    <li>• 85%+ data quality score</li>
                    <li>• 50%+ email open rates</li>
                    <li>• 15%+ conversion rate</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sales Engagement Platform */}
            <div className="bg-warp-bg-primary rounded-xl p-6 border border-warp-border">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-warp-text-primary">Sales Engagement Platform</h3>
                <span className="ml-auto text-sm font-medium text-warp-accent">Options</span>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-warp-border rounded-lg p-4">
                  <h4 className="font-medium text-warp-text-primary mb-2">Outreach.io (Recommended)</h4>
                  <div className="text-sm text-warp-accent mb-2">$100/user/month</div>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• Multi-channel sequencing</li>
                    <li>• Advanced analytics</li>
                    <li>• A/B testing capabilities</li>
                    <li>• Salesforce/HubSpot integration</li>
                    <li>• Call recording & analytics</li>
                  </ul>
                </div>
                <div className="border border-warp-border rounded-lg p-4">
                  <h4 className="font-medium text-warp-text-primary mb-2">SalesLoft</h4>
                  <div className="text-sm text-warp-accent mb-2">$125/user/month</div>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• Rhythm workflow automation</li>
                    <li>• Advanced email tracking</li>
                    <li>• Social selling integration</li>
                    <li>• Conversation intelligence</li>
                    <li>• Pipeline generation focus</li>
                  </ul>
                </div>
                <div className="border border-warp-border rounded-lg p-4">
                  <h4 className="font-medium text-warp-text-primary mb-2">Apollo.io (Budget)</h4>
                  <div className="text-sm text-warp-accent mb-2">$79/user/month</div>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• Built-in prospect database</li>
                    <li>• Email & LinkedIn automation</li>
                    <li>• Basic analytics</li>
                    <li>• Contact enrichment</li>
                    <li>• Good for startups</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marketing Automation Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-warp-text-primary mb-8">Marketing Automation Stack</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Marketing Options */}
            <div className="space-y-6">
              <div className="bg-warp-bg-primary rounded-xl p-6 border border-warp-border">
                <h3 className="text-lg font-semibold text-warp-text-primary mb-4">Marketing Automation Options</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium text-warp-text-primary">HubSpot Marketing Hub</h4>
                    <div className="text-sm text-warp-accent mb-1">$800/month</div>
                    <p className="text-sm text-warp-text-secondary">Integrated with CRM, email marketing, landing pages, social media scheduling</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium text-warp-text-primary">Marketo Engage</h4>
                    <div className="text-sm text-warp-accent mb-1">$1,195/month</div>
                    <p className="text-sm text-warp-text-secondary">Advanced lead scoring, behavioral tracking, enterprise-grade automation</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium text-warp-text-primary">Pardot (Salesforce)</h4>
                    <div className="text-sm text-warp-accent mb-1">$1,250/month</div>
                    <p className="text-sm text-warp-text-secondary">B2B focused, ROI reporting, Salesforce native integration</p>
                  </div>
                </div>
              </div>

              <div className="bg-warp-bg-primary rounded-xl p-6 border border-warp-border">
                <h3 className="text-lg font-semibold text-warp-text-primary mb-4">Content & Social Tools</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-warp-text-primary">Buffer</div>
                      <div className="text-sm text-warp-text-secondary">Social media scheduling</div>
                    </div>
                    <div className="text-sm font-medium text-warp-accent">$99/mo</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-warp-text-primary">Canva Pro</div>
                      <div className="text-sm text-warp-text-secondary">Design & content creation</div>
                    </div>
                    <div className="text-sm font-medium text-warp-accent">$45/mo</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-warp-text-primary">Loom Business</div>
                      <div className="text-sm text-warp-text-secondary">Video messaging & demos</div>
                    </div>
                    <div className="text-sm font-medium text-warp-accent">$96/mo</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Account-Based Marketing */}
            <div className="space-y-6">
              <div className="bg-warp-bg-primary rounded-xl p-6 border border-warp-border">
                <h3 className="text-lg font-semibold text-warp-text-primary mb-4">Account-Based Marketing</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-medium text-warp-text-primary">Demandbase (Recommended)</h4>
                    <div className="text-sm text-warp-accent mb-1">$2,000/month</div>
                    <ul className="text-sm text-warp-text-secondary space-y-1">
                      <li>• Account identification & intent data</li>
                      <li>• Website personalization</li>
                      <li>• Advertising orchestration</li>
                      <li>• Sales intelligence</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-medium text-warp-text-primary">6sense</h4>
                    <div className="text-sm text-warp-accent mb-1">$1,800/month</div>
                    <ul className="text-sm text-warp-text-secondary space-y-1">
                      <li>• Intent data & predictive analytics</li>
                      <li>• Account engagement scoring</li>
                      <li>• Campaign orchestration</li>
                      <li>• Revenue attribution</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-medium text-warp-text-primary">Terminus (Budget)</h4>
                    <div className="text-sm text-warp-accent mb-1">$1,200/month</div>
                    <ul className="text-sm text-warp-text-secondary space-y-1">
                      <li>• Account-based advertising</li>
                      <li>• Email & direct mail</li>
                      <li>• Basic intent signals</li>
                      <li>• CRM integration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-warp-bg-primary rounded-xl p-6 border border-warp-border">
                <h3 className="text-lg font-semibold text-warp-text-primary mb-4">Lead Intelligence</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-warp-text-primary">ZoomInfo</div>
                      <div className="text-sm text-warp-text-secondary">Contact database & enrichment</div>
                    </div>
                    <div className="text-sm font-medium text-warp-accent">$1,195/mo</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-warp-text-primary">Clearbit</div>
                      <div className="text-sm text-warp-text-secondary">Real-time data enrichment</div>
                    </div>
                    <div className="text-sm font-medium text-warp-accent">$99/mo</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-warp-text-primary">Bombora</div>
                      <div className="text-sm text-warp-text-secondary">Intent data & surge detection</div>
                    </div>
                    <div className="text-sm font-medium text-warp-accent">$2,000/mo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics & Data Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-warp-text-primary mb-8">Analytics & Data Visualization</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Analytics Platforms */}
            <div className="bg-warp-bg-primary rounded-xl p-6 border border-warp-border">
              <h3 className="text-lg font-semibold text-warp-text-primary mb-4">Analytics Platforms</h3>
              <div className="space-y-4">
                <div className="border border-warp-border rounded-lg p-4">
                  <h4 className="font-medium text-warp-text-primary mb-2">Google Analytics 4 + GTM</h4>
                  <div className="text-sm text-warp-accent mb-2">Free</div>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• Website traffic & behavior</li>
                    <li>• Conversion tracking</li>
                    <li>• Custom event tracking</li>
                    <li>• Attribution modeling</li>
                  </ul>
                </div>
                <div className="border border-warp-border rounded-lg p-4">
                  <h4 className="font-medium text-warp-text-primary mb-2">Mixpanel</h4>
                  <div className="text-sm text-warp-accent mb-2">$25/month</div>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• Product analytics</li>
                    <li>• User journey tracking</li>
                    <li>• Cohort analysis</li>
                    <li>• A/B testing</li>
                  </ul>
                </div>
                <div className="border border-warp-border rounded-lg p-4">
                  <h4 className="font-medium text-warp-text-primary mb-2">Amplitude</h4>
                  <div className="text-sm text-warp-accent mb-2">$995/month</div>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• Advanced product analytics</li>
                    <li>• Predictive analytics</li>
                    <li>• Behavioral cohorts</li>
                    <li>• Enterprise features</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Visualization */}
            <div className="bg-warp-bg-primary rounded-xl p-6 border border-warp-border">
              <h3 className="text-lg font-semibold text-warp-text-primary mb-4">Data Visualization & BI</h3>
              <div className="space-y-4">
                <div className="border border-warp-border rounded-lg p-4">
                  <h4 className="font-medium text-warp-text-primary mb-2">Tableau</h4>
                  <div className="text-sm text-warp-accent mb-2">$840/month</div>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• Advanced data visualization</li>
                    <li>• Multi-source data connections</li>
                    <li>• Interactive dashboards</li>
                    <li>• Enterprise scalability</li>
                  </ul>
                </div>
                <div className="border border-warp-border rounded-lg p-4">
                  <h4 className="font-medium text-warp-text-primary mb-2">Looker Studio</h4>
                  <div className="text-sm text-warp-accent mb-2">Free</div>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• Google ecosystem integration</li>
                    <li>• Automated reporting</li>
                    <li>• Real-time dashboards</li>
                    <li>• Team collaboration</li>
                  </ul>
                </div>
                <div className="border border-warp-border rounded-lg p-4">
                  <h4 className="font-medium text-warp-text-primary mb-2">ChartMogul</h4>
                  <div className="text-sm text-warp-accent mb-2">$99/month</div>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• SaaS metrics tracking</li>
                    <li>• MRR & churn analysis</li>
                    <li>• Cohort revenue tracking</li>
                    <li>• Subscription analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sales Activity Tracking */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-warp-text-primary mb-8">Sales Activity & Call Tracking</h2>
          
          <div className="space-y-8">
            {/* Call Recording & Intelligence */}
            <div className="bg-warp-bg-primary rounded-xl p-6 border border-warp-border">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-warp-text-primary">Call Recording & Intelligence</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-warp-border rounded-lg p-4">
                  <h4 className="font-medium text-warp-text-primary mb-2">Gong.io (Premium)</h4>
                  <div className="text-sm text-warp-accent mb-2">$1,200/user/month</div>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• AI conversation analytics</li>
                    <li>• Deal risk identification</li>
                    <li>• Competitive intelligence</li>
                    <li>• Coaching insights</li>
                    <li>• Pipeline forecasting</li>
                  </ul>
                </div>
                <div className="border border-warp-border rounded-lg p-4">
                  <h4 className="font-medium text-warp-text-primary mb-2">Chorus.ai (Recommended)</h4>
                  <div className="text-sm text-warp-accent mb-2">$100/user/month</div>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• Call recording & transcription</li>
                    <li>• Keyword tracking</li>
                    <li>• Talk time analysis</li>
                    <li>• CRM integration</li>
                    <li>• Team scorecards</li>
                  </ul>
                </div>
                <div className="border border-warp-border rounded-lg p-4">
                  <h4 className="font-medium text-warp-text-primary mb-2">Zoom Revenue Intelligence</h4>
                  <div className="text-sm text-warp-accent mb-2">$240/user/month</div>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• AI conversation intelligence</li>
                    <li>• Deal insights & coaching</li>
                    <li>• Pipeline forecasting</li>
                    <li>• CRM integration</li>
                    <li>• Native Zoom integration</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium text-warp-text-primary mb-3">Budget-Friendly Options</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-warp-border rounded-lg p-4">
                    <h5 className="font-medium text-warp-text-primary mb-2">Otter.ai (Budget)</h5>
                    <div className="text-sm text-warp-accent mb-2">$20/user/month</div>
                    <ul className="text-xs text-warp-text-secondary space-y-1">
                      <li>• Meeting transcription</li>
                      <li>• Basic analytics</li>
                      <li>• Note taking automation</li>
                    </ul>
                  </div>
                  <div className="border border-warp-border rounded-lg p-4">
                    <h5 className="font-medium text-warp-text-primary mb-2">Zoom IQ (Basic)</h5>
                    <div className="text-sm text-warp-accent mb-2">$79/user/month</div>
                    <ul className="text-xs text-warp-text-secondary space-y-1">
                      <li>• Call summaries</li>
                      <li>• Next steps tracking</li>
                      <li>• Meeting insights</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Operations */}
            <div className="bg-warp-bg-primary rounded-xl p-6 border border-warp-border">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-warp-text-primary">Revenue Operations & Forecasting</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-warp-text-primary mb-2">Clari (Enterprise)</h4>
                  <div className="text-sm text-warp-accent mb-2">$1,800/month</div>
                  <ul className="text-sm text-warp-text-secondary space-y-1">
                    <li>• AI-powered forecasting</li>
                    <li>• Pipeline management</li>
                    <li>• Revenue attribution</li>
                    <li>• Deal inspection</li>
                    <li>• Executive dashboards</li>
                    <li>• Risk identification</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium text-warp-text-primary mb-2">Alternative Options</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium text-warp-text-primary text-sm">PipeDrive CRM</div>
                      <div className="text-sm text-warp-accent">$99/month</div>
                      <div className="text-xs text-warp-text-secondary">Simple pipeline & forecasting</div>
                    </div>
                    <div>
                      <div className="font-medium text-warp-text-primary text-sm">HubSpot Sales Analytics</div>
                      <div className="text-sm text-warp-accent">Included</div>
                      <div className="text-xs text-warp-text-secondary">Built-in reporting & forecasting</div>
                    </div>
                    <div>
                      <div className="font-medium text-warp-text-primary text-sm">Salesforce Analytics</div>
                      <div className="text-sm text-warp-accent">$1,250/month</div>
                      <div className="text-xs text-warp-text-secondary">Einstein AI + custom dashboards</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Roadmap */}
        <div className="bg-warp-bg-primary rounded-xl p-8 mb-12 border border-warp-border">
          <h2 className="text-2xl font-semibold text-warp-text-primary mb-6">6-Week Implementation Roadmap</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Weeks 1-2 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold text-warp-text-primary mb-3">Weeks 1-2: Foundation</h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium text-warp-text-primary">Week 1:</div>
                  <ul className="text-warp-text-secondary ml-4 space-y-1">
                    <li>• HubSpot CRM setup & configuration</li>
                    <li>• Data migration & cleanup</li>
                    <li>• Basic pipeline creation</li>
                    <li>• Team access & permissions</li>
                  </ul>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-warp-text-primary">Week 2:</div>
                  <ul className="text-warp-text-secondary ml-4 space-y-1">
                    <li>• Sales engagement platform setup</li>
                    <li>• Email template library</li>
                    <li>• Sequence automation</li>
                    <li>• Integration testing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Weeks 3-4 */}
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-lg font-semibold text-warp-text-primary mb-3">Weeks 3-4: Enhancement</h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium text-warp-text-primary">Week 3:</div>
                  <ul className="text-warp-text-secondary ml-4 space-y-1">
                    <li>• Marketing automation setup</li>
                    <li>• Lead scoring configuration</li>
                    <li>• Analytics implementation</li>
                    <li>• Tracking pixel deployment</li>
                  </ul>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-warp-text-primary">Week 4:</div>
                  <ul className="text-warp-text-secondary ml-4 space-y-1">
                    <li>• Call recording platform</li>
                    <li>• Dashboard creation</li>
                    <li>• Report automation</li>
                    <li>• Data enrichment setup</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Weeks 5-6 */}
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-warp-text-primary mb-3">Weeks 5-6: Optimization</h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium text-warp-text-primary">Week 5:</div>
                  <ul className="text-warp-text-secondary ml-4 space-y-1">
                    <li>• Advanced analytics setup</li>
                    <li>• ABM platform configuration</li>
                    <li>• Forecasting model creation</li>
                    <li>• Team training sessions</li>
                  </ul>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-warp-text-primary">Week 6:</div>
                  <ul className="text-warp-text-secondary ml-4 space-y-1">
                    <li>• End-to-end testing</li>
                    <li>• Process documentation</li>
                    <li>• Go-live preparation</li>
                    <li>• Success metrics baseline</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Cost Breakdown */}
        <div className="bg-warp-bg-primary rounded-xl p-8 mb-12 border border-warp-border">
          <h2 className="text-2xl font-semibold text-warp-text-primary mb-6">Monthly Operating Cost Breakdown</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Startup Configuration */}
            <div className="border border-warp-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-warp-text-primary mb-4 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                Budget Configuration (~$8K/month)
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-warp-text-secondary">HubSpot CRM Professional</span>
                  <span className="text-sm font-medium text-warp-accent">$800</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-warp-text-secondary">Apollo.io (3 users)</span>
                  <span className="text-sm font-medium text-warp-accent">$237</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-warp-text-secondary">Mixpanel</span>
                  <span className="text-sm font-medium text-warp-accent">$25</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-warp-text-secondary">ChartMogul</span>
                  <span className="text-sm font-medium text-warp-accent">$99</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-warp-text-secondary">Otter.ai (3 users)</span>
                  <span className="text-sm font-medium text-warp-accent">$60</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-warp-text-secondary">Buffer + Canva + Loom</span>
                  <span className="text-sm font-medium text-warp-accent">$240</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-warp-text-secondary">Clearbit</span>
                  <span className="text-sm font-medium text-warp-accent">$99</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-warp-text-secondary">Terminus (Basic ABM)</span>
                  <span className="text-sm font-medium text-warp-accent">$1,200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-warp-text-secondary">GA4 + Looker Studio</span>
                  <span className="text-sm font-medium text-warp-accent">Free</span>
                </div>
                <div className="border-t border-warp-border pt-3 mt-3">
                  <div className="flex justify-between items-center font-semibold">
                    <span className="text-warp-text-primary">Total Monthly</span>
                    <span className="text-lg text-warp-accent">~$2,760</span>
                  </div>
                  <div className="text-xs text-warp-text-secondary mt-1">+ implementation services (~$5K/month for 6 months)</div>
                  <div className="text-sm font-medium text-warp-text-primary mt-2">Blended Average: ~$8K/month</div>
                </div>
              </div>
            </div>

            {/* Enterprise Configuration */}
            <div className="border border-warp-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-warp-text-primary mb-4 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                Enterprise Configuration (~$15K/month)
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-warp-text-secondary">HubSpot Enterprise + Marketing</span>
                  <span className="text-sm font-medium text-warp-accent">$2,400</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-warp-text-secondary">Outreach.io (5 users)</span>
                  <span className="text-sm font-medium text-warp-accent">$500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-warp-text-secondary">Demandbase ABM</span>
                  <span className="text-sm font-medium text-warp-accent">$2,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-warp-text-secondary">ZoomInfo</span>
                  <span className="text-sm font-medium text-warp-accent">$1,195</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-warp-text-secondary">Bombora Intent Data</span>
                  <span className="text-sm font-medium text-warp-accent">$2,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-warp-text-secondary">Gong.io (3 users)</span>
                  <span className="text-sm font-medium text-warp-accent">$3,600</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-warp-text-secondary">Clari Revenue Ops</span>
                  <span className="text-sm font-medium text-warp-accent">$1,800</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-warp-text-secondary">Tableau</span>
                  <span className="text-sm font-medium text-warp-accent">$840</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-warp-text-secondary">Amplitude</span>
                  <span className="text-sm font-medium text-warp-accent">$995</span>
                </div>
                <div className="border-t border-warp-border pt-3 mt-3">
                  <div className="flex justify-between items-center font-semibold">
                    <span className="text-warp-text-primary">Total Monthly</span>
                    <span className="text-lg text-warp-accent">~$15,330</span>
                  </div>
                  <div className="text-xs text-warp-text-secondary mt-1">Full enterprise stack with AI-powered intelligence</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-warp-bg-secondary rounded-lg p-6">
            <h4 className="font-medium text-warp-text-primary mb-3">Cost Variables & Considerations</h4>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h5 className="font-medium text-warp-text-primary mb-2">Scaling Factors:</h5>
                <ul className="text-warp-text-secondary space-y-1">
                  <li>• User count (most tools are per-seat pricing)</li>
                  <li>• Data volume (analytics & enrichment)</li>
                  <li>• Feature requirements (basic vs advanced)</li>
                  <li>• Integration complexity</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-warp-text-primary mb-2">One-time Costs:</h5>
                <ul className="text-warp-text-secondary space-y-1">
                  <li>• Implementation services: $15-30K</li>
                  <li>• Data migration: $5-10K</li>
                  <li>• Custom integrations: $10-25K</li>
                  <li>• Training & onboarding: $3-5K</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics & ROI */}
        <div className="bg-warp-bg-primary rounded-xl p-8 border border-warp-border">
          <h2 className="text-2xl font-semibold text-warp-text-primary mb-6">Success Metrics & ROI Tracking</h2>
          
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-warp-text-primary mb-3">Efficiency Gains</h3>
              <div className="space-y-2 text-sm text-warp-text-secondary">
                <div>Data entry: -80% time</div>
                <div>Lead response: &lt;30 minutes</div>
                <div>Report generation: -90% time</div>
                <div>Sales cycle: -25% length</div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold text-warp-text-primary mb-3">Revenue Impact</h3>
              <div className="space-y-2 text-sm text-warp-text-secondary">
                <div>Conversion rate: +40%</div>
                <div>Deal size: +25%</div>
                <div>Win rate: +30%</div>
                <div>Pipeline velocity: +35%</div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold text-warp-text-primary mb-3">Data Quality</h3>
              <div className="space-y-2 text-sm text-warp-text-secondary">
                <div>Data accuracy: 95%+</div>
                <div>Lead attribution: 100%</div>
                <div>Activity logging: 90%+</div>
                <div>Forecast accuracy: 85%+</div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold text-warp-text-primary mb-3">Team Productivity</h3>
              <div className="space-y-2 text-sm text-warp-text-secondary">
                <div>Calls per day: +50%</div>
                <div>Emails sent: +200%</div>
                <div>Demos booked: +75%</div>
                <div>Pipeline generated: +60%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
