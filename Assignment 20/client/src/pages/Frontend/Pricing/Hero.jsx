import { useState } from 'react';

function Hero() {
    // 1. Billing Frequency State
    const [isAnnual, setIsAnnual] = useState(false);

    // 2. Quoting Engine States
    const [seatSlider, setSeatSlider] = useState(25); // Set to 25 to match your initial UI display
    const [addons, setAddons] = useState({
        addon1: false, // AI Copilot ($500)
        addon2: false, // Security Pack ($200)
        addon3: false, // Support SLA ($350)
    });

    // 3. ROI Engine States
    const [roiTeamSize, setRoiTeamSize] = useState(15); // Set to 15 to match initial UI layout
    const [roiWage, setRoiWage] = useState(45);        // Set to 45 to match initial UI layout
    const [roiHours, setRoiHours] = useState(4);        // Set to 4 to match initial UI layout

    // 4. Accordion & FAQ States
    const [activeAccordion, setActiveAccordion] = useState(null); 
    const [openFaqs, setOpenFaqs] = useState({});

    // --- CALCULATIONS ENGINE ---

    // Dynamic Card Prices Calculation
    const starterPrice = isAnnual ? '$15' : '$19';
    const proPrice = isAnnual ? '$39' : '$49';

    // Quoting Engine Math
    const seats = parseInt(seatSlider) || 0;
    let pricePerSeat = isAnnual ? 39 : 49;
    let discount = 1;

    if (seats > 50) {
        discount = 0.85; // 15% discount
    }

    // Addon calculation matching the specific costs listed in your UI layout
    let addonTotal = 0;
    if (addons.addon1) addonTotal += 500; 
    if (addons.addon2) addonTotal += 200;
    if (addons.addon3) addonTotal += 350;

    const monthlyTotal = (seats * pricePerSeat * discount) + addonTotal;
    const totalInvestment = `$${Math.round(monthlyTotal).toLocaleString()}`;

    const annualVal = monthlyTotal * 12;
    // Agarr annual toggled hai toh overall 20% billing deduction visual savings count
    const savings = isAnnual ? (annualVal * 0.2) : (annualVal * 0.1);
    const annualSaving = `Annual Savings: $${Math.round(savings).toLocaleString()}`;

    // ROI Engine Math
   // ROI Engine Math
    const team = parseInt(roiTeamSize) || 0;
    const wage = parseInt(roiWage) || 0;
    const hours = parseInt(roiHours) || 0;

    // 1. Pehle monthly saved calculate karein (Isse niche display aur logic dono mein use kiya hai)
    const monthlySaved = team * wage * hours * 4; 
    
    // 2. Iss new variable ko add kiya jo dynamic format ke saath return mein display hoga
    const roiTotalSaved = `$${monthlySaved.toLocaleString()}`; 

    const toolCost = Math.round(monthlyTotal) || 1;

    const multiplier = (monthlySaved / toolCost).toFixed(1);
    const roiMultiplier = `${multiplier}x`;

    const percentage = Math.min(100, (parseFloat(multiplier) / 20) * 100);
    const roiBarWidth = `${percentage}%`;

    // FAQ Handler
    const toggleFaq = (index) => {
        setOpenFaqs(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <>
            <main className="relative pt-32 pb-xxl">
                {/* Header Section */}
                <section className="max-w-4xl mx-auto text-center px-6 mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">New Enterprise Tiers</span>
                    </div>
                    <h1 className="font-display-lg text-display-lg mb-6 leading-tight">
                        Pricing that scales with <span className="gradient-text">your ambition.</span>
                    </h1>
                    <p className="text-on-surface-variant text-body-lg max-w-2xl mx-auto">
                        From high-growth startups to global enterprises, TaskFlow Pro provides the precision tools you need to achieve absolute flow.
                    </p>
                </section>

                {/* Pricing Cards Section */}
                <section className="max-w-container-max mx-auto px-6 mb-32">
                    <div className="flex flex-col items-center mb-16">
                        <div className="flex items-center gap-4 p-1.5 glass rounded-full mb-4">
                            <button 
                                type="button"
                                className={`px-8 py-2 rounded-full !font-label-md !text-label-lg transition-all duration-300 ${!isAnnual ? '!bg-primary !text-on-primary' : '!text-on-surface-variant'}`}
                                onClick={() => setIsAnnual(false)}
                            >
                                Monthly
                            </button>
                            <button 
                                type="button"
                                className={`px-8 py-2 rounded-full !font-label-md !text-label-lg transition-all duration-300 ${isAnnual ? '!bg-primary !text-on-primary' : '!text-on-surface-variant'}`}
                                onClick={() => setIsAnnual(true)}
                            >
                                Annual
                            </button>
                        </div>
                        <p className="text-secondary font-label-sm text-label-sm">Save 20% with annual billing</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                        {/* Starter Plan */}
                        <div className="glass p-lg rounded-lg flex flex-col springy border-white/5">
                            <h3 className="font-headline-md text-headline-md mb-2">Starter</h3>
                            <p className="text-on-surface-variant mb-6 h-12">Essential task management for small squads.</p>
                            <div className="mb-8">
                                <span className="font-display-lg text-display-lg">{starterPrice}</span>
                                <span className="text-on-surface-variant">/mo</span>
                            </div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                <li className="flex items-center gap-3 text-on-surface-variant">
                                    <span className="material-symbols-outlined text-primary" data-icon="check_circle"></span>
                                    Up to 5 users
                                </li>
                                <li className="flex items-center gap-3 text-on-surface-variant">
                                    <span className="material-symbols-outlined text-primary" data-icon="check_circle"></span>
                                    Unlimited public projects
                                </li>
                                <li className="flex items-center gap-3 text-on-surface-variant">
                                    <span className="material-symbols-outlined text-primary" data-icon="check_circle"></span>
                                    Basic Flow Analytics
                                </li>
                            </ul>
                            <button className="w-full py-4 rounded-xl border border-white/20 font-bold hover:bg-white/5 transition-colors">Start for Free</button>
                        </div>

                        {/* Pro Plan */}
                        <div className="glass neon-border p-lg rounded-lg flex flex-col springy relative scale-105 z-10 bg-surface/40">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-bg px-4 py-1 rounded-full text-white font-label-sm text-label-sm uppercase tracking-tighter">Most Popular</div>
                            <h3 className="font-headline-md text-headline-md mb-2">Pro</h3>
                            <p className="text-on-surface-variant mb-6 h-12">High-performance tools for growing teams.</p>
                            <div className="mb-8">
                                <span className="font-display-lg text-display-lg">{proPrice}</span>
                                <span className="text-on-surface-variant">/mo</span>
                            </div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary" data-icon="check_circle"></span>
                                    Up to 50 users
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary" data-icon="check_circle"></span>
                                    AI Task Orchestrator
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary" data-icon="check_circle"></span>
                                    Advanced Team Insights
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary" data-icon="check_circle"></span>
                                    Custom Workflows
                                </li>
                            </ul>
                            <button className="w-full py-4 rounded-xl gradient-bg font-bold shadow-xl shadow-primary/10">Get Started Now</button>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="glass p-lg rounded-lg flex flex-col springy border-white/5">
                            <h3 className="font-headline-md text-headline-md mb-2">Enterprise</h3>
                            <p className="text-on-surface-variant mb-6 h-12">Global scale, security, and governance.</p>
                            <div className="mb-8">
                                <span className="font-display-lg text-display-lg">Custom</span>
                            </div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                <li className="flex items-center gap-3 text-on-surface-variant">
                                    <span className="material-symbols-outlined text-primary" data-icon="check_circle"></span>
                                    Unlimited users
                                </li>
                                <li className="flex items-center gap-3 text-on-surface-variant">
                                    <span className="material-symbols-outlined text-primary" data-icon="check_circle"></span>
                                    SSO &amp; SAML Security
                                </li>
                                <li className="flex items-center gap-3 text-on-surface-variant">
                                    <span className="material-symbols-outlined text-primary" data-icon="check_circle"></span>
                                    Dedicated Support Engineer
                                </li>
                                <li className="flex items-center gap-3 text-on-surface-variant">
                                    <span className="material-symbols-outlined text-primary" data-icon="check_circle"></span>
                                    Custom API Limits
                                </li>
                            </ul>
                            <button className="w-full py-4 rounded-xl border border-white/20 font-bold hover:bg-white/5 transition-colors">Contact Sales</button>
                        </div>
                    </div>
                </section>

                {/* Quoting Engine & ROI Calculator Grid */}
                <section className="max-w-container-max mx-auto px-6 mb-32 grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                    
                    {/* Quoting Engine */}
                    <div className="lg:col-span-7 glass-heavy p-xl rounded-lg border-white/10">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="material-symbols-outlined text-primary" data-icon="manufacturing"></span>
                            <h2 className="font-headline-md text-headline-md">Custom Quoting Engine</h2>
                        </div>
                        <div className="space-y-10">
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <label className="font-label-md text-label-md text-on-surface-variant">Estimated Seats</label>
                                    <span className="font-display-lg text-headline-md text-primary">{seatSlider}</span>
                                </div>
                                <input 
                                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer" 
                                    max="250" 
                                    min="1" 
                                    type="range" 
                                    value={seatSlider}
                                    onChange={(e) => setSeatSlider(parseInt(e.target.value))}
                                />
                                <div className={`mt-3 text-secondary text-label-sm font-label-sm ${seats > 50 ? 'block' : 'hidden'}`}>
                                    <span className="material-symbols-outlined align-middle text-[14px]" data-icon="celebration"></span>
                                    Volume discount applied: 15% off total seats
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Addon 1 */}
                                <div 
                                    className={`flex items-center justify-between p-4 glass rounded-xl cursor-pointer select-none springy border-white/5 addon-card ${addons.addon1 ? 'border-primary/40 bg-white/5' : ''}`}
                                    onClick={() => setAddons(prev => ({ ...prev, addon1: !prev.addon1 }))}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-secondary" data-icon="smart_toy"></span>
                                        <div>
                                            <p className="font-label-md">AI Copilot</p>
                                            <p className="text-xs text-on-surface-variant">+$500/mo</p>
                                        </div>
                                    </div>
                                    <input 
                                        className="rounded border-white/20 bg-transparent text-primary focus:ring-primary addon-check" 
                                        type="checkbox" 
                                        checked={addons.addon1}
                                        onChange={() => {}} // Click handled by parent div
                                    />
                                </div>
                                
                                {/* Addon 2 */}
                                <div 
                                    className={`flex items-center justify-between p-4 glass rounded-xl cursor-pointer select-none springy border-white/5 addon-card ${addons.addon2 ? 'border-primary/40 bg-white/5' : ''}`}
                                    onClick={() => setAddons(prev => ({ ...prev, addon2: !prev.addon2 }))}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-secondary" data-icon="verified_user"></span>
                                        <div>
                                            <p className="font-label-md">Security Pack</p>
                                            <p className="text-xs text-on-surface-variant">+$200/mo</p>
                                        </div>
                                    </div>
                                    <input 
                                        className="rounded border-white/20 bg-transparent text-primary focus:ring-primary addon-check" 
                                        type="checkbox" 
                                        checked={addons.addon2}
                                        onChange={() => {}} 
                                    />
                                </div>

                                {/* Addon 3 */}
                                <div 
                                    className={`flex items-center justify-between p-4 glass rounded-xl cursor-pointer select-none springy border-white/5 addon-card ${addons.addon3 ? 'border-primary/40 bg-white/5' : ''}`}
                                    onClick={() => setAddons(prev => ({ ...prev, addon3: !prev.addon3 }))}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-secondary" data-icon="support_agent"></span>
                                        <div>
                                            <p className="font-label-md">Support SLA</p>
                                            <p className="text-xs text-on-surface-variant">+$350/mo</p>
                                        </div>
                                    </div>
                                    <input 
                                        className="rounded border-white/20 bg-transparent text-primary focus:ring-primary addon-check" 
                                        type="checkbox" 
                                        checked={addons.addon3}
                                        onChange={() => {}} 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-end gap-6">
                            <div>
                                <p className="text-on-surface-variant font-label-sm text-label-sm mb-1 uppercase">Total Monthly Investment</p>
                                <p className="font-display-lg text-display-lg gradient-text">{totalInvestment}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-secondary font-label-md text-label-md font-bold mb-1">{annualSaving}</p>
                                <p className="text-on-surface-variant text-xs">Excluding tax and setup fees</p>
                            </div>
                        </div>
                    </div>

                    {/* ROI Calculator */}
                    <div className="lg:col-span-5 glass-heavy p-xl rounded-lg border-white/10 flex flex-col">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="material-symbols-outlined text-secondary" data-icon="query_stats"></span>
                            <h2 className="font-headline-md text-headline-md">ROI Calculator</h2>
                        </div>
                        <div className="space-y-6 flex-grow">
                            <div>
                                <label className="block text-label-sm font-label-sm text-on-surface-variant mb-2">Team Size</label>
                                <input 
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary focus:ring-0 outline-none transition-colors text-white" 
                                    type="number" 
                                    value={roiTeamSize}
                                    onChange={(e) => setRoiTeamSize(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-label-sm font-label-sm text-on-surface-variant mb-2">Avg. Hourly Wage ($)</label>
                                <input 
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary focus:ring-0 outline-none transition-colors text-white" 
                                    type="number" 
                                    value={roiWage}
                                    onChange={(e) => setRoiWage(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-label-sm font-label-sm text-on-surface-variant mb-2">Hours Saved/User/Week</label>
                                <input 
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary focus:ring-0 outline-none transition-colors text-white" 
                                    type="number" 
                                    value={roiHours}
                                    onChange={(e) => setRoiHours(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mt-12 p-6 glass rounded-2xl bg-primary/5 border border-primary/20">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <p className="text-on-surface-variant text-label-sm font-label-sm mb-1 uppercase">Monthly Money Saved</p>
                                    <p className="text-headline-lg font-headline-lg text-primary">{roiTotalSaved}</p>
                                </div>
                                <div className="w-16 h-16 rounded-full border-4 border-primary/20 flex items-center justify-center relative">
                                    <div className="absolute inset-0 border-4 border-primary rounded-full" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}></div>
                                    <span className="font-bold text-primary">{roiMultiplier}</span>
                                </div>
                            </div>
                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                <div 
                                    className="h-full gradient-bg transition-all duration-500" 
                                    style={{ width: roiBarWidth }}
                                ></div>
                            </div>
                            <p className="text-xs text-on-surface-variant mt-4 text-center">Based on industry standard TaskFlow efficiency metrics.</p>
                        </div>
                    </div>
                </section>

                {/* Deep Feature Analysis (Accordion) */}
                <section className="max-w-4xl mx-auto px-6 mb-32">
                    <h2 className="font-display-lg text-headline-md mb-12 text-center">Deep Feature Analysis</h2>
                    <div className="space-y-4">
                        {/* Accordion 1 */}
                        <div className="glass rounded-xl overflow-hidden accordion-item border-white/5">
                            <button 
                                className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
                                onClick={() => setActiveAccordion(activeAccordion === 0 ? null : 0)}
                            >
                                <span className="font-headline-md text-headline-md">AI Automation</span>
                                <span 
                                    className="material-symbols-outlined transition-transform duration-300" 
                                    style={{ transform: activeAccordion === 0 ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                    data-icon="expand_more"
                                ></span>
                            </button>
                            <div className={`px-8 pb-8 text-on-surface-variant ${activeAccordion === 0 ? 'block' : 'hidden'}`}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-4 glass rounded-lg">
                                        <h4 className="font-bold text-on-surface mb-2">Predictive Scheduling</h4>
                                        <p className="text-sm">Machine learning models that suggest optimal task distribution based on historical velocity.</p>
                                    </div>
                                    <div className="p-4 glass rounded-lg">
                                        <h4 className="font-bold text-on-surface mb-2">Natural Language Engine</h4>
                                        <p className="text-sm">Type commands like you're talking to a teammate and watch complex workflows build themselves.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Accordion 2 */}
                        <div className="glass rounded-xl overflow-hidden accordion-item border-white/5">
                            <button 
                                className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
                                onClick={() => setActiveAccordion(activeAccordion === 1 ? null : 1)}
                            >
                                <span className="font-headline-md text-headline-md">Security &amp; SLA</span>
                                <span 
                                    className="material-symbols-outlined transition-transform duration-300" 
                                    style={{ transform: activeAccordion === 1 ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                    data-icon="expand_more"
                                ></span>
                            </button>
                            <div className={`px-8 pb-8 text-on-surface-variant ${activeAccordion === 1 ? 'block' : 'hidden'}`}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-4 glass rounded-lg">
                                        <h4 className="font-bold text-on-surface mb-2">99.99% Uptime Guarantee</h4>
                                        <p className="text-sm">Redundant global infrastructure with financial backing for enterprise stability.</p>
                                    </div>
                                    <div className="p-4 glass rounded-lg">
                                        <h4 className="font-bold text-on-surface mb-2">Data Residency</h4>
                                        <p className="text-sm">Choose where your data lives with support for EU, US, and APAC regions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Frequently Asked Questions */}
                <section className="max-w-3xl mx-auto px-6 mb-32">
                    <h2 className="font-display-lg text-headline-md mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {/* FAQ Item 1 */}
                        <div className="border-b border-white/10 pb-4">
                            <button 
                                className="w-full flex justify-between items-center text-left py-4 font-label-md text-label-md hover:text-primary transition-colors faq-trigger"
                                onClick={() => toggleFaq(0)}
                            >
                                Can we switch plans at any time?
                                <span 
                                    className="material-symbols-outlined transition-transform duration-200"
                                    style={{ transform: openFaqs[0] ? 'rotate(45deg)' : 'rotate(0deg)' }}
                                    data-icon="add"
                                ></span>
                            </button>
                            <div className={`${openFaqs[0] ? 'block' : 'hidden'} text-on-surface-variant text-sm mt-2 faq-content`}>
                                Yes, you can upgrade or downgrade your plan at any time. Changes are reflected immediately and prorated in your next billing cycle.
                            </div>
                        </div>

                        {/* FAQ Item 2 */}
                        <div className="border-b border-white/10 pb-4">
                            <button 
                                className="w-full flex justify-between items-center text-left py-4 font-label-md text-label-md hover:text-primary transition-colors faq-trigger"
                                onClick={() => toggleFaq(1)}
                            >
                                Do you offer discounts for non-profits?
                                <span 
                                    className="material-symbols-outlined transition-transform duration-200"
                                    style={{ transform: openFaqs[1] ? 'rotate(45deg)' : 'rotate(0deg)' }}
                                    data-icon="add"
                                ></span>
                            </button>
                            <div className={`${openFaqs[1] ? 'block' : 'hidden'} text-on-surface-variant text-sm mt-2 faq-content`}>
                                Absolutely. We offer a 50% discount for registered non-profit organizations. Contact our sales team for verification.
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-container-max mx-auto px-6 mb-32">
                    <div className="glass-heavy p-xxl rounded-lg text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 pointer-events-none"></div>
                        <h2 className="font-display-lg text-display-lg mb-6">Ready to reach <span className="gradient-text">terminal velocity?</span></h2>
                        <p className="text-on-surface-variant text-body-lg mb-10 max-w-xl mx-auto">
                            Join 2,500+ high-performance teams already using TaskFlow Pro to reclaim their focus.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="gradient-bg text-white font-bold px-10 py-5 rounded-full springy shadow-2xl shadow-primary/30 text-lg">Start Free Trial</button>
                            <button className="glass px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-colors text-lg">Download Whitepaper</button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Hero;