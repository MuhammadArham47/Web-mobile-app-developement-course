import React, { useState, useEffect } from 'react';

function Hero() {
    // --- Data Sources ---
    const resources = [
        { id: 1, type: 'guide', title: 'The Velocity Framework', desc: 'Accelerate team output by 40% with these Kanban secrets.', icon: 'bolt' },
        { id: 2, type: 'case-study', title: 'Global Scaling at Acme Corp', desc: 'How a 5,000 person org synchronized globally.', icon: 'hub' },
        { id: 3, type: 'doc', title: 'API Reference v2.4', desc: 'Complete documentation for our GraphQL integration points.', icon: 'code' },
        { id: 4, type: 'guide', title: 'Deep Work Design', desc: 'Configuring TaskFlow to minimize distractions.', icon: 'visibility_off' },
        { id: 5, type: 'case-study', title: 'Fintech Security Audit', desc: 'Securing mission-critical data in transit.', icon: 'verified_user' },
        { id: 6, type: 'doc', title: 'Automated Reporting', desc: 'Setting up recurring performance dashboards.', icon: 'analytics' },
    ];

    const initialTemplates = {
        agile: {
            name: "Agile Kanban Preview",
            columns: ["To Do", "In Progress", "Code Review", "Done"],
            tasks: [
                { id: 101, col: 0, text: "Refactor core authentication", priority: "High" },
                { id: 102, col: 1, text: "UI Polish: Resource Grid", priority: "Medium" }
            ]
        },
        devops: {
            name: "CI/CD Pipeline Flow",
            columns: ["Build", "Test", "Staging", "Production"],
            tasks: [
                { id: 201, col: 2, text: "Final security sanity check", priority: "Critical" },
                { id: 202, col: 0, text: "Node 20.x dependency update", priority: "Low" }
            ]
        },
        agency: {
            name: "Creative Brand Portal",
            columns: ["Backlog", "Design", "Client Review", "Finalized"],
            tasks: [
                { id: 301, col: 1, text: "Social Media Banner Suite", priority: "Medium" },
                { id: 302, col: 3, text: "Brand Style Guide v4", priority: "Done" }
            ]
        }
    };

    const quizData = [
        { q: "How large is your project management scope?", o: ["Personal Projects", "Mid-sized Team", "Enterprise Operations"] },
        { q: "What is your primary goal?", o: ["Speed/Velocity", "Compliance/Security", "Collaboration"] },
        { q: "Current Experience with TaskFlow?", o: ["Complete Novice", "Comfortable", "Power User"] }
    ];

    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');

    const [templates, setTemplates] = useState(initialTemplates);
    const [currentTemplate, setCurrentTemplate] = useState('agile');

    const [checkedLessons, setCheckedLessons] = useState([false, false, false]);
    const [progressOffset, setProgressOffset] = useState(251.2);
    const [progressPercentage, setProgressPercentage] = useState(0);

    const [quizMode, setQuizMode] = useState('intro');
    const [quizStep, setQuizStep] = useState(0);

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fadeInUp {
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    useEffect(() => {
        const total = checkedLessons.length;
        const checkedCount = checkedLessons.filter(Boolean).length;
        const percentage = Math.round((checkedCount / total) * 100);
        const offset = 251.2 - (251.2 * percentage / 100);
        
        setProgressPercentage(percentage);
        setProgressOffset(offset);
    }, [checkedLessons]);

    const filteredResources = resources.filter(r => {
        const matchesType = filter === 'all' || r.type === filter;
        const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase()) || 
                              r.desc.toLowerCase().includes(search.toLowerCase());
        return matchesType && matchesSearch;
    });

    const addMockTask = () => {
        const newTask = {
            id: Date.now(),
            col: 0,
            text: "Dynamic React Module",
            priority: "High"
        };
        
        setTemplates(prev => ({
            ...prev,
            [currentTemplate]: {
                ...prev[currentTemplate],
                tasks: [...prev[currentTemplate].tasks, newTask]
            }
        }));
    };

    const handleLessonChange = (index) => {
        setCheckedLessons(prev => {
            const updated = [...prev];
            updated[index] = !updated[index];
            return updated;
        });
    };

    const startQuiz = () => {
        setQuizStep(0);
        setQuizMode('question');
    };

    const nextQuizStep = () => {
        if (quizStep < 2) {
            setQuizStep(prev => prev + 1);
        } else {
            setQuizMode('result');
        }
    };

    const resetQuiz = () => {
        setQuizMode('intro');
        setQuizStep(0);
    };

    return (
        <>
            <main class="pt-32 pb-xxl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto space-y-xxl">
                {/* Hero Section */}
                <section class="relative">
                    <div class="text-center space-y-6 max-w-3xl mx-auto">
                        <h1 class="font-display-lg text-display-lg text-on-surface">Master the Art of <span class="text-transparent bg-clip-text neon-gradient">Productivity</span></h1>
                        <p class="text-body-lg text-on-surface-variant">The definitive portal for scaling your team's throughput with elite workflows, templates, and interactive training.</p>
                    </div>
                </section>

                {/* Resource Hub */}
                <section class="space-y-xl" id="resource-hub">
                    <div class="flex flex-col md:flex-row md:items-end justify-between gap-md">
                        <div class="space-y-sm">
                            <h2 class="font-headline-lg text-headline-lg text-on-surface">Resource Library</h2>
                            <p class="text-on-surface-variant">Filter through high-performance assets.</p>
                        </div>
                        <div class="flex flex-col md:flex-row gap-md w-full md:w-auto">
                            <div class="relative group w-full md:w-80">
                                <span class="material-symbols-outlined absolute left-4 top-9 -translate-y-1/2 text-outline">search</span>
                                <input 
                                    class="w-full !bg-surface-container-lowest border border-white/10 rounded-full py-3 pl-12 pr-4 focus:ring-0 focus:outline-none focus:border-primary transition-all neon-border-focus font-body-md" 
                                    placeholder="Search keywords..." 
                                    type="text" 
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <div class="flex flex-wrap gap-2 items-center">
                                {['all', 'guide', 'case-study', 'doc'].map((type) => (
                                    <button 
                                        key={type}
                                        class={`category-pill px-4 py-1.5 rounded-full border font-label-md transition-all active:scale-95 ${
                                            filter === type 
                                            ? 'border-primary bg-primary/10 text-primary' 
                                            : 'border-white/10 bg-surface-container-low text-on-surface-variant hover:border-primary/50'
                                        }`}
                                        onClick={() => setFilter(type)}
                                    >
                                        {type === 'all' ? 'All' : type === 'case-study' ? 'Case Studies' : type === 'doc' ? 'Documentation' : 'Guides'}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Grid Rendered via React State */}
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg" id="resource-grid">
                        {filteredResources.map((r) => (
                            <div key={r.id} class="glass-card p-lg rounded-2xl flex flex-col gap-md opacity-0 translate-y-4" style={{ animation: 'fadeInUp 0.4s forwards' }}>
                                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <span class="material-symbols-outlined text-primary">{r.icon}</span>
                                </div>
                                <div class="space-y-xs">
                                    <span class="text-label-sm uppercase tracking-widest text-outline">{r.type.replace('-', ' ')}</span>
                                    <h4 class="font-headline-md text-on-surface">{r.title}</h4>
                                </div>
                                <p class="text-on-surface-variant flex-1">{r.desc}</p>
                                <button class="w-full py-2 border border-white/10 rounded-lg font-label-md hover:bg-white/5 transition-colors">Read More</button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Workspace Blueprints */}
                <section class="space-y-xl">
                    <div class="space-y-sm text-center md:text-left">
                        <h2 class="font-headline-lg text-headline-lg text-on-surface">Workspace Blueprints</h2>
                        <p class="text-on-surface-variant">Live preview of our pre-configured team environments.</p>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-4 gap-lg">
                        <div class="lg:col-span-1 flex flex-col gap-md">
                            {/* Agile Board Button */}
                            <button 
                                class={`template-btn glass-card p-lg rounded-xl text-left border-2 group ${currentTemplate === 'agile' ? 'border-primary/50 bg-primary/5' : 'border-transparent'}`}
                                onClick={() => setCurrentTemplate('agile')}
                            >
                                <div class="flex items-center gap-sm mb-2">
                                    <span class={`material-symbols-outlined ${currentTemplate === 'agile' ? 'text-primary' : 'text-outline'}`}>sprint</span>
                                    <span class={`font-label-md font-bold uppercase tracking-widest ${currentTemplate === 'agile' ? 'text-primary' : 'text-on-surface-variant'}`}>Agile Board</span>
                                </div>
                                <p class="text-label-sm text-on-surface-variant">Optimized for velocity and iterative delivery.</p>
                            </button>

                            {/* DevOps Button */}
                            <button 
                                class={`template-btn glass-card p-lg rounded-xl text-left border-2 group ${currentTemplate === 'devops' ? 'border-primary/50 bg-primary/5' : 'border-transparent'}`}
                                onClick={() => setCurrentTemplate('devops')}
                            >
                                <div class="flex items-center gap-sm mb-2">
                                    <span class={`material-symbols-outlined ${currentTemplate === 'devops' ? 'text-primary' : 'text-outline'}`}>terminal</span>
                                    <span class={`font-label-md font-bold uppercase tracking-widest ${currentTemplate === 'devops' ? 'text-primary' : 'text-on-surface-variant'}`}>DevOps CI/CD</span>
                                </div>
                                <p class="text-label-sm text-on-surface-variant text-opacity-70">Focus on reliability and automation pipelines.</p>
                            </button>

                            {/* Creative Agency Button */}
                            <button 
                                class={`template-btn glass-card p-lg rounded-xl text-left border-2 group ${currentTemplate === 'agency' ? 'border-primary/50 bg-primary/5' : 'border-transparent'}`}
                                onClick={() => setCurrentTemplate('agency')}
                            >
                                <div class="flex items-center gap-sm mb-2">
                                    <span class={`material-symbols-outlined ${currentTemplate === 'agency' ? 'text-primary' : 'text-outline'}`}>palette</span>
                                    <span class={`font-label-md font-bold uppercase tracking-widest ${currentTemplate === 'agency' ? 'text-primary' : 'text-on-surface-variant'}`}>Creative Agency</span>
                                </div>
                                <p class="text-label-sm text-on-surface-variant text-opacity-70">Visual project tracking and asset management.</p>
                            </button>
                        </div>

                        {/* Kanban Board Visualizer */}
                        <div class="lg:col-span-3 glass-card rounded-2xl overflow-hidden min-h-[500px] flex flex-col">
                            <div class="p-md border-b border-white/5 bg-white/5 flex items-center justify-between">
                                <div class="flex items-center gap-sm">
                                    <div class="w-3 h-3 rounded-full bg-error"></div>
                                    <div class="w-3 h-3 rounded-full bg-secondary"></div>
                                    <div class="w-3 h-3 rounded-full bg-tertiary"></div>
                                    <span class="ml-4 font-label-md text-on-surface-variant font-medium">
                                        {templates[currentTemplate].name}
                                    </span>
                                </div>
                                <button class="flex items-center gap-2 bg-primary text-on-primary px-4 py-1.5 rounded-lg font-label-md hover:scale-105 active:scale-95 transition-all" onClick={addMockTask}>
                                    <span class="material-symbols-outlined text-sm">add</span> Add Task
                                </button>
                            </div>
                            
                            <div class="flex-1 p-lg flex gap-lg overflow-x-auto bg-surface-container-lowest" id="mock-board">
                                {templates[currentTemplate].columns.map((colName, idx) => (
                                    <div key={idx} class="flex-shrink-0 w-64 space-y-md">
                                        <div class="flex items-center justify-between text-label-md text-outline px-sm">
                                            <span class="font-bold">{colName}</span>
                                            <span>{templates[currentTemplate].tasks.filter(t => t.col === idx).length}</span>
                                        </div>
                                        <div class="space-y-sm">
                                            {templates[currentTemplate].tasks.filter(t => t.col === idx).map(task => (
                                                <div key={task.id} class="bg-surface p-md rounded-xl border border-white/5 shadow-sm group cursor-move">
                                                    <p class="text-label-md text-on-surface mb-2">{task.text}</p>
                                                    <span class={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${task.priority === 'High' || task.priority === 'Critical' ? 'bg-error/20 text-error' : 'bg-secondary/20 text-secondary'}`}>
                                                        {task.priority}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bottom Interactive Row */}
                <section class="grid grid-cols-1 md:grid-cols-2 gap-xxl items-start">
                    {/* Tutorial Academy Progress Card */}
                    <div class="glass-card p-xl rounded-2xl space-y-lg relative overflow-hidden">
                        <div class="relative z-10 space-y-lg">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h3 class="font-headline-md text-headline-md text-on-surface">Tutorial Academy</h3>
                                    <p class="text-on-surface-variant">Your journey to Power User status.</p>
                                </div>
                                <div class="relative flex items-center justify-center">
                                    <svg class="w-24 h-24">
                                        <circle cx="48" cy="48" fill="transparent" r="40" stroke="#1a1b22" stroke-width="8"></circle>
                                        <circle 
                                            class="progress-ring-circle" 
                                            cx="48" 
                                            cy="48" 
                                            fill="transparent" 
                                            r="40" 
                                            stroke="url(#gradient-p)" 
                                            stroke-width="8"
                                            stroke-linecap="round"
                                            stroke-dasharray="251.2" 
                                            style={{ strokeDashoffset: progressOffset, transition: 'stroke-dashoffset 0.3s ease' }}
                                        ></circle>
                                        <defs>
                                            <linearGradient id="gradient-p" x1="0%" x2="100%" y1="0%" y2="100%">
                                                <stop offset="0%" stop-color="#6366F1"></stop>
                                                <stop offset="100%" stop-color="#EC4899"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <span class="absolute font-label-md text-headline-md text-primary">{progressPercentage}%</span>
                                </div>
                            </div>
                            
                            <div class="space-y-md" id="lesson-list">
                                {[
                                    { title: "Core Workflow Basics", desc: "Master the command palette and shortcuts." },
                                    { title: "Advanced Integrations", desc: "Connect Slack, GitHub, and Figma." },
                                    { title: "Team Leadership 101", desc: "Managing analytics and reporting." }
                                ].map((lesson, idx) => (
                                    <label key={idx} class="flex items-center gap-md p-md rounded-xl hover:bg-white/5 cursor-pointer transition-colors group">
                                        <input 
                                            class="lesson-check w-6 h-6 rounded border-white/10 bg-white/5 text-primary focus:ring-primary/20" 
                                            type="checkbox" 
                                            checked={checkedLessons[idx]}
                                            onChange={() => handleLessonChange(idx)}
                                        />
                                        <div class="flex-1">
                                            <h4 class="font-bold text-on-surface group-hover:text-primary transition-colors">{lesson.title}</h4>
                                            <p class="text-label-sm text-on-surface-variant">{lesson.desc}</p>
                                        </div>
                                        <span class="material-symbols-outlined text-outline">play_circle</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quiz Container */}
                    <div class="glass-card p-xl rounded-2xl min-h-[400px] flex flex-col" id="quiz-container">
                        {/* Intro View */}
                        {quizMode === 'intro' && (
                            <div class="space-y-lg text-center py-xl" id="quiz-intro">
                                <span class="material-symbols-outlined text-primary text-6xl block floating">psychology</span>
                                <h3 class="font-headline-md text-headline-md">Skill Alignment Quiz</h3>
                                <p class="text-on-surface-variant">Tell us about your team to get personalized learning recommendations.</p>
                                <button class="neon-gradient px-8 py-3 rounded-full mt-3 font-bold hover:scale-105 active:scale-95 transition-all" onClick={startQuiz}>Start 3-Question Quiz</button>
                            </div>
                        )}

                        {/* Questions View */}
                        {quizMode === 'question' && (
                            <div class="flex-1 flex flex-col space-y-xl" id="quiz-question">
                                <div class="flex justify-between items-center text-label-md text-outline">
                                    <span>Question {quizStep + 1} of 3</span>
                                    <div class="w-32 h-1.5 bg-white/5 rounded-full overflow-hidden">
                                        <div class="h-full neon-gradient transition-all duration-500" style={{ width: `${((quizStep + 1) / 3) * 100}%` }}></div>
                                    </div>
                                </div>
                                <h4 class="font-headline-md">{quizData[quizStep].q}</h4>
                                <div class="grid grid-cols-1 gap-md">
                                    {quizData[quizStep].o.map((opt, oIdx) => (
                                        <button 
                                            key={oIdx} 
                                            onClick={nextQuizStep} 
                                            class="text-left p-md border border-white/10 rounded-xl hover:bg-white/5 hover:border-primary/50 transition-all font-body-md"
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Results View */}
                        {quizMode === 'result' && (
                            <div class="text-center space-y-lg py-xl" id="quiz-result">
                                <span class="material-symbols-outlined text-secondary text-6xl block">emoji_events</span>
                                <h3 class="font-headline-md">Your Path: <span class="text-secondary">Operations Architect</span></h3>
                                <p class="text-on-surface-variant">We recommend focusing on the Enterprise Security and Global Scaling modules.</p>
                                <button class="text-outline hover:text-primary font-label-md transition-colors underline" onClick={resetQuiz}>Retake Quiz</button>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </>
    );
}

export default Hero;