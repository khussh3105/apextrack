import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-zinc-900 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
          
          {/* Left Side: Rights & Developer */}
          <div className="text-zinc-600 text-xs font-light mt-4 sm:mt-0">
            &copy; {new Date().getFullYear()} All rights reserved. Developed by{' '}
            <a 
              href="https://khushkothari.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-orange-500 transition-colors duration-300 font-medium"
            >
              Khush Kothari
            </a>
          </div>

          {/* Right Side: Brand Logo */}
          <div>
            <Link href="/" className="text-lg font-bold tracking-tight text-white">
              Apex<span className="text-orange-500">Track</span>
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}