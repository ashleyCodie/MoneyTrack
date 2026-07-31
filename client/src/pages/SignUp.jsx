import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const inputClass =
  'w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20'

const labelClass = 'mb-1.5 block text-sm font-medium text-slate-700'

export default function SignUp() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
    username: '',
    password: '',
  })
  const [error, setError] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError('')

    const required = ['firstName', 'lastName', 'address', 'phone', 'email', 'username', 'password']
    const missing = required.filter((field) => !form[field].trim())

    if (missing.length > 0) {
      setError('Please fill in all fields to create your account.')
      return
    }

    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    navigate('/dashboard')
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white shadow-sm">
              MT
            </span>
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              MoneyTrack
            </span>
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6">
        <div className="w-full max-w-lg">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Create your account
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Sign up to start tracking bills, accounts, and more
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div
                  role="alert"
                  className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200"
                >
                  {error}
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Jane"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClass}>
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className={labelClass}>
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  autoComplete="street-address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="123 Main St, City, State 12345"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              <div className="border-t border-slate-100 pt-5">
                <p className="mb-4 text-sm font-medium text-slate-900">Login credentials</p>

                <div className="space-y-5">
                  <div>
                    <label htmlFor="username" className={labelClass}>
                      Username
                    </label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      value={form.username}
                      onChange={handleChange}
                      placeholder="Choose a username"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className={labelClass}>
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="At least 8 characters"
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-brand-600 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-700"
              >
                Create account
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Already have an account?{' '}
              <Link to="/sign-in" className="font-medium text-brand-600 hover:text-brand-700">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
