import Header from '../components/Header'
import QuickStats from '../components/QuickStats'
import BillCalendar from '../components/BillCalendar'
import UpcomingBills from '../components/UpcomingBills'
import FeatureCard from '../components/FeatureCard'
import { mockBills, features } from '../data/mockBills'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        {/* Hero */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="max-w-2xl">
              <p className="mb-3 inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 ring-1 ring-brand-200">
                Personal finance hub
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Everything you need to{' '}
                <span className="text-brand-600">stay on top of money</span>
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                MoneyTrack keeps your ledger, bills, account logins, and customer
                service contacts in one secure place — with a calendar so you never
                miss a due date.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-700"
                >
                  Add your first bill
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  Explore features
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard preview */}
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <QuickStats bills={mockBills} />

          <div className="mt-8 grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <BillCalendar bills={mockBills} year={2026} month={7} />
            </div>
            <div className="lg:col-span-2">
              <UpcomingBills bills={mockBills} />
            </div>
          </div>
        </section>

        {/* Feature grid */}
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-xl">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Built for how you manage money
              </h2>
              <p className="mt-2 text-slate-600">
                Four core tools — ledger, bills, account vault, and customer service
                — designed to work together.
              </p>
            </div>

            <div
              id="ledger"
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Account vault teaser */}
        <section
          id="accounts"
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
        >
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 px-6 py-10 sm:px-10 sm:py-12">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Account vault & login storage
              </h2>
              <p className="mt-3 text-brand-100 leading-relaxed">
                Store account numbers, usernames, and passwords alongside each
                bill. When a payment is due, your login details are right there —
                no more digging through notes or emails.
              </p>
              <button
                type="button"
                className="mt-6 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-brand-800 transition-colors hover:bg-brand-50"
              >
                Set up account vault
              </button>
            </div>
          </div>
        </section>

        {/* Customer service teaser */}
        <section id="support" className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  Customer service, documented
                </h2>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Save support phone numbers, chat links, business hours, and your
                  own notes for every provider. When something goes wrong with a
                  bill, you will know exactly who to call.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="space-y-4">
                  {[
                    { provider: 'Electric Company', phone: '1-800-555-0100', hours: 'Mon–Fri 8am–6pm' },
                    { provider: 'Internet Provider', phone: '1-800-555-0200', hours: '24/7 support' },
                  ].map((entry) => (
                    <div
                      key={entry.provider}
                      className="rounded-xl border border-slate-200 bg-white p-4"
                    >
                      <p className="font-medium text-slate-900">{entry.provider}</p>
                      <p className="mt-1 text-sm text-brand-600">{entry.phone}</p>
                      <p className="text-xs text-slate-400">{entry.hours}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} MoneyTrack. Your finances, organized.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-800">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-800">
              Security
            </a>
            <a href="#" className="hover:text-slate-800">
              Help
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
