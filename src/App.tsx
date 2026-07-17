import { Music2 } from 'lucide-react'

function App() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#050302]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1008] via-[#120b06] to-[#050302]" />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[32rem] w-[32rem] animate-breathe rounded-full bg-amber-700/15 blur-[140px]" />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] animate-breathe rounded-full bg-orange-500/10 blur-[160px]"
        style={{ animationDelay: '3s' }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 animate-breathe rounded-full bg-amber-400/10 blur-[180px]"
        style={{ animationDelay: '1.5s' }}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-between px-5 py-10 text-center sm:px-8 sm:py-12 md:py-16">
        <div className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-1.5">
          <Music2 className="h-3.5 w-3.5 text-[#f5ede1]/70" strokeWidth={1.5} />
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#f5ede1]/70">
            Coming Soon
          </span>
        </div>

        <div className="flex max-w-xl flex-col items-center">
          <img
            src="/atwater-grove-logo.png"
            alt="Atwater Grove"
            className="w-72 sm:w-80 md:w-[26rem]"
            style={{ filter: 'drop-shadow(0 0 50px rgba(245, 222, 179, 0.12))' }}
          />

          <p className="font-display mt-6 max-w-md text-xl italic leading-relaxed text-[#f5ede1]/80 sm:mt-8 sm:text-2xl">
            A room for songs, sound, and the people who make them.
          </p>
          <p className="mt-3 text-sm font-light text-[#f5ede1]/50 sm:text-base">
            Something is taking shape here.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 text-[#f5ede1]/40">
          <div className="h-px w-16 bg-[#f5ede1]/20" />
          <span className="text-xs font-light tracking-wide">
            &copy; {new Date().getFullYear()} Atwater Grove — more soon.
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
