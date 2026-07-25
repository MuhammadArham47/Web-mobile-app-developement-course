import React from 'react'

function Hero() {
    return (
        <>
            <main class="mt-24 min-h-screen">
                <section class="view-content active" id="view-home">
                    <div class="relative overflow-hidden px-6 !md:px-margin-desktop py-16 md:py-32">

                        <div class="max-w-4xl mx-auto text-center space-y-8">
                            <h1 class="font-headline-xl text-5xl md:text-7xl tracking-tighter leading-tight">
                                Workflows that <span class="text-gradient">flow with you</span>
                            </h1>
                            <p class="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                                Experience the next generation of productivity. Orchestrate complex team operations with obsidian-speed precision and deep-work focus.
                            </p>
                            <div class="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                                <button class="accent-gradient px-8 py-4 rounded-xl font-bold text-white shadow-xl flex items-center justify-center gap-2 cursor-pointer">
                                    Deploy New Workspace <span class="material-symbols-outlined">rocket_launch</span>
                                </button>
                                <button class="glass-panel px-8 py-4 rounded-xl font-medium border border-white/10 hover:bg-white/5 transition-all cursor-pointer">
                                    Watch Demo
                                </button>
                            </div>
                        </div>
                        <div class="mt-20 max-w-5xl mx-auto glass-panel p-1 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                            <div class="bg-surface-container-low flex items-center justify-between px-4 py-2 border-b border-white/5">
                                <div class="flex gap-1.5">
                                    <div class="w-2.5 h-2.5 rounded-full bg-error/50"></div>
                                    <div class="w-2.5 h-2.5 rounded-full bg-tertiary-container/50"></div>
                                    <div class="w-2.5 h-2.5 rounded-full bg-primary/50"></div>
                                </div>
                                <div class="text-label-md font-mono text-white/40">system.metrics.v1.0.4</div>
                            </div>
                            <div class="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div class="space-y-4">
                                    <div class="flex justify-between items-end">
                                        <span class="text-label-md text-on-surface-variant uppercase tracking-widest">Active Velocity</span>
                                        <span class="text-primary font-bold">98.4%</span>
                                    </div>
                                    <div class="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div class="h-full accent-gradient" style={{width: "98.4%"}}></div>
                                    </div>
                                </div>
                                <div class="space-y-4">
                                    <div class="flex justify-between items-end">
                                        <span class="text-label-md text-on-surface-variant uppercase tracking-widest">Node Uptime</span>
                                        <span class="text-tertiary font-bold">99.99s</span>
                                    </div>
                                    <div class="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div class="h-full bg-tertiary-container" style={{width: "100%"}}></div>
                                    </div>
                                </div>
                                <div class="space-y-4">
                                    <div class="flex justify-between items-end">
                                        <span class="text-label-md text-on-surface-variant uppercase tracking-widest">Team Sync</span>
                                        <span class="text-white font-bold">In Progress</span>
                                    </div>
                                    <div class="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div class="h-full bg-primary-container animate-pulse" style={{width: "65%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="py-20 border-y border-white/5 bg-surface-container-lowest overflow-hidden">
                        <div class="flex marquee-animation whitespace-nowrap gap-16 md:gap-32">
                            <div class="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                                <span class="material-symbols-outlined !text-4xl">cloud_queue</span><span class="font-bold text-2xl">CYBERCORE</span>
                            </div>
                            <div class="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                                <span class="material-symbols-outlined !text-4xl">memory</span><span class="font-bold text-2xl">NEURALINK</span>
                            </div>
                            <div class="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                                <span class="material-symbols-outlined !text-4xl">token</span><span class="font-bold text-2xl">BLOCKCHAINED</span>
                            </div>
                            <div class="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                                <span class="material-symbols-outlined !text-4xl">hub</span><span class="font-bold text-2xl">SYNAPSE</span>
                            </div>
                            <div class="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                                <span class="material-symbols-outlined !text-4xl">cloud_queue</span><span class="font-bold text-2xl">CYBERCORE</span>
                            </div>
                            <div class="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                                <span class="material-symbols-outlined !text-4xl">memory</span><span class="font-bold text-2xl">NEURALINK</span>
                            </div>
                            <div class="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                                <span class="material-symbols-outlined !text-4xl">token</span><span class="font-bold text-2xl">BLOCKCHAINED</span>
                            </div>
                            <div class="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                                <span class="material-symbols-outlined !text-4xl">hub</span><span class="font-bold text-2xl">SYNAPSE</span>
                            </div>
                        </div>
                    </div>
                    <div class="px-6 md:px-margin-desktop py-32 max-w-container-max mx-auto">
                        <div class="text-center mb-16">
                            <span class="text-primary font-mono tracking-widest uppercase text-label-md">Performance Clusters</span>
                            <h2 class="!text-headline-lg mt-4">Engineered for deep output</h2>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[280px]">
                            <div class="md:col-span-3 lg:col-span-8 glass-panel rounded-3xl p-8 relative overflow-hidden group">
                                <div class="relative z-10 h-full flex flex-col justify-between">
                                    <span class="material-symbols-outlined !text-4xl text-primary" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
                                    <div>
                                        <h3 class="text-headline-md mb-2">Instant Response Engine</h3>
                                        <p class="text-on-surface-variant max-w-md">Our low-latency backend ensures your updates sync across the global team in under 50ms.</p>
                                    </div>
                                </div>
                                <div class="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">

                                </div>
                            </div>
                            <div class="md:col-span-3 lg:col-span-4 glass-panel rounded-3xl p-8 group overflow-hidden">
                                <div class="flex flex-col h-full justify-between">
                                    <span class="material-symbols-outlined !text-4xl text-tertiary" style={{fontVariationSettings: "'FILL' 1;"}}>security</span>
                                    <div>
                                        <h3 class="text-headline-md mb-2">Zero-Trust Security</h3>
                                        <p class="text-on-surface-variant">Military-grade encryption for every task node in your network.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="md:col-span-3 lg:col-span-4 glass-panel rounded-3xl p-8 group overflow-hidden">
                                <div class="flex flex-col h-full justify-between">
                                    <span class="material-symbols-outlined !text-4xl text-secondary" style={{fontVariationSettings: "'FILL' 1;"}}>groups</span>
                                    <div>
                                        <h3 class="text-headline-md mb-2">Live Collaboration</h3>
                                        <p class="text-on-surface-variant">Seamless multi-user editing with cursor tracking and conflict resolution.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="md:col-span-3 lg:col-span-8 glass-panel rounded-3xl p-8 relative overflow-hidden group">
                                <div class="relative z-10 flex flex-col h-full justify-between">
                                    <span class="material-symbols-outlined !text-4xl text-primary-container" style={{fontVariationSettings: "'FILL' 1;"}}>psychology</span>
                                    <div>
                                        <h3 class="text-headline-md mb-2">AI-Driven Optimization</h3>
                                        <p class="text-on-surface-variant">TaskFlow learns your team's rhythm to predict bottlenecks before they occur.</p>
                                    </div>
                                </div>
                                <div class="absolute bottom-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] -z-0"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="view-content hidden px-6 md:px-margin-desktop py-16 max-w-container-max mx-auto" id="view-features">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div class="space-y-12">
                            <header class="space-y-4">
                                <span class="text-primary font-mono tracking-widest uppercase text-label-md">System Specifications</span>
                                <h2 class="text-headline-xl">Powering the Enterprise.</h2>
                                <p class="text-body-lg text-on-surface-variant">Explore the underlying architecture that makes TaskFlow Pro the choice for elite tech organizations.</p>
                            </header>
                            <div class="space-y-8">
                                <div class="flex gap-6 items-start p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group">
                                    <div class="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <span class="material-symbols-outlined">terminal</span>
                                    </div>
                                    <div>
                                        <h4 class="text-headline-md font-bold mb-1">Developer-First API</h4>
                                        <p class="text-on-surface-variant">Full GraphQL endpoint access to automate everything from user creation to task deployment.</p>
                                    </div>
                                </div>
                                <div class="flex gap-6 items-start p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group">
                                    <div class="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
                                        <span class="material-symbols-outlined">monitoring</span>
                                    </div>
                                    <div>
                                        <h4 class="text-headline-md font-bold mb-1">Real-time Telemetry</h4>
                                        <p class="text-on-surface-variant">Monitor team productivity heatmaps and sprint health with granular precision.</p>
                                    </div>
                                </div>
                                <div class="flex gap-6 items-start p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group">
                                    <div class="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                                        <span class="material-symbols-outlined">integration_instructions</span>
                                    </div>
                                    <div>
                                        <h4 class="text-headline-md font-bold mb-1">Deep Integrations</h4>
                                        <p class="text-on-surface-variant">Native bridges for GitHub, Slack, Linear, and AWS with two-way sync.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-8">
                            <div class="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                                <div class="bg-surface-container flex items-center px-4 py-2 gap-2 border-b border-white/5">
                                    <div class="flex gap-1.5">
                                        <div class="w-3 h-3 rounded-full bg-error"></div>
                                        <div class="w-3 h-3 rounded-full bg-tertiary-container"></div>
                                        <div class="w-3 h-3 rounded-full bg-primary"></div>
                                    </div>
                                    <span class="text-label-md font-mono text-white/40 ml-4">tfp deploy --verbose</span>
                                </div>
                                <div class="p-6 font-mono text-mono-sm space-y-2">
                                    <div class="text-primary">[INFO] <span class="text-white">Connecting to Tokyo region node-42...</span></div>
                                    <div class="text-primary">[INFO] <span class="text-white">Authenticating service account...</span></div>
                                    <div class="text-tertiary">[SYNC] <span class="text-white">Synchronizing 4,210 workspace nodes...</span></div>
                                    <div class="text-white opacity-40">Progress: [===================&gt;] 100%</div>
                                    <div class="text-primary-container">[DONE] <span class="text-white">Deployment successful in 42ms.</span></div>
                                    <div class="text-white opacity-20 mt-4 animate-pulse">_</div>
                                </div>
                            </div>
                            <div class="glass-panel rounded-2xl p-8 border border-white/10">
                                <div class="flex justify-between items-center mb-8">
                                    <h3 class="text-headline-md font-bold">Team Productivity Index</h3>
                                    <span class="px-3 py-1 bg-primary/10 text-primary text-label-md rounded-full border border-primary/20">AI Active</span>
                                </div>
                                <div class="space-y-8">
                                    <div class="space-y-4">
                                        <div class="flex justify-between text-label-md uppercase tracking-wider text-on-surface-variant">
                                            <span>Focus Level</span>
                                            <span id="focus-val">84%</span>
                                        </div>
                                        <input class="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-primary" max="100" min="0" oninput="document.getElementById('focus-val').innerText = this.value + '%'" type="range" value="84" />
                                    </div>
                                    <div class="p-4 bg-white/5 rounded-xl border border-white/5 flex gap-4 items-center">
                                        <span class="material-symbols-outlined text-primary">auto_awesome</span>
                                        <p class="text-body-sm italic opacity-80">AI Suggestion: Reallocate 3 designers to Project Nova to clear bottleneck.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="view-content hidden px-6 md:px-margin-desktop py-16 max-w-container-max mx-auto" id="view-pricing">
                    <div class="text-center max-w-3xl mx-auto space-y-6 mb-16">
                        <h2 class="text-headline-xl">Flexible plans for high-output teams.</h2>
                        <div class="flex items-center justify-center gap-4">
                            <span class="text-on-surface-variant font-medium">Monthly</span>
                            <button class="w-14 h-7 rounded-full bg-surface-container-high p-1 relative transition-colors duration-300" id="billing-toggle" onclick="toggleBilling()">
                                <div class="w-5 h-5 rounded-full bg-primary transition-transform duration-300" id="toggle-circle"></div>
                            </button>
                            <span class="text-on-surface-variant font-medium">Annual <span class="text-primary text-label-md bg-primary/10 px-2 py-0.5 rounded-full ml-1">Save 20%</span></span>
                        </div>
                    </div>
                    <div class="mb-16 glass-panel p-8 rounded-3xl max-w-3xl mx-auto space-y-6">
                        <div class="flex justify-between items-center">
                            <h3 class="text-headline-md font-bold">Team Size Scaling</h3>
                            <span class="text-headline-md text-primary font-bold" id="team-count">12 seats</span>
                        </div>
                        <input class="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer accent-primary" id="team-slider" max="100" min="1" oninput="updatePricing(this.value)" type="range" value="12" />
                        <p class="text-body-sm text-center text-on-surface-variant">Adjust the slider to see how costs scale for your specific team needs.</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="glass-panel p-8 rounded-3xl border border-white/5 flex flex-col justify-between hover:border-white/20 transition-all">
                            <div>
                                <h4 class="text-headline-md font-bold mb-2">Starter</h4>
                                <div class="!text-4xl font-bold mb-6">$0 <span class="text-body-sm font-normal text-on-surface-variant">/month</span></div>
                                <ul class="space-y-4 mb-8">
                                    <li class="flex items-center gap-3 text-body-sm"><span class="material-symbols-outlined text-primary text-[20px]">check_circle</span> Up to 3 seats</li>
                                    <li class="flex items-center gap-3 text-body-sm"><span class="material-symbols-outlined text-primary text-[20px]">check_circle</span> 5 Projects</li>
                                    <li class="flex items-center gap-3 text-body-sm"><span class="material-symbols-outlined text-primary text-[20px]">check_circle</span> Basic Integrations</li>
                                </ul>
                            </div>
                            <button class="w-full py-4 rounded-xl border border-white/10 font-bold hover:bg-white/5 transition-all">Start for Free</button>
                        </div>
                        <div class="glass-panel p-8 rounded-3xl border-2 border-primary/40 flex flex-col justify-between relative shadow-[0_0_40px_rgba(192,193,255,0.1)]">
                            <div class="absolute -top-4 left-1/2 -translate-x-1/2 accent-gradient px-4 py-1 rounded-full text-label-md font-bold text-white whitespace-nowrap">MOST POPULAR</div>
                            <div>
                                <h4 class="text-headline-md font-bold mb-2">Pro</h4>
                                <div class="!text-4xl font-bold mb-6" id="pro-price">$12 <span class="text-body-sm font-normal text-on-surface-variant">/seat/mo</span></div>
                                <ul class="space-y-4 mb-8">
                                    <li class="flex items-center gap-3 text-body-sm"><span class="material-symbols-outlined text-primary text-[20px]">check_circle</span> Unlimited Projects</li>
                                    <li class="flex items-center gap-3 text-body-sm"><span class="material-symbols-outlined text-primary text-[20px]">check_circle</span> AI-Optimization Planner</li>
                                    <li class="flex items-center gap-3 text-body-sm"><span class="material-symbols-outlined text-primary text-[20px]">check_circle</span> Advanced Permissions</li>
                                    <li class="flex items-center gap-3 text-body-sm"><span class="material-symbols-outlined text-primary text-[20px]">check_circle</span> 24/7 Priority Support</li>
                                </ul>
                            </div>
                            <button class="w-full py-4 rounded-xl accent-gradient font-bold text-white shadow-lg hover:scale-105 transition-all">Go Pro</button>
                        </div>
                        <div class="glass-panel p-8 rounded-3xl border border-white/5 flex flex-col justify-between hover:border-white/20 transition-all">
                            <div>
                                <h4 class="text-headline-md font-bold mb-2">Enterprise</h4>
                                <div class="!text-4xl font-bold mb-6" id="ent-price">$29 <span class="text-body-sm font-normal text-on-surface-variant">/seat/mo</span></div>
                                <ul class="space-y-4 mb-8">
                                    <li class="flex items-center gap-3 text-body-sm"><span class="material-symbols-outlined text-primary text-[20px]">check_circle</span> Everything in Pro</li>
                                    <li class="flex items-center gap-3 text-body-sm"><span class="material-symbols-outlined text-primary text-[20px]">check_circle</span> Custom SAML SSO</li>
                                    <li class="flex items-center gap-3 text-body-sm"><span class="material-symbols-outlined text-primary text-[20px]">check_circle</span> Dedicated Success Manager</li>
                                    <li class="flex items-center gap-3 text-body-sm"><span class="material-symbols-outlined text-primary text-[20px]">check_circle</span> Audit Logs &amp; Compliance</li>
                                </ul>
                            </div>
                            <button class="w-full py-4 rounded-xl border border-white/10 font-bold hover:bg-white/5 transition-all">Contact Sales</button>
                        </div>
                    </div>
                </section>
                <section class="view-content hidden px-6 md:px-margin-desktop py-16 max-w-container-max mx-auto" id="view-resources">
                    <div class="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                        <div class="max-w-2xl space-y-4">
                            <span class="text-primary font-mono tracking-widest uppercase text-label-md">Knowledge Base</span>
                            <h2 class="text-headline-xl">Accelerate your setup.</h2>
                            <p class="text-body-lg text-on-surface-variant">Download battle-tested templates and read our latest insights on organizational engineering.</p>
                        </div>
                        <div class="relative w-full md:w-80">
                            <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
                            <input class="w-full pl-12 pr-4 py-3 bg-surface-container rounded-xl border border-white/10 focus:outline-none focus:border-primary transition-all" placeholder="Search resources..." type="text" />
                        </div>
                    </div>
                    <div class="flex gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar">
                        <button class="px-6 py-2 rounded-full bg-primary text-on-primary font-bold">All</button>
                        <button class="px-6 py-2 rounded-full glass-panel hover:bg-white/10 transition-all whitespace-nowrap">Productivity Guides</button>
                        <li class="list-none"><button class="px-6 py-2 rounded-full glass-panel hover:bg-white/10 transition-all whitespace-nowrap">Workflow Templates</button></li>
                        <button class="px-6 py-2 rounded-full glass-panel hover:bg-white/10 transition-all whitespace-nowrap">API Docs</button>
                        <button class="px-6 py-2 rounded-full glass-panel hover:bg-white/10 transition-all whitespace-nowrap">Case Studies</button>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="glass-panel rounded-2xl overflow-hidden group border border-white/5 hover:border-white/20 transition-all cursor-pointer" onclick="openModal()">
                            <div class="h-48 relative overflow-hidden">
                                <div class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="A futuristic digital artwork of an intricate neon-lit motherboard circuit, representing deep technology and software engineering. The scene is illuminated with electric blues and vibrant magenta hues against a dark obsidian background, with soft depth-of-field effects blurring the distance." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAdQeMJueHHkR9h3B2ZuyoEEtXjCGLy5cwRDcUqUvcZV7NcEmdZBtzqlZKeQfc2Te-IMOlSIFVhGOJzhtxZu7KJWkHPfuK426m76JRzb-2g-Av7jOcrqzmOFvGijuYPkNTbS8_HXxDIwz5r8lIZBcpSJ4andWS-pc7hfUQELoDpWgdTaDXEwvG3ttKjrqrWnnSMNGF_zLf5GCJD1Fkvq5PxKZEy0OiYqF6kbkZdrkxw6uiV0_iEvV1c')"}}></div>
                                <div class="absolute top-4 right-4 bg-surface/80 backdrop-blur px-3 py-1 rounded-full text-label-md font-bold">Template</div>
                            </div>
                            <div class="p-6 space-y-4">
                                <h4 class="text-headline-md font-bold group-hover:text-primary transition-colors">Agile Sprint Orchestration</h4>
                                <p class="text-body-sm text-on-surface-variant">The definitive setup for high-frequency development teams. Includes automated PR tracking and bug triage.</p>
                                <div class="flex items-center justify-between pt-4 border-t border-white/5">
                                    <span class="text-label-md font-mono text-on-surface-variant">1.2k Downloads</span>
                                    <span class="material-symbols-outlined text-primary">arrow_forward</span>
                                </div>
                            </div>
                        </div>
                        <div class="glass-panel rounded-2xl overflow-hidden group border border-white/5 hover:border-white/20 transition-all cursor-pointer">
                            <div class="h-48 relative overflow-hidden">
                                <div class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Abstract 3D visualization of geometric light clusters and data streams flying through a dark cybernetic tunnel. The lighting is dominated by high-contrast purple and white glows, evoking a sense of high-speed data transmission and future-forward network architecture." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDeiqRHWGNkFVLhcsEp74u99akufWVK32VO1zR1KwaymsljIm_poehNQA5GAwPOUkzkXDhBRPtybYJtVLdNWUlF3I0AdMXHFy51lIvL14wHBfZfXeL1pwIrrFvCjqenzKbL-Ry13KQ9QVzJCRSCen2O4GVk-5C4goAVGfgWK_8u17eXgZwIXYf-Jd5GCJDrtKyK6Q1GVWgZsI4OF8KA__E6HVvKCBm7jH8yskxwjkibRnqoiZ6t5XBS')"}}></div>
                                <div class="absolute top-4 right-4 bg-surface/80 backdrop-blur px-3 py-1 rounded-full text-label-md font-bold">Guide</div>
                            </div>
                            <div class="p-6 space-y-4">
                                <h4 class="text-headline-md font-bold group-hover:text-primary transition-colors">The No-Meeting Framework</h4>
                                <p class="text-body-sm text-on-surface-variant">How to leverage asynchronous communication to boost deep-work hours by 300% across your team.</p>
                                <div class="flex items-center justify-between pt-4 border-t border-white/5">
                                    <span class="text-label-md font-mono text-on-surface-variant">8.4k Reads</span>
                                    <span class="material-symbols-outlined text-primary">arrow_forward</span>
                                </div>
                            </div>
                        </div>
                        <div class="glass-panel rounded-2xl overflow-hidden group border border-white/5 hover:border-white/20 transition-all cursor-pointer">
                            <div class="h-48 relative overflow-hidden">
                                <div class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Close-up artistic photography of crystalline structures reflecting prismatic light in a dark void. The colors are iridescent, shifting from deep indigo to electric pink. The mood is sophisticated, futuristic, and focuses on clarity and precision." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAlUnjfA76plgXpU4tgGYFTjjUwfsetbpZCwUwN8Ug49E7hyDz-XD37driFgiwCvoXLl_nEQUW9l6QKSXiPVkQ5ZDO_R5K-7wsIxx7noko1dvQY3xn3BxaSjj_F8rLIPF58WpiixJamNTgTcWvNkOQu_B0MGv2pG3Dve2AZbq6lTHeagzObWuHzuxfiq5VZixAnDMbxpTQUzQybBtKCKxVBHYoKVeJkCpxNJEm4dfh9_fNNmbzUSK6')"}}></div>
                                <div class="absolute top-4 right-4 bg-surface/80 backdrop-blur px-3 py-1 rounded-full text-label-md font-bold">Case Study</div>
                            </div>
                            <div class="p-6 space-y-4">
                                <h4 class="text-headline-md font-bold group-hover:text-primary transition-colors">Scale-up: Tokyo Fintech</h4>
                                <p class="text-body-sm text-on-surface-variant">Scaling from 20 to 200 engineers in 6 months using TaskFlow’s automated onboarding systems.</p>
                                <div class="flex items-center justify-between pt-4 border-t border-white/5">
                                    <span class="text-label-md font-mono text-on-surface-variant">Published June 24</span>
                                    <span class="material-symbols-outlined text-primary">arrow_forward</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Hero