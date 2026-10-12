import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full py-24 sm:py-32 lg:py-40 flex flex-col items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          {/* Gradient fade into the next section */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/80 to-black"></div>
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight text-white tracking-tight">
            Track the Work. <br />
            <span className="text-orange-500">Defy the Limits.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto mb-12 text-zinc-300 font-light drop-shadow-md">
            A minimalist platform engineered for hybrid athletes. Build precise
            routines, log sets seamlessly, and analyze performance data without
            the clutter.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full mt-8">
            <Link
              href="/register"
              className="bg-orange-600 text-white hover:bg-white hover:text-orange-600 border border-orange-600 hover:border-white px-8 py-4 rounded font-semibold text-sm transition-colors duration-300 tracking-widest w-full sm:w-auto text-center shadow-[0_0_15px_rgba(234,88,12,0.15)]"
            >
              CREATE FREE ACCOUNT
            </Link>
            <Link
              href="#features"
              className="bg-transparent text-zinc-200 hover:text-white border border-zinc-500 hover:border-zinc-300 hover:bg-zinc-900/40 px-8 py-4 rounded font-semibold text-sm transition-colors duration-300 tracking-widest w-full sm:w-auto text-center backdrop-blur-sm"
            >
              VIEW PLATFORM
            </Link>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section
        id="features"
        className="w-full py-20 bg-black border-t border-zinc-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Feature 1: Custom Routines */}
            <div
              className="relative group aspect-square border-2 border-zinc-800 overflow-hidden rounded-md flex items-center justify-center cursor-pointer bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop')",
              }}
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
              <h3 className="relative z-10 text-4xl lg:text-5xl font-black tracking-tighter leading-[0.85] text-white text-center px-2 uppercase select-none drop-shadow-[0_8px_8px_rgba(0,0,0,0.9)]">
                CUSTOM <br /> ROUTINES
              </h3>
            </div>

            {/* Feature 2: Progress Analytics */}
            <div
              className="relative group aspect-square border-2 border-zinc-800 overflow-hidden rounded-md flex items-center justify-center cursor-pointer bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop')",
              }}
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
              <h3 className="relative z-10 text-4xl lg:text-5xl font-black tracking-tighter leading-[0.85] text-white text-center px-2 uppercase select-none drop-shadow-[0_8px_8px_rgba(0,0,0,0.9)]">
                PROGRESS <br /> ANALYTICS
              </h3>
            </div>

            {/* Feature 3: Active Tracker (Smartwatch/Fitness Tech) */}
            <div
              className="relative group aspect-square border-2 border-zinc-800 overflow-hidden rounded-md flex items-center justify-center cursor-pointer bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=800&auto=format&fit=crop')",
              }}
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
              <h3 className="relative z-10 text-4xl lg:text-5xl font-black tracking-tighter leading-[0.85] text-white text-center px-2 uppercase select-none drop-shadow-[0_8px_8px_rgba(0,0,0,0.9)]">
                ACTIVE <br /> TRACKER
              </h3>
            </div>

            {/* Feature 4: Workout Calendar (Planner/Schedule) */}
            <div
              className="relative group aspect-square border-2 border-zinc-800 overflow-hidden rounded-md flex items-center justify-center cursor-pointer bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=800&auto=format&fit=crop')",
              }}
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
              <h3 className="relative z-10 text-4xl lg:text-5xl font-black tracking-tighter leading-[0.85] text-white text-center px-2 uppercase select-none drop-shadow-[0_8px_8px_rgba(0,0,0,0.9)]">
                WORKOUT <br /> CALENDAR
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section
        id="about"
        className="w-full py-24 sm:py-32 bg-black border-t border-zinc-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Column: Heading */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-px w-8 bg-orange-600"></div>
                <div className="text-orange-500 text-xs font-bold tracking-widest uppercase">
                  The Philosophy
                </div>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white uppercase leading-none">
                Built for the <br />{" "}
                <span className="text-zinc-600">Hybrid Athlete</span>
              </h2>
            </div>

            {/* Right Column: Copy */}
            <div className="space-y-6 text-zinc-400 font-light text-base sm:text-lg leading-relaxed">
              <p>
                Traditional fitness platforms force you into a box: you are
                either a bodybuilder, a powerlifter, or a runner. ApexTrack
                shatters that divide. We engineered a system that respects the
                complexity of hybrid training.
              </p>
              <p>
                Whether you are hitting heavy deadlifts on Monday and running a
                threshold pace on Tuesday, our telemetry adapts to your output.
                No clutter. No unnecessary friction. Just pure, measurable
                progression.
              </p>
            </div>
          </div>

          {/* Rectangular Image Bar */}
          <div
            className="w-full h-32 sm:h-40 md:h-48 mt-16 sm:mt-20 border border-zinc-900 rounded-sm bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0 transition-all duration-700"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop')",
            }}
          >
            {/* Optional internal shadow/tint to blend with the dark background */}
            <div className="w-full h-full bg-black/20 hover:bg-transparent transition-colors duration-700"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
