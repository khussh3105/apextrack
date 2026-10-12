"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // New users get routed to the setup questionnaire
    router.push('/onboarding');
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[75vh] px-4 py-12 overflow-hidden">
      
      {/* Background Glow matching Hero Section */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-125 h-125 bg-orange-600 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
        
        <div className="text-center">
          <h2 className="text-3xl font-black text-white tracking-tight uppercase">
            Join Apex<span className="text-orange-500">Track</span>
          </h2>
          <p className="mt-2 text-sm text-zinc-400 font-light">
            Build the ultimate hybrid training system.
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full px-4 py-3 bg-zinc-950 border border-zinc-800 placeholder-zinc-700 text-white rounded-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full px-4 py-3 bg-zinc-950 border border-zinc-800 placeholder-zinc-700 text-white rounded-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-colors"
                placeholder="athlete@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full px-4 py-3 bg-zinc-950 border border-zinc-800 placeholder-zinc-700 text-white rounded-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-bold rounded-sm text-white bg-orange-600 hover:bg-white hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-orange-500 transition-colors duration-300 uppercase tracking-widest"
            >
              Start Tracking
            </button>
          </div>
        </form>

        <div className="text-center pt-4 border-t border-zinc-900">
          <p className="text-sm text-zinc-400 font-light">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-white hover:text-orange-500 transition-colors">
              Log in
            </Link>
          </p>
        </div>
        
      </div>
    </div>
  );
}