import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [tasks, setTasks] = useState([]);
    const [circuits, setCircuits] = useState({ 1: false, 2: false, 3: false });
    const [showSuccess, setShowSuccess] = useState(false);

    const taskLabels = [
        'Review Code', 'Deploy API', 'Sprint Planning',
        'Fix UI Bug', 'Database Sync', 'Refactor Auth',
        'Client Call', 'Write Docs'
    ];

    const generateInitialTasks = () => {
        const initialTasks = Array.from({ length: 15 }).map((_, index) => createTaskInstance(index));
        setTasks(initialTasks);
    };

    const createTaskInstance = (id) => {
        const randomLabel = taskLabels[Math.floor(Math.random() * taskLabels.length)];
        return {
            id: `${id}-${Math.random()}`,
            label: randomLabel,
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            delay: `${Math.random() * 5}s`,
        };
    };

    useEffect(() => {
        generateInitialTasks();
    }, []);

    const handleRemoveTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        } else {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        }
    };
    const handleCircuitChange = (id) => {
        setCircuits((prev) => {
            const updated = { ...prev, [id]: !prev[id] };
            const allActive = Object.values(updated).every((status) => status === true);
            if (allActive) {
                setShowSuccess(true);
            } else {
                setShowSuccess(false);
            }
            return updated;
        });
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                document.getElementById('omniSearchInput')?.focus();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <main className="relative pt-32 pb-xxl px-[4vw] max-w-container-max mx-auto min-h-screen">
            <section className="relative h-[50vh] flex flex-col items-center justify-center mb-xl">
                <div className="absolute inset-0 pointer-events-none overflow-hidden" id="orbital-container">
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            onClick={() => handleRemoveTask(task.id)}
                            className="absolute p-3 glass rounded-lg text-xs font-label-sm text-on-surface-variant whitespace-nowrap cursor-pointer transition-all duration-700 floating-task select-none shadow-lg border border-white/10 pointer-events-auto"
                            style={{
                                left: task.left,
                                top: task.top,
                                animationDelay: task.delay,
                            }}
                        >
                            {task.label}
                        </div>
                    ))}
                </div>
                <div className="text-center z-10 select-none">
                    <div className="flex gap-4 md:gap-8 justify-center">
                        <div className="text-[120px] md:text-[220px] font-display font-black neon-text-gradient cursor-pointer spring-hover filter drop-shadow-[0_0_20px_rgba(192,193,255,0.4)]">4</div>
                        <div className="text-[120px] md:text-[220px] font-display font-black text-on-surface-variant cursor-pointer spring-hover filter drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">0</div>
                        <div className="text-[120px] md:text-[220px] font-display font-black neon-text-gradient cursor-pointer spring-hover filter drop-shadow-[0_0_20px_rgba(192,193,255,0.4)]">4</div>
                    </div>
                    <p className="font-headline-md text-on-surface-variant mt-4 opacity-80 max-w-lg mx-auto">
                        The workflow you're looking for has drifted out of orbit.
                    </p>
                    <button onClick={generateInitialTasks} className="mt-8 flex items-center gap-2 px-6 py-3 glass rounded-full font-label-md text-primary spring-hover group mx-auto" id="respawnBtn">
                        <span className="material-symbols-outlined group-hover:rotate-180 transition-transform duration-500">sync</span>
                        RE-INITIALIZE ORBIT
                    </button>
                </div>
            </section>
            <section className="max-w-4xl mx-auto text-center mb-xxl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Link to="/" className="p-lg glass rounded-xl spring-hover group cursor-pointer border border-white/5 flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-on-surface-variant/10 flex items-center justify-center mb-4 group-hover:bg-on-surface-variant/20 transition-colors">
                            <span className="material-symbols-outlined text-on-surface-variant">home</span>
                        </div>
                        <div className="font-label-md">Home</div>
                    </Link>
                    <Link to="/feature" className="p-lg glass rounded-xl spring-hover group cursor-pointer border border-white/5 flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-primary">rocket_launch</span>
                        </div>
                        <div className="font-label-md">Features</div>
                    </Link>
                    <Link to="/pricing" className="p-lg glass rounded-xl spring-hover group cursor-pointer border border-white/5 flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                            <span className="material-symbols-outlined text-secondary">sell</span>
                        </div>
                        <div className="font-label-md">Pricing</div>
                    </Link>
                    <Link to="/resource" className="p-lg glass rounded-xl spring-hover group cursor-pointer border border-white/5 flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center mb-4 group-hover:bg-tertiary/20 transition-colors">
                            <span className="material-symbols-outlined text-tertiary">menu_book</span>
                        </div>
                        <div className="font-label-md">Resources</div>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default PageNotFound;