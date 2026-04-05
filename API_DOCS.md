1 📘 User Management API Documentation

## 🔗 Base URL

/api/user

## 🔐 Authentication & Authorization

- All endpoints are protected.
- Token required in header:

Authorization: Bearer <token>

````

- Allowed Roles:
  - admin
  - analyst
  - viewer

---

## 🧑‍💻 User Object Structure

```json
{
  "_id": "69d0dce00a11df5c4bc6c576",
  "name": "John",
  "email": "john@gmail.com",
  "role": "viewer",
  "status": "active",
  "createdAt": "2026-04-04T09:41:52.236Z",
  "updatedAt": "2026-04-04T09:41:52.236Z"
}
````

📌 Note:

- Password is securely hashed and **not returned** in API responses.

---

# 📌 Endpoints

---

## 🟢 1. Create User

### Endpoint

```
POST /api/user/createUser
```

### Description

Create a new user in the system.

### Request Body

```json
{
  "name": "John",
  "email": "john@gmail.com",
  "password": "123456",
  "role": "viewer",
  "status": "active"
}
```

### Response (201 Created)

```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "_id": "69d0dce00a11df5c4bc6c576",
    "name": "John",
    "email": "john@gmail.com",
    "role": "viewer",
    "status": "active",
    "createdAt": "2026-04-04T09:41:52.236Z",
    "updatedAt": "2026-04-04T09:41:52.236Z"
  }
}
```

### Status Codes

- 201 → Created
- 400 → Bad Request
- 401 → Unauthorized

---

## 🔵 2. Get Single User

### Endpoint

```
GET /api/user/singleUser/:id
```

### Description

Fetch a single user by ID.

### Path Params

- `id` → User ID

### Response (200 OK)

```json
{
  "success": true,
  "data": {
    "_id": "69d0dce00a11df5c4bc6c576",
    "name": "John",
    "email": "john@gmail.com",
    "role": "viewer",
    "status": "active",
    "createdAt": "2026-04-04T09:41:52.236Z",
    "updatedAt": "2026-04-04T09:41:52.236Z"
  }
}
```

### Status Codes

- 200 → Success
- 404 → User not found
- 401 → Unauthorized

---

## 🔴 3. Delete User (Delete)

### Endpoint

```
DELETE /api/user/deleteUser/:id
```

### Description

Delete a user (marks user as deleted instead of removing from database).

### Path Params

- `id` → User ID

### Response (200 OK)

```json
{
  "success": true,
  "message": "User deleted successfully"
}
```

### Status Codes

- 200 → Deleted
- 404 → User not found
- 401 → Unauthorized

---

## 🟡 4. Update User

### Endpoint

```
PUT /api/user/updateUser/:id
```

### Description

Update user details.

### Path Params

- `id` → User ID

### Request Body

```json
{
  "name": "Updated Name",
  "email": "updated@gmail.com",
  "role": "admin",
  "status": "active"
}
```

### Response (200 OK)

```json
{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "_id": "69d0dce00a11df5c4bc6c576",
    "name": "Updated Name",
    "email": "updated@gmail.com",
    "role": "admin",
    "status": "active",
    "createdAt": "2026-04-04T09:41:52.236Z",
    "updatedAt": "2026-04-04T10:00:00.000Z"
  }
}
```

### Status Codes

- 200 → Updated
- 400 → Bad Request
- 404 → User not found
- 401 → Unauthorized

---

# 📌 Additional Notes

- All APIs are protected using JWT-based authentication.
- Role-based authorization is implemented.
- Delete operation is implemented as **Delete**.
- Sensitive fields like password are never exposed in API responses.

---

2 📘 Record Management API Documentation

---

## 🔗 Base URL

```id="p4n2kx"
/api/record
```

---

## 🔐 Authentication & Authorization

- All endpoints are protected.
- Token required in header:

```id="x8k1lm"
Authorization: Bearer <token>
```

- Allowed Role:
  - admin

---

## 📊 Record Object Structure

```json id="b2z9rt"
{
  "_id": "69cfcc60e457df130ba1b45f",
  "amount": 20000,
  "type": "income",
  "category": "Food",
  "date": "2026-04-02T18:30:00.000Z",
  "note": "Client payment",
  "createdAt": "2026-04-03T14:19:12.715Z",
  "updatedAt": "2026-04-03T14:19:12.715Z"
}
```

---

# 📌 Endpoints

---

## 🟢 1. Create Record

### Endpoint

```id="j2l8qs"
POST /api/record/createRecord
```

### Description

Create a new financial record (income/expense).

### Request Body

```json id="m9x2wr"
{
  "amount": 20000,
  "type": "income",
  "category": "Food",
  "date": "2026-04-02",
  "note": "Client payment"
}
```

### Response (201 Created)

```json id="z7k4pd"
{
  "success": true,
  "message": "Record created successfully",
  "data": {
    "_id": "69cfcc60e457df130ba1b45f",
    "amount": 20000,
    "type": "income",
    "category": "Food",
    "date": "2026-04-02T18:30:00.000Z",
    "note": "Client payment",
    "createdAt": "2026-04-03T14:19:12.715Z",
    "updatedAt": "2026-04-03T14:19:12.715Z"
  }
}
```

### Status Codes

- 201 → Created
- 400 → Bad Request
- 401 → Unauthorized

---

## 🔵 2. Get Single Record

### Endpoint

```id="c1v7ua"
GET /api/record/singleRecord/:id
```

### Description

Fetch a single record by ID.

### Path Params

- `id` → Record ID

### Response (200 OK)

```json id="r5n2lk"
{
  "success": true,
  "data": {
    "_id": "69cfcc60e457df130ba1b45f",
    "amount": 20000,
    "type": "income",
    "category": "Food",
    "date": "2026-04-02T18:30:00.000Z",
    "note": "Client payment",
    "createdAt": "2026-04-03T14:19:12.715Z",
    "updatedAt": "2026-04-03T14:19:12.715Z"
  }
}
```

### Status Codes

- 200 → Success
- 404 → Record not found
- 401 → Unauthorized

---

## 🔴 3. Delete Record (Delete)

### Endpoint

```id="y8q3we"
DELETE /api/record/deleteRecord/:id
```

### Description

Delete a record (marks record as deleted instead of removing from database).

### Path Params

- `id` → Record ID

### Response (200 OK)

```json id="u6b9cz"
{
  "success": true,
  "message": "Record deleted successfully"
}
```

### Status Codes

- 200 → Deleted
- 404 → Record not found
- 401 → Unauthorized

---

## 🟡 4. Update Record

### Endpoint

```id="t3m8xn"
PUT /api/record/updateRecord/:id
```

### Description

Update record details.

### Path Params

- `id` → Record ID

### Request Body

```json id="q1z5ka"
{
  "amount": 25000,
  "type": "income",
  "category": "Salary",
  "date": "2026-04-03",
  "note": "Updated payment"
}
```

### Response (200 OK)

```json id="n4v7ds"
{
  "success": true,
  "message": "Record updated successfully",
  "data": {
    "_id": "69cfcc60e457df130ba1b45f",
    "amount": 25000,
    "type": "income",
    "category": "Salary",
    "date": "2026-04-03T18:30:00.000Z",
    "note": "Updated payment",
    "createdAt": "2026-04-03T14:19:12.715Z",
    "updatedAt": "2026-04-03T15:00:00.000Z"
  }
}
```

### Status Codes

- 200 → Updated
- 400 → Bad Request
- 404 → Record not found
- 401 → Unauthorized

---

# 📌 Additional Notes

- All APIs are protected using JWT authentication.
- Only `admin` role can access these endpoints.
- Delete operation is implemented as **Delete**.
- Data is stored with timestamps (`createdAt`, `updatedAt`).

---

3 📘 Dashboard API Documentation

---

## 🔗 Base URL

```
/api/dashboard
```

---

## 🔐 Authentication & Authorization

- All endpoints are protected.
- Token required in header:

```
Authorization: Bearer <token>
```

- Allowed Roles:
  - admin
  - analyst

---

# 📌 Endpoint

---

## 📊 1. Get Dashboard Summary

### Endpoint

```
GET /api/dashboard/summary
```

### Description

Fetch dashboard summary data including aggregated insights such as total income, total expenses, and other analytics.

---

### Response (200 OK)

```json
{
  "success": true,
  "data": {
    "totalIncome": 50000,
    "totalExpense": 20000,
    "balance": 30000,
    "recentTransactions": [
      {
        "_id": "69cfcc60e457df130ba1b45f",
        "amount": 20000,
        "type": "income",
        "category": "Food",
        "date": "2026-04-02T18:30:00.000Z",
        "note": "Client payment"
      }
    ]
  }
}
```

---

### Status Codes

- 200 → Success
- 401 → Unauthorized
- 403 → Forbidden (role not allowed)

---

# 📌 Additional Notes

- This endpoint provides **aggregated data** for dashboard view.
- Only users with `admin` or `analyst` role can access.
- Data is typically calculated using database aggregation (e.g., totals, summaries).
- Useful for analytics and reporting UI.

---

4 📘 Admin Management API Documentation

---

## 🔗 Base URL

```
/api/admin
```

---

## 🔐 Authentication & Authorization

- All endpoints are protected using **admin middleware**.
- Token required in header:

```
Authorization: Bearer <token>
```

- Some actions require:
  - `admin` role only

---

# 📌 User Management (Admin)

---

## 🔵 1. Get All Users

### Endpoint

```
GET /api/admin/getAllUser
```

### Description

Fetch all users from the system.

### Response (200 OK)

```json
{
  "success": true,
  "data": [
    {
      "_id": "69d0dce00a11df5c4bc6c576",
      "name": "John",
      "email": "john@gmail.com",
      "role": "viewer",
      "status": "active",
      "createdAt": "2026-04-04T09:41:52.236Z",
      "updatedAt": "2026-04-04T09:41:52.236Z"
    }
  ]
}
```

---

## 🟢 2. Create User (Admin)

### Endpoint

```
POST /api/admin/createUserFromAdmin
```

### Description

Admin can create a new user.

### Authorization

- Role: `admin`

### Request Body

```json
{
  "name": "John",
  "email": "john@gmail.com",
  "password": "123456",
  "role": "viewer",
  "status": "active"
}
```

### Response (201 Created)

```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "_id": "69d0dce00a11df5c4bc6c576",
    "name": "John",
    "email": "john@gmail.com",
    "role": "viewer",
    "status": "active",
    "createdAt": "2026-04-04T09:41:52.236Z",
    "updatedAt": "2026-04-04T09:41:52.236Z"
  }
}
```

---

## 🔴 3. Delete User (Delete)

### Endpoint

```
DELETE /api/admin/deleteUserFromAdmin/:id
```

### Description

Admin can Delete a user.

### Authorization

- Role: `admin`

### Path Params

- `id` → User ID

### Response (200 OK)

```json
{
  "success": true,
  "message": "User deleted successfully"
}
```

---

## 🟡 4. Update User

### Endpoint

```
PUT /api/admin/updateUserFromAdmin/:id
```

### Description

Admin can update user details.

### Authorization

- Role: `admin`

### Path Params

- `id` → User ID

### Request Body

```json
{
  "name": "Updated Name",
  "email": "updated@gmail.com",
  "role": "analyst",
  "status": "active"
}
```

### Response (200 OK)

```json
{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "_id": "69d0dce00a11df5c4bc6c576",
    "name": "Updated Name",
    "email": "updated@gmail.com",
    "role": "analyst",
    "status": "active",
    "createdAt": "2026-04-04T09:41:52.236Z",
    "updatedAt": "2026-04-04T10:00:00.000Z"
  }
}
```

---

# 📌 Record Management (Admin)

---

## 🔵 5. Get All Records

### Endpoint

```
GET /api/admin/getAllRecord
```

### Description

Fetch all financial records with optional filters.

### Query Params (Optional)

- `type` → income / expense
- `category` → Food, Salary, etc.
- `date` → YYYY-MM-DD

### Response (200 OK)

```json
{
  "success": true,
  "data": [
    {
      "_id": "69cfcc60e457df130ba1b45f",
      "amount": 20000,
      "type": "income",
      "category": "Food",
      "date": "2026-04-02T18:30:00.000Z",
      "note": "Client payment",
      "createdAt": "2026-04-03T14:19:12.715Z",
      "updatedAt": "2026-04-03T14:19:12.715Z"
    }
  ]
}
```

---

## 🟢 6. Create Record (Admin)

### Endpoint

```
POST /api/admin/createRecordFromAdmin
```

### Description

Admin can create a financial record.

### Authorization

- Role: `admin`

### Request Body

```json
{
  "amount": 20000,
  "type": "income",
  "category": "Food",
  "date": "2026-04-02",
  "note": "Client payment"
}
```

### Response (201 Created)

```json
{
  "success": true,
  "message": "Record created successfully",
  "data": {
    "_id": "69cfcc60e457df130ba1b45f",
    "amount": 20000,
    "type": "income",
    "category": "Food",
    "date": "2026-04-02T18:30:00.000Z",
    "note": "Client payment",
    "createdAt": "2026-04-03T14:19:12.715Z",
    "updatedAt": "2026-04-03T14:19:12.715Z"
  }
}
```

---

## 🔴 7. Delete Record (Delete)

### Endpoint

```
DELETE /api/admin/deleteRecordFromAdmin/:id
```

### Description

Admin can Delete a record.

### Authorization

- Role: `admin`

### Path Params

- `id` → Record ID

### Response (200 OK)

```json
{
  "success": true,
  "message": "Record deleted successfully"
}
```

---

## 🟡 8. Update Record

### Endpoint

```
PUT /api/admin/updateRecordFromAdmin/:id
```

### Description

Admin can update record details.

### Authorization

- Role: `admin`

### Path Params

- `id` → Record ID

### Request Body

```json
{
  "amount": 25000,
  "type": "income",
  "category": "Salary",
  "date": "2026-04-03",
  "note": "Updated payment"
}
```

### Response (200 OK)

```json
{
  "success": true,
  "message": "Record updated successfully",
  "data": {
    "_id": "69cfcc60e457df130ba1b45f",
    "amount": 25000,
    "type": "income",
    "category": "Salary",
    "date": "2026-04-03T18:30:00.000Z",
    "note": "Updated payment",
    "createdAt": "2026-04-03T14:19:12.715Z",
    "updatedAt": "2026-04-03T15:00:00.000Z"
  }
}
```

---Delete

# 📌 Additional Notes

- Admin middleware ensures only authorized users can access these APIs.
- Role-based authorization is enforced for sensitive operations.
- Delete operations are implemented as **Delete**.
- Filtering is supported in record listing API.
- Data includes timestamps for tracking changes.

---
