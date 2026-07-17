import { useState } from 'react'
import { Anvil, CircleUserRound, Compass, Menu, ShieldCheck, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'The Craft', href: '#pillars' },
  { label: 'The Land', href: '#' },
]

const PILLARS = [
  {
    icon: Compass,
    title: 'True North',
    description: 'No trend-chasing. Just a fixed point, and the discipline to hold it.',
  },
  {
    icon: Anvil,
    title: 'Built By Hand',
    description: 'Every detail shaped with intent, tested against real weather and real ground.',
  },
  {
    icon: ShieldCheck,
    title: 'Made To Last',
    description: 'Engineered for decades, not seasons.',
  },
]

function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" fill="white" className={className}>
      <path d="M 128 128 C 198.692 128 256 185.308 256 256 L 151.883 256 C 149.812 220.307 120.213 192 84 192 C 47.787 192 18.188 220.307 16.117 256 L 0 256 C 0 185.308 57.308 128 128 128 Z M 104.117 0 C 106.188 35.694 135.787 64 172 64 C 208.213 64 237.812 35.694 239.883 0 L 256 0 C 256 70.692 198.692 128 128 128 C 57.308 128 0 70.692 0 0 Z" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="w-full bg-[#07030d]">
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c0d33] via-[#150a26] to-[#07030d]" />
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-purple-700/25 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 top-0 h-[26rem] w-[26rem] rounded-full bg-violet-500/20 blur-[120px]" />

        <div className="relative z-20 flex items-start justify-between px-5 pt-6 sm:px-8 sm:pt-8 md:px-16 lg:px-20">
          <Logo className="h-8 w-8 md:h-9 md:w-9" />

          <nav className="liquid-glass hidden items-center gap-8 rounded-full px-8 py-3 md:flex">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-opacity ${
                  i === 0 ? 'text-white' : 'text-white/70 hover:opacity-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="liquid-glass hidden h-10 w-10 items-center justify-center rounded-full md:flex">
            <CircleUserRound className="h-5 w-5 text-white/80" strokeWidth={1.5} />
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="liquid-glass relative z-50 flex h-10 w-10 items-center justify-center rounded-full md:hidden"
            aria-label="Toggle menu"
          >
            <Menu
              className={`absolute h-5 w-5 text-white transition-all duration-300 ${
                menuOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
              }`}
            />
            <X
              className={`absolute h-5 w-5 text-white transition-all duration-300 ${
                menuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
              }`}
            />
          </button>
        </div>

        <div
          className={`fixed inset-0 z-10 flex flex-col items-center justify-center gap-8 bg-black/80 backdrop-blur-xl transition-opacity duration-500 ease-out md:hidden ${
            menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <div
            className={`flex flex-col items-center gap-8 transition-transform duration-500 ease-out ${
              menuOpen ? 'translate-y-0' : '-translate-y-8'
            }`}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-medium text-white"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-4 flex flex-col items-center gap-3">
              <div className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full">
                <CircleUserRound className="h-5 w-5 text-white/80" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-light text-white/60">Account</span>
            </div>
          </div>
        </div>

        <div
          className={`relative z-10 flex h-full flex-col justify-between transition-opacity duration-300 ${
            menuOpen ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
        >
          <div className="px-5 sm:px-8 md:px-16 lg:px-20">
            <div className="mt-14 max-w-2xl sm:mt-20 md:mt-28">
              <span className="mb-5 block text-xs font-medium uppercase tracking-[0.3em] text-white/50 sm:mb-6 sm:text-sm">
                Atwood Grove
              </span>

              <h1
                className="text-4xl font-normal leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl"
                style={{ letterSpacing: '-0.05em' }}
              >
                Built For
                <br />
                <span className="chrome-text">THE LONG RIDE</span>
              </h1>

              <p className="mt-4 text-sm font-light text-white/70 sm:mt-5 sm:text-base md:text-lg">
                Precision-forged for those who ride their own trail — sharp tools, sharp minds,
                zero shortcuts.
              </p>

              <button
                type="button"
                className="liquid-glass mt-6 rounded-full px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10 sm:mt-8 sm:px-7 sm:py-3.5"
              >
                Enter The Grove
              </button>
            </div>
          </div>
        </div>
      </div>

      <section
        id="pillars"
        className="relative w-full px-5 py-20 sm:px-8 sm:py-24 md:px-16 md:py-28 lg:px-20"
      >
        <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="mx-auto mt-16 max-w-6xl sm:mt-20">
          <span className="block text-xs font-medium uppercase tracking-[0.3em] text-white/50 sm:text-sm">
            What We Stand On
          </span>
          <h2
            className="mt-4 text-3xl font-normal text-white sm:text-4xl md:text-5xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            Forged, Not Followed
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-3 sm:gap-6">
            {PILLARS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="liquid-glass rounded-3xl p-6 transition duration-300 hover:bg-white/[0.03] sm:p-8"
              >
                <Icon className="h-6 w-6 text-white/80" strokeWidth={1.5} />
                <h3 className="mt-5 text-lg font-medium text-white sm:text-xl">{title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-white/60">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
