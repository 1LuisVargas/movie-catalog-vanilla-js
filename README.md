# 🎬 Movie Catalog – Full-Stack Application

A full-stack Movie Catalog application built with **Vanilla JavaScript (frontend)** and **Node.js + Express + MongoDB (backend)**.

Unlike a simple client-side catalog, this project implements a structured backend architecture using an MVC-inspired layered pattern. The application demonstrates REST API design, service-layer abstraction, database integration, environment configuration, and frontend bundling with Webpack.

---

## 🏗️ Architecture Overview

The project is structured as two independent applications:

### 🔹 Frontend
- Built with Vanilla JavaScript
- Bundled using Webpack
- Organized by pages, scripts, and styles
- Consumes REST API endpoints from the backend

### 🔹 Backend
- Node.js + Express server
- MongoDB database with Mongoose models
- Layered architecture including:
  - **Routes** (API endpoint definitions)
  - **Controllers** (request/response handling)
  - **Services** (business logic abstraction)
  - **Models** (data layer)
  - **Utils & Config** (shared utilities and environment configuration)

This separation of concerns improves scalability, readability, and maintainability.

---

## 📁 Project Structure

```
movie-catalog-vanilla-js/
│
├── front/                          # Frontend (Vanilla JS + Webpack)
│   ├── pages/                      # HTML pages
│   ├── public/                     # Static assets
│   ├── scripts/                    # Frontend JavaScript logic
│   ├── styles/                     # CSS styles
│   ├── index.html                  # Entry HTML file
│   ├── webpack.config.js           # Webpack configuration
│   └── package.json
│
├── back/                           # Backend (Node.js + Express + MongoDB)
│   ├── src/
│   │   ├── config/                 # Configuration files
│   │   ├── controllers/            # Route controllers
│   │   ├── models/                 # Mongoose models
│   │   ├── routes/                 # Express route definitions
│   │   ├── services/               # Business logic layer
│   │   ├── utils/                  # Utility functions
│   │   └── server.js               # Express server setup
│   │
│   ├── index.js                    # Application entry point
│   ├── .env.example                # Environment variables template
│   └── package.json
│
├── challenge-testing/              # Separate testing challenge
│   ├── tests/
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/1LuisVargas/movie-catalog-vanilla-js.git
```

---

### 2️⃣ Backend Setup

```bash
cd back
npm install
```

Create a `.env` file based on `.env.example`:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd ../front
npm install
npm run build
npm start
```

The frontend will communicate with the backend API.

---

## 🔍 API Responsibilities

The backend manages:

- Movie creation and retrieval
- Data validation
- Database persistence
- Structured error handling

All business logic is abstracted into the service layer to keep controllers clean and maintainable.

---

## 🎯 What This Project Demonstrates

- REST API design with Express
- MVC-inspired layered backend architecture
- Service-layer abstraction
- MongoDB schema modeling with Mongoose
- Environment variable management
- Frontend-backend integration
- Webpack module bundling
- Separation of concerns in full-stack applications

---

## 📌 Future Improvements

- Authentication & role-based access
- API documentation (Swagger)
- Integration tests
- Docker containerization
- Deployment configuration

---

## 📜 License

This project is open source and available under the MIT License.
