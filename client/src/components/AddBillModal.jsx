import { useEffect, useState } from 'react'

const inputClass =
  'w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20'

const labelClass = 'mb-1.5 block text-sm font-medium text-slate-700'

const initialForm = {
  creditorName: '',
  amount: '',
  dueDate: '',
  accountNumber: '',
  recurring: false,
}

export default function AddBillModal({ isOpen, onClose, onSave }) {
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      setForm(initialForm)
      setError('')
    }
  }, [isOpen])

  if (!isOpen) return null

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!form.creditorName.trim()) {
      setError('Please enter the creditor name.')
      return
    }

    const amount = parseFloat(form.amount)
    if (!form.amount || Number.isNaN(amount) || amount <= 0) {
      setError('Please enter a valid bill amount.')
      return
    }

    if (!form.dueDate) {
      setError('Please select a due date.')
      return
    }

    onSave({
      name: form.creditorName.trim(),
      amount,
      dueDate: form.dueDate,
      accountNumber: form.accountNumber.trim(),
      recurring: form.recurring,
      category: 'Other',
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        aria-label="Close modal"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-bill-title"
        className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 id="add-bill-title" className="text-lg font-semibold text-slate-900">
              Add a bill
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Enter the bill details below
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div
              role="alert"
              className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200"
            >
              {error}
            </div>
          )}

          <div>
            <label htmlFor="creditorName" className={labelClass}>
              Creditor name
            </label>
            <input
              id="creditorName"
              name="creditorName"
              type="text"
              value={form.creditorName}
              onChange={handleChange}
              placeholder="e.g. Electric Company"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="amount" className={labelClass}>
              Bill amount
            </label>
            <input
              id="amount"
              name="amount"
              type="number"
              min="0.01"
              step="0.01"
              value={form.amount}
              onChange={handleChange}
              placeholder="0.00"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="dueDate" className={labelClass}>
              Due date
            </label>
            <input
              id="dueDate"
              name="dueDate"
              type="date"
              value={form.dueDate}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="accountNumber" className={labelClass}>
              Account number
            </label>
            <input
              id="accountNumber"
              name="accountNumber"
              type="text"
              value={form.accountNumber}
              onChange={handleChange}
              placeholder="Optional account number"
              className={inputClass}
            />
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="mb-3 text-sm font-medium text-slate-900">Payment type</p>
            <div className="space-y-3">
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="recurring"
                  checked={!form.recurring}
                  onChange={() => setForm((prev) => ({ ...prev, recurring: false }))}
                  className="h-4 w-4 border-slate-300 text-brand-600 focus:ring-brand-500"
                />
                <span className="text-sm text-slate-700">One-time payment</span>
              </label>
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="recurring"
                  checked={form.recurring}
                  onChange={() => setForm((prev) => ({ ...prev, recurring: true }))}
                  className="h-4 w-4 border-slate-300 text-brand-600 focus:ring-brand-500"
                />
                <span className="text-sm text-slate-700">
                  Recurring monthly
                  <span className="mt-0.5 block text-xs text-slate-400">
                    Shows on the same date each month
                  </span>
                </span>
              </label>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-lg border border-slate-300 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 rounded-lg bg-brand-600 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-700"
            >
              Save bill
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
