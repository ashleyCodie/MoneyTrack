import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { mockPayments, getPaymentsPastYear } from '../data/mockPayments'

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

function formatDate(dateStr) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function Ledger() {
  const payments = getPaymentsPastYear(mockPayments)
  const onTimeCount = payments.filter((p) => p.paidOnTime).length
  const totalPaid = payments.reduce((sum, p) => sum + p.amountPaid, 0)

  return (
    <div className="min-h-screen bg-slate-50">
      <Header variant="dashboard" />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-brand-600">Ledger</p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Payment history
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              All payments made over the past 12 months
            </p>
          </div>
          <Link
            to="/"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
          >
            Sign out
          </Link>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Total payments</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">{payments.length}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Amount paid</p>
            <p className="mt-1 text-2xl font-bold text-brand-700">
              {formatCurrency(totalPaid)}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Paid on time</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">
              {onTimeCount}{' '}
              <span className="text-base font-normal text-slate-400">
                of {payments.length}
              </span>
            </p>
          </div>
        </div>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <div className="min-w-[640px]">
              <div className="grid grid-cols-4 gap-4 border-b border-slate-200 bg-slate-50 px-6 py-3 text-xs font-medium uppercase tracking-wide text-slate-500">
                <div>Date</div>
                <div>Creditor</div>
                <div>Amount paid</div>
                <div>On time</div>
              </div>

              {payments.length === 0 ? (
                <p className="px-6 py-12 text-center text-sm text-slate-500">
                  No payments recorded in the past year.
                </p>
              ) : (
                <ul className="divide-y divide-slate-100">
                  {payments.map((payment) => (
                    <li
                      key={payment.id}
                      className="grid grid-cols-4 gap-4 px-6 py-4 text-sm transition-colors hover:bg-slate-50"
                    >
                      <div className="font-medium text-slate-800">
                        {formatDate(payment.date)}
                      </div>
                      <div className="text-slate-700">{payment.creditorName}</div>
                      <div className="font-semibold text-slate-900">
                        {formatCurrency(payment.amountPaid)}
                      </div>
                      <div>
                        {payment.paidOnTime ? (
                          <span className="inline-flex rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                            On time
                          </span>
                        ) : (
                          <span className="inline-flex rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                            Late
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
