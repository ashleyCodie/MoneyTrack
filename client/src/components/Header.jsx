import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Ledger', to: '/#ledger' },
  { label: 'Bills', to: '/#bills' },
  { label: 'Accounts', to: '/#accounts' },
  { label: 'Support', to: '/#support' },
]

export default function Header({ variant = 'home' }) {
  const location = useLocation()
  const isDashboard = variant === 'dashboard'

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white shadow-sm">
            MT
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            MoneyTrack
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.label === 'Dashboard' && location.pathname === '/dashboard'

            return (
              <Link
                key={link.label}
                to={link.to}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          {!isDashboard && (
            <>
              <Link
                to="/sign-in"
                className="hidden rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 sm:inline-flex"
              >
                Sign in
              </Link>
              <Link
                to="/sign-up"
                className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-700"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
