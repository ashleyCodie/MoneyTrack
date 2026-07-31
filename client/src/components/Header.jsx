const navLinks = [
  { label: 'Dashboard', href: '#', active: true },
  { label: 'Ledger', href: '#ledger' },
  { label: 'Bills', href: '#bills' },
  { label: 'Accounts', href: '#accounts' },
  { label: 'Support', href: '#support' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white shadow-sm">
            MT
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            MoneyTrack
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                link.active
                  ? 'bg-brand-50 text-brand-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 sm:inline-flex"
          >
            Sign in
          </button>
          <button
            type="button"
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-700"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
