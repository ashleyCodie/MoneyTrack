const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay()
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

function isSameDay(date, year, month, day) {
  return (
    date.getFullYear() === year &&
    date.getMonth() === month &&
    date.getDate() === day
  )
}

export default function BillCalendar({
  bills,
  year,
  month,
  onPrevMonth,
  onNextMonth,
}) {
  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)
  const today = new Date()

  const billsByDay = bills.reduce((acc, bill) => {
    const date = new Date(bill.dueDate + 'T00:00:00')
    if (date.getFullYear() === year && date.getMonth() === month) {
      const day = date.getDate()
      if (!acc[day]) acc[day] = []
      acc[day].push(bill)
    }
    return acc
  }, {})

  const monthLabel = new Date(year, month).toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  const calendarCells = []
  for (let i = 0; i < firstDay; i++) {
    calendarCells.push(<div key={`empty-${i}`} className="aspect-square" />)
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const dayBills = billsByDay[day] || []
    const isToday = isSameDay(today, year, month, day)

    calendarCells.push(
      <div
        key={day}
        className={`relative aspect-square rounded-lg p-1 text-center transition-colors ${
          dayBills.length > 0
            ? 'bg-brand-50 ring-1 ring-brand-200'
            : 'hover:bg-slate-50'
        } ${isToday ? 'ring-2 ring-brand-500 ring-offset-1' : ''}`}
      >
        <span
          className={`text-xs font-medium sm:text-sm ${
            isToday ? 'text-brand-700' : dayBills.length ? 'text-brand-800' : 'text-slate-700'
          }`}
        >
          {day}
        </span>
        {dayBills.length > 0 && (
          <div className="mt-0.5 flex justify-center gap-0.5">
            {dayBills.slice(0, 3).map((bill) => (
              <span
                key={bill.id}
                className="h-1.5 w-1.5 rounded-full bg-brand-500"
                title={`${bill.name} — ${formatCurrency(bill.amount)}${bill.recurring ? ' (recurring)' : ''}`}
              />
            ))}
            {dayBills.length > 3 && (
              <span className="text-[10px] text-brand-600">+{dayBills.length - 3}</span>
            )}
          </div>
        )}
      </div>,
    )
  }

  const monthBills = bills.filter((bill) => {
    const date = new Date(bill.dueDate + 'T00:00:00')
    return date.getFullYear() === year && date.getMonth() === month
  })

  return (
    <section id="bills" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Bill Calendar</h2>
          <p className="text-sm text-slate-500">Due dates at a glance</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrevMonth}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600 transition-colors hover:bg-slate-50"
            aria-label="Previous month"
          >
            ←
          </button>
          <span className="min-w-[140px] text-center text-sm font-medium text-slate-800">
            {monthLabel}
          </span>
          <button
            type="button"
            onClick={onNextMonth}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600 transition-colors hover:bg-slate-50"
            aria-label="Next month"
          >
            →
          </button>
        </div>
      </div>

      <div className="mb-2 grid grid-cols-7 gap-1">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="py-1 text-center text-xs font-medium uppercase tracking-wide text-slate-400"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">{calendarCells}</div>

      {monthBills.length > 0 && (
        <div className="mt-6 border-t border-slate-100 pt-4">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-slate-400">
            This month
          </p>
          <ul className="space-y-2">
            {monthBills.map((bill) => (
              <li
                key={bill.id}
                className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm"
              >
                <span className="font-medium text-slate-800">
                  {bill.name}
                  {bill.recurring && (
                    <span className="ml-2 text-xs font-normal text-brand-600">↻</span>
                  )}
                </span>
                <span className="text-slate-500">
                  {new Date(bill.dueDate + 'T00:00:00').toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                  {' · '}
                  <span className="font-medium text-slate-700">
                    {formatCurrency(bill.amount)}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
