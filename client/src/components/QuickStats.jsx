function StatCard({ label, value, subtext, accent }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className={`mt-1 text-2xl font-bold tracking-tight ${accent || 'text-slate-900'}`}>
        {value}
      </p>
      {subtext && <p className="mt-1 text-xs text-slate-400">{subtext}</p>}
    </div>
  )
}

export default function QuickStats({ bills }) {
  const totalDueThisMonth = bills.reduce((sum, b) => sum + b.amount, 0)
  const dueSoon = bills.filter((b) => {
    const diff = Math.ceil(
      (new Date(b.dueDate + 'T00:00:00') - new Date('2026-07-31T00:00:00')) /
        (1000 * 60 * 60 * 24),
    )
    return diff >= 0 && diff <= 7
  }).length

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <StatCard
        label="Bills This Month"
        value={bills.length}
        subtext="Active recurring & one-time"
      />
      <StatCard
        label="Total Due"
        value={new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(totalDueThisMonth)}
        subtext="August 2026"
        accent="text-brand-700"
      />
      <StatCard
        label="Due This Week"
        value={dueSoon}
        subtext="Needs attention"
        accent={dueSoon > 0 ? 'text-amber-600' : 'text-slate-900'}
      />
      <StatCard
        label="Accounts Saved"
        value="—"
        subtext="Vault coming soon"
      />
    </div>
  )
}
