export const mockPayments = [
  { id: 1, date: '2025-08-12', creditorName: 'Electric Company', amountPaid: 138.25, paidOnTime: true },
  { id: 2, date: '2025-08-15', creditorName: 'Credit Card', amountPaid: 320.0, paidOnTime: true },
  { id: 3, date: '2025-09-01', creditorName: 'Rent', amountPaid: 1450.0, paidOnTime: true },
  { id: 4, date: '2025-09-03', creditorName: 'Electric Company', amountPaid: 149.8, paidOnTime: false },
  { id: 5, date: '2025-09-05', creditorName: 'Internet Provider', amountPaid: 79.99, paidOnTime: true },
  { id: 6, date: '2025-09-15', creditorName: 'Credit Card', amountPaid: 410.5, paidOnTime: true },
  { id: 7, date: '2025-10-01', creditorName: 'Rent', amountPaid: 1450.0, paidOnTime: true },
  { id: 8, date: '2025-10-02', creditorName: 'Electric Company', amountPaid: 132.4, paidOnTime: true },
  { id: 9, date: '2025-10-12', creditorName: 'Car Insurance', amountPaid: 215.0, paidOnTime: true },
  { id: 10, date: '2025-10-18', creditorName: 'Credit Card', amountPaid: 285.75, paidOnTime: false },
  { id: 11, date: '2025-11-01', creditorName: 'Rent', amountPaid: 1450.0, paidOnTime: true },
  { id: 12, date: '2025-11-04', creditorName: 'Electric Company', amountPaid: 141.2, paidOnTime: false },
  { id: 13, date: '2025-11-20', creditorName: 'Phone Bill', amountPaid: 55.0, paidOnTime: true },
  { id: 14, date: '2025-12-01', creditorName: 'Rent', amountPaid: 1450.0, paidOnTime: true },
  { id: 15, date: '2025-12-05', creditorName: 'Internet Provider', amountPaid: 79.99, paidOnTime: true },
  { id: 16, date: '2025-12-15', creditorName: 'Credit Card', amountPaid: 520.0, paidOnTime: true },
  { id: 17, date: '2026-01-02', creditorName: 'Rent', amountPaid: 1450.0, paidOnTime: false },
  { id: 18, date: '2026-01-03', creditorName: 'Electric Company', amountPaid: 156.9, paidOnTime: true },
  { id: 19, date: '2026-02-01', creditorName: 'Rent', amountPaid: 1450.0, paidOnTime: true },
  { id: 20, date: '2026-02-08', creditorName: 'Streaming Service', amountPaid: 15.99, paidOnTime: true },
  { id: 21, date: '2026-03-01', creditorName: 'Rent', amountPaid: 1450.0, paidOnTime: true },
  { id: 22, date: '2026-03-12', creditorName: 'Car Insurance', amountPaid: 215.0, paidOnTime: true },
  { id: 23, date: '2026-04-01', creditorName: 'Rent', amountPaid: 1450.0, paidOnTime: true },
  { id: 24, date: '2026-04-15', creditorName: 'Credit Card', amountPaid: 390.0, paidOnTime: true },
  { id: 25, date: '2026-05-01', creditorName: 'Rent', amountPaid: 1450.0, paidOnTime: true },
  { id: 26, date: '2026-05-06', creditorName: 'Electric Company', amountPaid: 128.5, paidOnTime: true },
  { id: 27, date: '2026-06-01', creditorName: 'Rent', amountPaid: 1450.0, paidOnTime: true },
  { id: 28, date: '2026-06-20', creditorName: 'Phone Bill', amountPaid: 55.0, paidOnTime: false },
  { id: 29, date: '2026-07-01', creditorName: 'Rent', amountPaid: 1450.0, paidOnTime: true },
  { id: 30, date: '2026-07-05', creditorName: 'Internet Provider', amountPaid: 79.99, paidOnTime: true },
  { id: 31, date: '2026-07-15', creditorName: 'Credit Card', amountPaid: 350.0, paidOnTime: true },
  { id: 32, date: '2026-08-01', creditorName: 'Rent', amountPaid: 1450.0, paidOnTime: true },
  { id: 33, date: '2026-08-04', creditorName: 'Electric Company', amountPaid: 142.5, paidOnTime: true },
]

export function getPaymentsPastYear(payments, referenceDate = new Date()) {
  const cutoff = new Date(referenceDate)
  cutoff.setFullYear(cutoff.getFullYear() - 1)

  return payments
    .filter((payment) => new Date(payment.date + 'T00:00:00') >= cutoff)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}
