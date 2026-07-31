function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

function daysUntil(dateStr) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const due = new Date(dateStr + 'T00:00:00')
  const diff = Math.ceil((due - today) / (1000 * 60 * 60 * 24))
  if (diff === 0) return 'Due today'
  if (diff === 1) return 'Due tomorrow'
  if (diff < 0) return `${Math.abs(diff)} days overdue`
  return `Due in ${diff} days`
}

const categoryColors = {
  Utilities: 'bg-blue-100 text-blue-700',
  Insurance: 'bg-purple-100 text-purple-700',
  Credit: 'bg-amber-100 text-amber-700',
  Housing: 'bg-rose-100 text-rose-700',
  Entertainment: 'bg-teal-100 text-teal-700',
}

export default function UpcomingBills({ bills, onAddBill }) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const sorted = [...bills]
    .filter((bill) => new Date(bill.dueDate + 'T00:00:00') >= today)
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 5)

  const totalDue = sorted.reduce((sum, bill) => sum + bill.amount, 0)

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Upcoming Bills</h2>
          <p className="text-sm text-slate-500">Next payments on your schedule</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Total</p>
          <p className="text-lg font-semibold text-slate-900">{formatCurrency(totalDue)}</p>
        </div>
      </div>

      <ul className="divide-y divide-slate-100">
        {sorted.map((bill) => {
          const urgency = daysUntil(bill.dueDate)
          const isUrgent = urgency.includes('today') || urgency.includes('tomorrow')

          return (
            <li key={bill.id} className="flex items-center gap-4 py-3.5 first:pt-0 last:pb-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-semibold text-brand-700">
                {bill.name.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-slate-900">{bill.name}</p>
                <div className="mt-0.5 flex flex-wrap items-center gap-2">
                  {bill.recurring && (
                    <span className="inline-flex rounded-full bg-brand-100 px-2 py-0.5 text-xs font-medium text-brand-700">
                      Recurring
                    </span>
                  )}
                  <span
                    className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                      categoryColors[bill.category] || 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {bill.category}
                  </span>
                  <span
                    className={`text-xs ${isUrgent ? 'font-medium text-amber-600' : 'text-slate-400'}`}
                  >
                    {urgency}
                  </span>
                </div>
              </div>
              <p className="shrink-0 font-semibold text-slate-900">
                {formatCurrency(bill.amount)}
              </p>
            </li>
          )
        })}
      </ul>

      <button
        type="button"
        onClick={() => onAddBill?.()}
        className="mt-5 w-full rounded-lg border border-dashed border-slate-300 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
      >
        + Add a bill
      </button>
    </section>
  )
}
