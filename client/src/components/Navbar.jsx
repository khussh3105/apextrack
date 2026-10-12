"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black/90 backdrop-blur-md border-b border-zinc-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left: Brand */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white">
              Apex<span className="text-orange-500">Track</span>
            </Link>
          </div>

          {/* Right: Auth Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition">Log in</Link>
            <Link 
              href="/register" 
              className="bg-orange-600 text-white hover:bg-white hover:text-orange-600 px-5 py-2.5 rounded-sm font-medium text-sm transition-colors duration-300 tracking-wide"
            >
              Start Tracking
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-400 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-zinc-900">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <Link href="/login" onClick={() => setIsOpen(false)} className="block py-3 text-zinc-400 hover:text-white text-sm">Log in</Link>
            <Link 
              href="/register" 
              onClick={() => setIsOpen(false)} 
              className="block mt-2 bg-orange-600 text-white text-center hover:bg-white hover:text-orange-600 px-5 py-3 rounded-sm font-medium text-sm transition-colors duration-300 tracking-wide"
            >
              Start Tracking
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}