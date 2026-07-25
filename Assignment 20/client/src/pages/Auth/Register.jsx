import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../context/Auth';
import toast from 'react-hot-toast';
import { isValidEmail } from '../../config/global';

const initialState = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student'
}

function Register() {

    const navigate = useNavigate();

    const { registerUser } = useAuth();

    const [form, setForm] = useState(initialState);

    const handleChange = e => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmitt = async (e) => {
        e.preventDefault();

        if (!form.fullName || !form.email || !form.password || !form.confirmPassword) {
            return toast.error("All fields are required");
        };

        if (form.fullName.length < 3) {
            return toast.error("Name must be at least 3 characters long");
        }

        if (!isValidEmail(form.email)) {
            return toast.error("Please enter a valid email address");
        };

        if (form.password.length < 6) {
            return toast.error("Password must be at least 6 characters long");
        };

        if (form.password !== form.confirmPassword) {
            return toast.error("Passwords do not match");
        };

        try {

            const data = { fullName: form.fullName, email: form.email, password: form.password, role: form.role };

            const result = await registerUser(data);

            if (result) {
                navigate('/auth/login');
            }

        } catch (error) {
            console.error("Form submission error:", error);
        }
    };

    return (
        <>
            <main class="flex h-full pt-20">
                <section class="hidden lg:flex w-1/2 relative flex-col items-center justify-center p-12 overflow-hidden border-r border-white/5">

                    <div class="relative w-full max-w-2xl z-10">
                        <div class="mb-8 flex flex-col gap-2">
                            <span class="text-primary font-mono-sm tracking-widest uppercase">Live Workspace Engine</span>
                            <h2 class="font-display text-headline-xl text-white">Your Vision, Real-Time.</h2>
                        </div>
                        <div class="glass-panel rounded-xl overflow-hidden shadow-2xl flex accent-indigo" id="mock-dashboard">
                            <div class="w-20 border-r border-white/5 flex flex-col items-center py-6 gap-6">
                                <div class="w-10 h-10 rounded-full dynamic-bg flex items-center justify-center text-on-primary" id="preview-avatar">
                                    <span class="material-symbols-outlined" id="role-icon">person</span>
                                </div>
                                <div class="flex flex-col gap-4 opacity-30">
                                    <span class="material-symbols-outlined">grid_view</span>
                                    <span class="material-symbols-outlined">calendar_today</span>
                                    <span class="material-symbols-outlined">chat_bubble</span>
                                    <span class="material-symbols-outlined">settings</span>
                                </div>
                            </div>
                            <div class="flex-1 flex flex-col">
                                <div class="h-14 border-b border-white/5 flex items-center justify-between px-6">
                                    <span class="font-bold text-white" id="preview-workspace-name">Acme Corp</span>
                                    <div class="flex gap-2">
                                        <div class="w-24 h-2 bg-white/5 rounded-full overflow-hidden">
                                            <div class="w-2/3 h-full dynamic-bg"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-6 grid grid-cols-2 gap-4">
                                    <div class="p-4 rounded-lg bg-white/5 border border-white/10 flex flex-col gap-3">
                                        <div class="w-8 h-2 rounded-full dynamic-bg opacity-50"></div>
                                        <div class="h-4 w-full bg-white/10 rounded"></div>
                                        <div class="h-4 w-2/3 bg-white/10 rounded"></div>
                                        <div class="flex justify-between items-center mt-2">
                                            <div class="flex -space-x-2">
                                                <div class="w-6 h-6 rounded-full bg-surface-container-high border border-white/10"></div>
                                                <div class="w-6 h-6 rounded-full bg-surface-container-high border border-white/10"></div>
                                            </div>
                                            <span class="material-symbols-outlined text-sm opacity-50">attach_file</span>
                                        </div>
                                    </div>
                                    <div class="p-4 rounded-lg bg-white/5 border border-white/10 flex flex-col gap-3">
                                        <div class="w-8 h-2 rounded-full bg-secondary/50 opacity-50"></div>
                                        <div class="h-4 w-full bg-white/10 rounded"></div>
                                        <div class="h-4 w-1/2 bg-white/10 rounded"></div>
                                        <div class="flex justify-between items-center mt-2">
                                            <div class="w-6 h-6 rounded-full bg-surface-container-high border border-white/10"></div>
                                            <span class="material-symbols-outlined text-sm dynamic-accent">check_circle</span>
                                        </div>
                                    </div>
                                    <div class="col-span-2 p-6 glass-panel rounded-lg mt-2 relative overflow-hidden">
                                        <div class="flex justify-between items-end h-24 gap-2">
                                            <div class="w-full dynamic-bg opacity-20 rounded-t h-1/2 animate-pulse-soft"></div>
                                            <div class="w-full dynamic-bg opacity-40 rounded-t h-3/4 animate-pulse-soft" style={{ animationDelay: "0.2s" }}></div>
                                            <div class="w-full dynamic-bg opacity-60 rounded-t h-2/3 animate-pulse-soft" style={{ animationDelay: "0.4s" }}></div>
                                            <div class="w-full dynamic-bg opacity-80 rounded-t h-5/6 animate-pulse-soft" style={{ animationDelay: "0.6s" }}></div>
                                            <div class="w-full dynamic-bg rounded-t h-full animate-pulse-soft" style={{ animationDelay: "0.8s" }}></div>
                                        </div>
                                        <div class="absolute inset-0 flex items-center justify-center">
                                            <span class="text-xs font-mono-sm dynamic-accent bg-black/40 px-3 py-1 rounded-full border dynamic-border">WORKSPACE CONSTRUCTION: 78%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="w-full lg:w-1/2 flex flex-col p-12 lg:p-24 overflow-y-auto bg-surface-container-lowest/50 backdrop-blur-sm">
                    <div class="step-transition" id="step-1">
                        <h1 class="font-display text-headline-lg text-white mb-2">Create your identity</h1>
                        <p class="text-on-surface-variant mb-8">Start your journey with a secure TaskFlow Pro account.</p>
                        <form class="flex flex-col gap-6" onSubmit={handleSubmitt}>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="flex flex-col gap-2">
                                    <label class="text-xs uppercase tracking-widest text-on-surface-variant/60 font-bold">Full Name</label>
                                    <input class="!bg-surface-container-high/50 border border-white/5 p-4 rounded-xl text-white placeholder:text-white/20 transition-all" id="input-name" placeholder="John Doe" type="text" required name='fullName' onChange={handleChange} value={form.fullName} />
                                </div>
                                <div class="flex flex-col gap-2">
                                    <label class="text-xs uppercase tracking-widest text-on-surface-variant/60 font-bold">Email Address</label>
                                    <input class="!bg-surface-container-high/50 border border-white/5 p-4 rounded-xl text-white placeholder:text-white/20 transition-all" id="input-email" placeholder="john@company.com" type="email" required name='email' onChange={handleChange} value={form.email} />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div class="flex flex-col gap-2">
                                    <label class="text-xs uppercase tracking-widest text-on-surface-variant/60 font-bold">Secure Password</label>
                                    <input class="!bg-surface-container-high/50 border border-white/5 p-4 rounded-xl text-white placeholder:text-white/20 transition-all" id="input-password" placeholder="••••••••" type="password" required name='password' onChange={handleChange} value={form.password} />
                                </div>
                                <div class="flex flex-col gap-2">
                                    <label class="text-xs uppercase tracking-widest text-on-surface-variant/60 font-bold">Confirm Password</label>
                                    <input class="!bg-surface-container-high/50 border border-white/5 p-4 rounded-xl text-white placeholder:text-white/20 transition-all" id="input-password" placeholder="••••••••" type="password" required name='confirmPassword' onChange={handleChange} value={form.confirmPassword} />
                                </div>
                            </div>
                            <div class="flex flex-col gap-4 mt-4">
                                <label class="text-xs uppercase tracking-widest text-on-surface-variant/60 font-bold">Choose your Role</label>
                                <div class="grid grid-cols-2 gap-3">
                                    <select name="" id="" class="!bg-surface-container-high/50 border border-white/5 p-4 rounded-xl text-white placeholder:text-white/20 transition-all" onChange={handleChange} value={form.role} name='role'>
                                        <option value="student">student</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                    <div className="flex items-end justify-end">
                                        <p className="text-body-sm font-body-sm text-on-surface-variant">
                                            Identity verified? <Link to="/auth/login"> <a className="text-primary font-bold hover:underline">Sign In</a></Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button class="mt-8 bg-gradient-to-r from-primary to-secondary text-on-primary font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                                Continue to Register
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Register