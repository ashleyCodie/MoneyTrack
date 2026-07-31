import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import QuickStats from '../components/QuickStats'
import BillCalendar from '../components/BillCalendar'
import UpcomingBills from '../components/UpcomingBills'
import AddBillModal from '../components/AddBillModal'
import { mockBills } from '../data/mockBills'
import { createBillId, expandBillOccurrences } from '../utils/bills'

const today = new Date()

export default function Dashboard() {
  const [bills, setBills] = useState(
    mockBills.map((bill) => ({
      ...bill,
      recurring: bill.recurring ?? false,
      accountNumber: bill.accountNumber ?? '',
    })),
  )
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [calendarDate, setCalendarDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  })

  const expandedBills = expandBillOccurrences(bills)

  function handleSaveBill(billData) {
    setBills((prev) => [
      ...prev,
      {
        id: createBillId(),
        ...billData,
      },
    ])
  }

  function handlePrevMonth() {
    setCalendarDate((prev) => {
      const date = new Date(prev.year, prev.month - 1, 1)
      return { year: date.getFullYear(), month: date.getMonth() }
    })
  }

  function handleNextMonth() {
    setCalendarDate((prev) => {
      const date = new Date(prev.year, prev.month + 1, 1)
      return { year: date.getFullYear(), month: date.getMonth() }
    })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header variant="dashboard" />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-brand-600">Your dashboard</p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Good to see you back
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Here&apos;s an overview of your bills and accounts.
            </p>
          </div>
          <Link
            to="/"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
          >
            Sign out
          </Link>
        </div>

        <QuickStats bills={expandedBills} calendarDate={calendarDate} />

        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <BillCalendar
              bills={expandedBills}
              year={calendarDate.year}
              month={calendarDate.month}
              onPrevMonth={handlePrevMonth}
              onNextMonth={handleNextMonth}
            />
          </div>
          <div className="lg:col-span-2">
            <UpcomingBills
              bills={expandedBills}
              onAddBill={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </main>

      <AddBillModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveBill}
      />
    </div>
  )
}
