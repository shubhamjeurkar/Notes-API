# 📝 Notes API

A secure, RESTful Notes management API built with **Node.js, Express.js, and MongoDB**.  
Includes user authentication, validation, and comprehensive API documentation via Swagger.

---

## 🚀 Features

- **User Registration & Authentication** with **JWT**
- **CRUD operations** for notes, with validation and ownership checks
- Centralized **error handling middleware**
- **Express rate limiting**, **Helmet for security headers**, and **CORS**
- API documentation using **Swagger UI**

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Auth:** JSON Web Tokens (JWT)
- **Middleware:** Express Validator, Helmet, CORS
- **Docs:** Swagger UI

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shubhamjeurkar/Notes-API.git
   cd Notes-API
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up a `.env` file with the following:**
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the application:**
   ```bash
   npm start
   ```

---

## 📚 API Documentation

Once running, access the API docs via Swagger UI:  
👉 **http://localhost:3000/api-docs**

### Available Endpoints

- `POST /api/v1/register` — Register a new user
- `POST /api/v1/login` — User login (returns JWT)
- `GET /api/v1/notes` — Retrieve all notes (requires auth)
- `POST /api/v1/notes` — Create a new note (requires auth)
- `PUT /api/v1/notes/:id` — Update an existing note (requires auth)
- `DELETE /api/v1/notes/:id` — Delete a note (requires auth)

---

## 🌐 Live Demo
- **Swagger UI:** https://notes-api-fmsp.onrender.com/api-docs/
- **OpenAPI JSON:** https://notes-api-fmsp.onrender.com/api-docs-json

## 🔐 Try the API in Swagger
1) `POST /api/v1/auth/register` (or use an existing user)
2) `POST /api/v1/auth/login` → copy JWT
3) Click **Authorize** in Swagger → paste token as: `Bearer <JWT>`
4) Call notes endpoints

## 🧪 Quick test (cURL)
curl -X POST https://notes-api-fmsp.onrender.com/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"shubham@gmail.com","password":"secret"}'

---

## 🧑‍💻 Author

**Shubham Jeurkar**  
- [LinkedIn](https://linkedin.com/in/shubham-jeurkar)
- [GitHub](https://github.com/shubhamjeurkar)
