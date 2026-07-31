function toDateString(date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function addMonthsPreservingDay(date, months) {
  const day = date.getDate()
  const result = new Date(date.getFullYear(), date.getMonth() + months, 1)
  const lastDay = new Date(result.getFullYear(), result.getMonth() + 1, 0).getDate()
  result.setDate(Math.min(day, lastDay))
  return result
}

export function expandBillOccurrences(bills, monthsAhead = 12) {
  const occurrences = []

  for (const bill of bills) {
    const start = new Date(bill.dueDate + 'T00:00:00')

    if (!bill.recurring) {
      occurrences.push({
        ...bill,
        occurrenceId: String(bill.id),
      })
      continue
    }

    for (let i = 0; i < monthsAhead; i++) {
      const occurrenceDate = addMonthsPreservingDay(start, i)
      occurrences.push({
        ...bill,
        id: `${bill.id}-${toDateString(occurrenceDate)}`,
        dueDate: toDateString(occurrenceDate),
        occurrenceId: `${bill.id}-${toDateString(occurrenceDate)}`,
      })
    }
  }

  return occurrences.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
}

export function getBillsForMonth(bills, year, month) {
  const expanded = expandBillOccurrences(bills)
  return expanded.filter((bill) => {
    const date = new Date(bill.dueDate + 'T00:00:00')
    return date.getFullYear() === year && date.getMonth() === month
  })
}

export function createBillId() {
  return Date.now()
}
