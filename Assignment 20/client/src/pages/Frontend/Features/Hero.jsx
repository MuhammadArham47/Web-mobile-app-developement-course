import { useState, useRef, useEffect, useCallback } from "react";

function Hero() {
  
    const [terminalLines, setTerminalLines] = useState([
        { text: "> TaskFlow CLI v4.2.0 initialized.", type: "system" },
        { text: "Ready for command execution...", type: "ready" }
    ]);
    const terminalEndRef = useRef(null);
    const activeIntervalRef = useRef(null);

    const logs = {
        deploy: [
            "Initiating deployment sequence to production-cluster-a...",
            "Validating container health checks...",
            "Building image artifact: v4.2.0-stable",
            "Uploading to registry: 100%",
            "Updating Kubernetes deployment manifests...",
            "Traffic shifting: 10% -> 50% -> 100%",
            "Deployment SUCCESSFUL. Production is live."
        ],
        test: [
            "Starting test runner v2.1.4",
            "Running 154 unit tests...",
            "PASS: Authentication flow",
            "PASS: Database migration scripts",
            "PASS: API Endpoint sanitization",
            "Running integration tests...",
            "All suites passed (0 failures, 154 successes)."
        ],
        cache: [
            "Connecting to Redis global cluster...",
            "Scanning key patterns: user_session:*, task_id:*",
            "Purging 14,802 stale entries...",
            "Invalidating CDN edge nodes...",
            "Cache purge complete. Performance impact: +140ms."
        ],
        sync: [
            "Verifying database checksums...",
            "Synchronizing staging and production records...",
            "Merged 152 missing deltas.",
            "Updating sequence numbers...",
            "Database sync: DONE."
        ]
    };

    const runTerminal = (key) => {
        if (activeIntervalRef.current) {
            clearInterval(activeIntervalRef.current);
        }

        const selectedLogs = logs[key];
        if (!selectedLogs) return;

        setTerminalLines((prev) => [
            ...prev,
            { text: `>> Executing command: ${key.toUpperCase()}`, type: "command" }
        ]);

        let logIndex = 0;
        
        activeIntervalRef.current = setInterval(() => {
            if (logIndex < selectedLogs.length) {
                const fullText = selectedLogs[logIndex];
                
                setTerminalLines((prev) => [...prev, { text: "", type: "log" }]);

                let charIndex = 0;
                const typeChar = () => {
                    if (charIndex <= fullText.length) {
                        setTerminalLines((prev) => {
                            const updated = [...prev];
                            if (updated[updated.length - 1]) {
                                updated[updated.length - 1].text = fullText.slice(0, charIndex);
                            }
                            return updated;
                        });
                        charIndex++;
                        setTimeout(typeChar, 20);
                    }
                };

                typeChar();
                logIndex++;
            } else {
                clearInterval(activeIntervalRef.current);
            }
        }, 800);
    };

    // Terminal ko auto-scroll karne ke liye effect
    useEffect(() => {
        if (terminalEndRef.current) {
            terminalEndRef.current.scrollTop = terminalEndRef.current.scrollHeight;
        }
    }, [terminalLines]);

    // Component unmount hote waqt interval clear karne ke liye cleanup
    useEffect(() => {
        return () => {
            if (activeIntervalRef.current) clearInterval(activeIntervalRef.current);
        };
    }, []);


    // ----------------------------------------
    // 2. AI Resource Planner Logic
    // ----------------------------------------
    const [team, setTeam] = useState(25);
    const [speed, setSpeed] = useState(2.5);
    const [complexityIndex, setComplexityIndex] = useState(2); // 1: Low, 2: Balanced, 3: Extreme

    const complexities = ['Low', 'Balanced', 'Extreme'];

    // Calculations
    let efficiency = (80 + (speed * 4)) - (team * 0.2) - (complexityIndex * 5);
    efficiency = Math.min(Math.max(efficiency, 10), 98).toFixed(0);

    let ttm = (100 / (speed * (team / 5))) * complexityIndex;
    ttm = Math.min(Math.max(ttm, 3), 90).toFixed(0);

    const offset = 552.92 - (efficiency * 552.92 / 100);

    return (
        <>
            <main className="pt-xxl pb-xxl px-lg max-w-container-max mx-auto space-y-xxl overflow-hidden">
                <section className="text-center py-xl relative">
                    <div className="space-y-md">
                        <h1 className="font-display-lg text-display-lg tracking-tighter neon-gradient-text">Engineering Flow State.</h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Deep-dive into the architectural precision of TaskFlow Pro's elite feature set.</p>
                    </div>
                </section>

                {/* DEV-OPS ENGINE SECTION */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
                    <div className="lg:col-span-4 space-y-md">
                        <div className="inline-flex items-center gap-sm px-md py-xs rounded-full bg-primary/10 border border-primary/20">
                            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1;" }}>terminal</span>
                            <span className="font-label-sm text-label-sm text-primary">DEV-OPS ENGINE</span>
                        </div>
                        <h2 className="font-headline-lg text-headline-lg">Automated Infrastructure Orchestration</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">Manage your deployment pipelines directly within your workspace. Real-time logging, instant triggers, and automated scaling indicators.</p>
                        <div className="flex flex-wrap gap-sm pt-md">
                            <button className="spring-btn px-md py-sm bg-gradient-to-r from-primary to-secondary text-on-primary font-label-md text-label-md rounded-full shadow-lg shadow-primary/20" onClick={() => runTerminal('deploy')}>Deploy Production</button>
                            <button className="spring-btn px-md py-sm bg-white/10 border border-white/20 text-on-surface font-label-md text-label-md rounded-full" onClick={() => runTerminal('test')}>Run Test Suites</button>
                            <button className="spring-btn px-md py-sm bg-white/10 border border-white/20 text-on-surface font-label-md text-label-md rounded-full" onClick={() => runTerminal('cache')}>Cache Purge</button>
                            <button className="spring-btn px-md py-sm bg-white/10 border border-white/20 text-on-surface font-label-md text-label-md rounded-full" onClick={() => runTerminal('sync')}>Sync Database</button>
                        </div>
                    </div>
                    <div className="lg:col-span-8">
                        <div className="glass-card rounded-lg overflow-hidden border border-white/10 flex flex-col h-[400px]">
                            <div className="bg-white/5 border-b border-white/10 px-md py-sm flex justify-between items-center">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-error/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-secondary/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-primary/80"></div>
                                </div>
                                <div className="flex items-center gap-sm">
                                    <div className="status-pulse w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#c0c1ff]"></div>
                                    <span className="font-label-sm text-label-sm text-primary opacity-80 uppercase tracking-widest">System Live</span>
                                </div>
                            </div>
                            <div 
                                ref={terminalEndRef}
                                className="p-md font-label-sm text-label-sm text-on-surface-variant/90 font-mono flex-1 overflow-y-auto terminal-scrollbar bg-black/40" 
                                id="terminal"
                            >
                                {terminalLines.map((line, index) => {
                                    if (line.type === 'command') {
                                        return <div key={index} className="text-secondary mt-4">{line.text}</div>;
                                    } else if (line.type === 'system') {
                                        return <div key={index} className="text-primary mb-2">{line.text}</div>;
                                    } else if (line.type === 'ready') {
                                        return <div key={index} className="text-on-surface/40 mb-2">{line.text}</div>;
                                    } else {
                                        return <div key={index} className="mt-1 transition-opacity duration-300">{line.text}</div>;
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* AI RESOURCE PLANNER SECTION */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                    <div className="lg:col-span-12">
                        <div className="glass-card p-xl rounded-lg border border-white/10 relative overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl relative z-10">
                                <div className="space-y-xl">
                                    <div className="space-y-xs">
                                        <h3 className="font-headline-md text-headline-md neon-gradient-text">AI Resource Planner</h3>
                                        <p className="font-body-md text-body-md text-on-surface-variant">Model team efficiency using our predictive optimization engine.</p>
                                    </div>
                                    <div className="space-y-lg">
                                        <div className="space-y-sm">
                                            <div className="flex justify-between font-label-md text-label-md">
                                                <span>Team Size</span>
                                                <span className="text-primary" id="val-team">{team}</span>
                                            </div>
                                            <input 
                                                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary" 
                                                id="team-size" 
                                                max="50" 
                                                min="1" 
                                                type="range" 
                                                value={team}
                                                onChange={(e) => setTeam(parseInt(e.target.value))}
                                            />
                                        </div>
                                        <div className="space-y-sm">
                                            <div className="flex justify-between font-label-md text-label-md">
                                                <span>Velocity Speed</span>
                                                <span className="text-primary" id="val-speed">{speed}x</span>
                                            </div>
                                            <input 
                                                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-secondary" 
                                                id="velocity-speed" 
                                                max="5" 
                                                min="1" 
                                                step="0.1" 
                                                type="range" 
                                                value={speed}
                                                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                                            />
                                        </div>
                                        <div className="space-y-sm">
                                            <div className="flex justify-between font-label-md text-label-md">
                                                <span>Workload Complexity</span>
                                                <span className="text-primary" id="val-complexity">{complexities[complexityIndex - 1]}</span>
                                            </div>
                                            <input 
                                                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-tertiary" 
                                                id="workload" 
                                                max="3" 
                                                min="1" 
                                                type="range" 
                                                value={complexityIndex}
                                                onChange={(e) => setComplexityIndex(parseInt(e.target.value))}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center space-y-md border-t md:border-t-0 md:border-l border-white/10 pt-xl md:pt-0 md:pl-xl">
                                    <div className="relative w-48 h-48">
                                        <svg className="w-full h-full transform -rotate-90">
                                            <circle className="text-white/5" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="8"></circle>
                                            <circle 
                                                className="text-primary transition-all duration-500 ease-out" 
                                                cx="96" 
                                                cy="96" 
                                                fill="transparent" 
                                                id="gauge-circle" 
                                                r="88" 
                                                stroke="currentColor" 
                                                strokeDasharray="552.92" 
                                                strokeDashoffset={offset} 
                                                strokeWidth="12"
                                            ></circle>
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className="font-display-lg text-headline-lg font-bold" id="index-val">{efficiency}%</span>
                                            <span className="font-label-sm text-label-sm opacity-50">Efficiency</span>
                                        </div>
                                    </div>
                                    <div className="text-center space-y-xs">
                                        <p className="font-label-md text-label-md text-on-surface-variant">Estimated Time-to-Market</p>
                                        <p className="font-headline-md text-headline-md text-secondary" id="ttm-val">{ttm} Days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ANALYTICS SUITE SECTION */}
                <section className="space-y-lg">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-md">
                        <div className="space-y-xs">
                            <h2 className="font-headline-lg text-headline-lg">Pro Analytics Suite</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">Granular visualization of every development metric in your stack.</p>
                        </div>
                        <div className="flex gap-sm">
                            <button className="px-md py-sm bg-primary/10 text-primary border border-primary/20 rounded-full font-label-sm text-label-sm">Real-time</button>
                            <button className="px-md py-sm hover:bg-white/5 text-on-surface-variant rounded-full font-label-sm text-label-sm">7 Days</button>
                            <button className="px-md py-sm hover:bg-white/5 text-on-surface-variant rounded-full font-label-sm text-label-sm">30 Days</button>
                        </div>
                    </div>
                    <div className="glass-card p-lg rounded-lg border border-white/10 h-[400px] relative overflow-hidden group">
                        <div className="absolute top-md right-md z-20 flex gap-4">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-primary"></span>
                                <span className="font-label-sm text-label-sm opacity-70">Throughput</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-secondary"></span>
                                <span className="font-label-sm text-label-sm opacity-70">Uptime</span>
                            </div>
                        </div>
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 300">
                            <defs>
                                <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#c0c1ff" stopOpacity="0.3"></stop>
                                    <stop offset="100%" stopColor="#c0c1ff" stopOpacity="0(')"></stop>
                                </linearGradient>
                                <linearGradient id="lineGradient" x1="0" x2="1" y1="0" y2="0">
                                    <stop offset="0%" stopColor="#c0c1ff"></stop>
                                    <stop offset="100%" stopColor="#ffb0cd"></stop>
                                </linearGradient>
                            </defs>
                            <g className="opacity-10">
                                <line stroke="white" strokeWidth="1" x1="0" x2="1000" y1="75" y2="75"></line>
                                <line stroke="white" strokeWidth="1" x1="0" x2="1000" y1="150" y2="150"></line>
                                <line stroke="white" strokeWidth="1" x1="0" x2="1000" y1="225" y2="225"></line>
                            </g>
                            <path className="transition-all duration-1000" d="M0,250 Q100,200 200,230 T400,100 T600,180 T800,80 T1000,120 V300 H0 Z" fill="url(#areaGradient)"></path>
                            <path className="group-hover:stroke-[5] transition-all duration-300" d="M0,250 Q100,200 200,230 T400,100 T600,180 T800,80 T1000,120" fill="none" stroke="url(#lineGradient)" strokeLinecap="round" strokeWidth="4"></path>
                            <circle className="animate-pulse" cx="400" cy="100" fill="#c0c1ff" r="6"></circle>
                            <circle className="animate-pulse" cx="800" cy="80" fill="#ffb0cd" r="6"></circle>
                        </svg>
                        <div className="absolute inset-0 pointer-events-none border border-primary/0 group-hover:border-primary/10 transition-colors"></div>
                    </div>
                </section>

                {/* ADDITIONAL INFO SECTION */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                    <div className="glass-card p-lg rounded-lg border border-white/5 space-y-md">
                        <span className="material-symbols-outlined text-secondary text-display-lg" style={{ fontVariationSettings: "'FILL' 1;" }}>shield_with_heart</span>
                        <h4 className="font-headline-md text-headline-md">Elite Security</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant">Zero-trust architecture with biometric session locking and encrypted data pipelines.</p>
                    </div>
                    <div className="glass-card p-lg rounded-lg border border-white/5 space-y-md">
                        <span className="material-symbols-outlined text-primary text-display-lg" style={{ fontVariationSettings: "'FILL' 1;" }}>auto_awesome</span>
                        <h4 className="font-headline-md text-headline-md">AI Insights</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant">Predictive bottleneck detection before they affect your production velocity.</p>
                    </div>
                    <div className="glass-card p-lg rounded-lg border border-white/5 space-y-md">
                        <span className="material-symbols-outlined text-tertiary text-display-lg" style={{ fontVariationSettings: "'FILL' 1;" }}>cloud_sync</span>
                        <h4 className="font-headline-md text-headline-md">Cloud Sync</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant">Seamless multi-region synchronization with ultra-low latency conflict resolution.</p>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Hero;