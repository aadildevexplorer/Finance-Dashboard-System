# 💰 Finance Dashboard System

A production-ready backend system for managing financial records, users, and analytics with role-based access control.

---

## 🚀 Features

- 🔐 JWT Authentication & Authorization
- 👥 Role-Based Access Control (Admin, Analyst, Viewer)
- 📊 Dashboard Analytics (Income, Expense, Balance)
- 📁 Record Management (Income/Expense tracking)
- 👤 User Management (Admin controlled)
- 🗑️ Delete Implementation
- 🔍 Filtering Support (Records API)
- 🧱 Clean Architecture (Controller → Service → Model)
- 🧪 Test-ready structure (Jest compatible)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication

---

## 📂 Project Structure

```
project/
├── controllers/
├── services/
├── models/
├── routes/
├── middleware/
├── utils/
├── README.md
├── API_DOCS.md
```

---

## ⚙️ Installation & Setup

```bash
git clone <your-repo-url>
cd project
npm install
```

### ▶️ Run Server

```bash
npm run dev
```

---

## 🔐 Authentication

All protected routes require JWT token:

```
Authorization: Bearer <token>
```

---

## 📌 API Overview

| Module        | Description                        |
| ------------- | ---------------------------------- |
| User API      | User CRUD with roles               |
| Record API    | Financial records (income/expense) |
| Dashboard API | Aggregated analytics               |
| Admin API     | Full control over users & records  |

---

## 📖 Full API Documentation

👉 Detailed API documentation available here:

```
API_DOCS.md
```

---

## 📊 Key Functionalities

### 🔹 User Management

- Create, update, delete users
- Role-based access (admin, analyst, viewer)

### 🔹 Record Management

- Add income/expense
- Filter by type, category, date

### 🔹 Dashboard

- Total income
- Total expense
- Balance calculation
- Recent transactions

### 🔹 Admin Controls

- Full access to users & records
- Restricted by role-based middleware

---

## 🔒 Security

- Passwords are hashed before storing
- Sensitive data is not exposed in API responses
- Role-based authorization enforced
- Protected routes using middleware

---

## 🧠 Architecture

```
Route → Controller → Service → Model → Database
```

- Controller → handles request/response
- Service → business logic
- Model → database schema

---

## 🧪 Testing (Optional Enhancement)

- Unit Testing → Services
- Integration Testing → APIs
- Tools: Jest + Supertest

---

## 📌 Notes

- Delete is implemented for safe data handling
- APIs are scalable and production-ready
- Designed with clean separation of concerns

---

## 👨‍💻 Author

Developed as part of backend system design & implementation practice.

---
