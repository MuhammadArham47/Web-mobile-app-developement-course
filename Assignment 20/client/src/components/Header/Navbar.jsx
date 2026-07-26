import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Navbar() {

    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/feature", label: "Features" },
        { path: "/pricing", label: "Pricing" },
        { path: "/resource", label: "Resources" }
    ];

    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-sm transition-all duration-300">
                <div className="flex justify-between items-center px-6 md:px-margin-desktop py-4 max-w-container-max mx-auto">
                    <div className="flex items-center gap-3">
                        <span className="font-display text-headline-md font-bold text-on-surface tracking-tight">TaskFlow Pro</span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {
                            navItems.map((item) => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <Link key={item.path} to={item.path} onClick={handleLinkClick}>
                                        <button className={`nav-link text-primary font-bold border-primary pb-1 transition-colors duration-200 ${isActive ? "border-b-2" : ""}`}>{item.label}</button>
                                    </Link>
                                )
                            })
                        }
                    </nav>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link to="/auth/login">
                            <button className="text-on-surface-variant font-medium hover:text-primary transition-colors">Log In</button>
                        </Link>
                        <Link to="/auth/register">
                            <button className="accent-gradient px-6 py-2.5 rounded-full font-bold text-white shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200">Get Started</button>
                        </Link>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="md:hidden text-on-surface p-2"
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Slide-in Drawer */}
            <aside
                className={`fixed top-0 right-0 h-full w-72 bg-surface z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
                    <span className="font-display text-headline-md font-bold text-on-surface">Menu</span>
                    <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="text-on-surface p-1">
                        <X size={26} />
                    </button>
                </div>

                <nav className="flex flex-col gap-2 px-6 py-6">
                    {
                        navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link key={item.path} to={item.path} onClick={handleLinkClick}>
                                    <button className={`w-full text-left py-3 font-bold transition-colors duration-200 ${isActive ? "text-primary" : "text-on-surface"}`}>
                                        {item.label}
                                    </button>
                                </Link>
                            )
                        })
                    }
                </nav>

                <div className="flex flex-col gap-4 px-6 mt-4 border-t border-white/10 pt-6">
                    <Link to="/auth/login" onClick={handleLinkClick}>
                        <button className="w-full accent-gradient px-6 py-2.5 rounded-full font-bold text-white shadow-lg transition-transform duration-200">Log In</button>
                    </Link>
                    <Link to="/auth/register" onClick={handleLinkClick}>
                        <button className="w-full accent-gradient px-6 py-2.5 rounded-full font-bold text-white shadow-lg transition-transform duration-200">Get Started</button>
                    </Link>
                </div>
            </aside>
        </>
    )
}

export default Navbar