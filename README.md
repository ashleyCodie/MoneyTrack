# [View my project here ++**https://ashleycodie.github.io/MoneyTrack/](your-github-pages-link)**++

# 💰 MoneyTrack

MoneyTrack is a personal finance management application that helps users organize their finances in one secure location. Users can track bills, manage recurring payments, maintain a payment ledger, securely store account information, and keep customer service contact details for all of their accounts.

The goal of MoneyTrack is to eliminate the stress of managing multiple bills by providing an easy-to-use dashboard that keeps everything organized in one place.

---

## Live Demo
View my project here: https://ashleycodie.github.io/MoneyTrack/

## ✨ Features

### 🏠 Home Page

- Modern responsive landing page
- Hero section introducing the application
- Quick statistics overview
- Monthly bill calendar preview
- Upcoming bills section
- Feature highlights
- Account Vault preview
- Customer Service preview

### 🔐 Authentication

- User Sign In page
- User Sign Up page
- Placeholder authentication flow
- Dashboard redirect after login/signup
- Sign Out functionality

### 📊 Dashboard

- Personal financial overview
- Bill statistics
- Monthly calendar
- Upcoming bills list
- Quick access to financial tools

### 💳 Bill Management

Users can:

- Add new bills
- Enter creditor name
- Bill amount
- Due date
- Account number
- Select:
  - One-Time Bill
  - Recurring Monthly Bill

Recurring bills automatically generate future monthly calendar entries.

### 📅 Bill Calendar

- Monthly calendar view
- Displays bill due dates
- Visual indicators for bills due
- Lists bills below the calendar
- Supports recurring payments

### 📖 Payment Ledger

The Ledger page displays all bill payments made during the previous year.

Each payment includes:

- Payment Date
- Creditor Name
- Amount Paid
- Paid On Time Status

The ledger is displayed in an organized grid for quick reference.

### 🔒 Account Vault

Securely store account information including:

- Account numbers
- Usernames
- Passwords
- Login information

### 📞 Customer Service Directory

Store important support information including:

- Customer Service phone numbers
- Website links
- Notes
- Contact information

---

# 🛠 Tech Stack

### Frontend

- React
- JavaScript (JSX)
- Tailwind CSS v4
- React Router DOM
- Vite

### Fonts

- Inter

---

# AI Used
- Cursor

---

# 📁 Project Structure

```
client/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── BillCalendar.jsx
│   │   ├── UpcomingBills.jsx
│   │   ├── QuickStats.jsx
│   │   ├── FeatureCard.jsx
│   │   └── AddBillModal.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── SignIn.jsx
│   │   ├── SignUp.jsx
│   │   ├── Dashboard.jsx
│   │   └── Ledger.jsx
│   │
│   ├── data/
│   │   └── mockBills.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── vite.config.js
```

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/yourusername/MoneyTrack.git
```

## Install dependencies

```bash
cd client
npm install
```

## Start the development server

```bash
npm run dev
```

Open your browser and navigate to:

```
http://localhost:5173
```

---

# 🔄 Current User Flow

### Home

```
Home
   │
   ├── Sign In
   │        │
   │        ▼
   │    Login Page
   │        │
   │        ▼
   │   Dashboard
   │
   └── Get Started
            │
            ▼
      Sign Up Page
            │
            ▼
        Dashboard
```

---

# 📅 Planned Features

- User authentication with backend
- Password encryption
- Protected routes
- Database integration
- Cloud data storage
- Password recovery
- Email verification
- User profile settings
- Bill reminders
- Email notifications
- SMS reminders
- Multiple ledger categories
- Search and filtering
- Export ledger to PDF
- Dark mode
- Mobile responsive improvements
- Budget planning
- Spending analytics
- Charts and reports

---

# 🎯 Roadmap

### ✅ Completed

- Home page
- Navigation
- Responsive layout
- Sign In page
- Sign Up page
- Dashboard
- Bill Calendar
- Upcoming Bills
- Add Bill Modal
- Recurring Bills
- Payment Ledger page
- Account Vault preview
- Customer Service preview

### 🚧 In Progress

- Persistent bill storage
- User authentication
- Backend API
- Database integration

### 📌 Future

- Notifications
- Reports
- Budget tracking
- Password encryption
- Mobile app
- Cloud synchronization

---

# 💡 Purpose

MoneyTrack was created to simplify personal financial management by providing one secure location to organize:

- Bills
- Due dates
- Account information
- Login credentials
- Customer service contacts
- Payment history

The application helps users stay organized, avoid late payments, and keep important financial information easily accessible.

---

# 📄 License

This project is licensed under the MIT License.

---

## 👩‍💻 Author

**Ashley Brooks**

Full Stack Developer