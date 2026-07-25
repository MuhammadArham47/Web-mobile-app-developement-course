import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {

    const location = useLocation();

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/feature", label: "Features" },
        { path: "/pricing", label: "Pricing" },
        { path: "/resource", label: "Resources" }
    ];

    return (
        <><header class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-sm transition-all duration-300">
            <div class="flex justify-between items-center px-6 md:px-margin-desktop py-4 max-w-container-max mx-auto">
                <div class="flex items-center gap-3">
                    {/* <div class="w-10 h-10 flex items-center justify-center">

                    </div> */}
                    {/* <span className="material-symbols-outlined text-primary">bolt</span> */}
                    <span class="font-display text-headline-md font-bold text-on-surface tracking-tight">TaskFlow Pro</span>
                </div>
                <nav class="hidden md:flex items-center gap-8">
                    {
                        navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link key={item.path} to={item.path} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                    <button class={`nav-link text-primary font-bold border-primary pb-1 transition-colors duration-200 ${isActive ? "border-b-2" : ""}`}>{item.label}</button>
                                </Link>
                            )
                        })
                    }
                </nav>
                <div class="flex items-center gap-4">
                    <Link to="/auth/login">
                        <button class="hidden sm:block text-on-surface-variant font-medium hover:text-primary transition-colors">Log In</button>
                    </Link>
                    <Link to="/auth/register">
                        <button class="accent-gradient px-6 py-2.5 rounded-full font-bold text-white shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200">Get Started</button>
                    </Link>
                </div>
            </div>
        </header></>
    )
}

export default Navbar