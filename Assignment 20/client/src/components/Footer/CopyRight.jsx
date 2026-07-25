import React from 'react'

function CopyRight() {

    const year = new Date().getFullYear();

    return (
        <>
            <footer className="w-full py-16 bg-surface-container-lowest border-t border-white/5">
                <div className="flex flex-col md:flex-row justify-between items-start px-6 md:px-margin-desktop gap-12 max-w-container-max mx-auto">
                    <div className="space-y-6 max-w-xs">
                        <div className="flex items-center gap-3">
                            {/* <div className="w-8 h-8">

                            </div> */}
                            <span className="font-display text-headline-md font-bold text-on-surface">TaskFlow Pro</span>
                        </div>
                        <p className="text-body-sm text-on-surface-variant">Orchestrate the future of your team. High-performance tooling for organizations that never settle.</p>
                        <div className="flex gap-4">
                            <button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">alternate_email</span>
                            </button>
                            <button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">hub</span>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <h5 className="text-label-md font-bold text-white uppercase tracking-widest">Platform</h5>
                            <ul className="space-y-2 text-on-surface-variant text-body-sm">
                                <li className="hover:text-primary cursor-pointer transition-colors">Features</li>
                                <li className="hover:text-primary cursor-pointer transition-colors">Security</li>
                                <li className="hover:text-primary cursor-pointer transition-colors">Integrations</li>
                                <li className="hover:text-primary cursor-pointer transition-colors">Changelog</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h5 className="text-label-md font-bold text-white uppercase tracking-widest">Resources</h5>
                            <ul className="space-y-2 text-on-surface-variant text-body-sm">
                                <li className="hover:text-primary cursor-pointer transition-colors">Documentation</li>
                                <li className="hover:text-primary cursor-pointer transition-colors">API Reference</li>
                                <li className="hover:text-primary cursor-pointer transition-colors">Templates</li>
                                <li className="hover:text-primary cursor-pointer transition-colors">Community</li>
                            </ul>
                        </div>
                        <div className="space-y-4 hidden sm:block">
                            <h5 className="text-label-md font-bold text-white uppercase tracking-widest">Legal</h5>
                            <ul className="space-y-2 text-on-surface-variant text-body-sm">
                                <li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
                                <li className="hover:text-primary cursor-pointer transition-colors">Terms of Service</li>
                                <li className="hover:text-primary cursor-pointer transition-colors">Security</li>
                                <li className="hover:text-primary cursor-pointer transition-colors">Status</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-auto space-y-6">
                        <h5 className="text-label-md font-bold text-white uppercase tracking-widest">Join the Network</h5>
                        <p className="text-body-sm text-on-surface-variant">Bi-weekly engineering insights for CTOs.</p>
                        <div className="flex gap-2">
                            <input className="bg-surface-container-high rounded-xl px-4 py-3 border border-white/5 focus:outline-none focus:border-primary text-black flex-grow" placeholder="Email address" type="email" />
                            <button className="accent-gradient px-6 py-3 rounded-xl font-bold text-white">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto pt-16 text-on-surface-variant text-label-md text-center md:text-left">
                    © {year} TaskFlow Pro. All rights reserved. Built with <span className='underline font-bold cursor-pointer'>Muhammad Arham</span> for high-performance teams.
                </div>
            </footer>
        </>
    )
}

export default CopyRight