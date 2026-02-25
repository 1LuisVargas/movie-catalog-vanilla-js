# 🎬 Movie Catalog – Full-Stack Application

A full-stack Movie Catalog application built with **Vanilla JavaScript (frontend)** and **Node.js + Express + MongoDB (backend)**.

This project goes beyond a simple frontend catalog — it implements a structured backend architecture using an MVC-inspired pattern with controllers, services, models, and route separation. The application demonstrates API design, layered architecture, environment configuration, and frontend bundling with Webpack.

---

## 🏗️ Architecture Overview

The project is structured as a separated frontend and backend application:

- **Frontend**
  - Built with Vanilla JavaScript
  - Bundled using Webpack
  - Organized by pages, scripts, and styles
  - Consumes REST API endpoints from the backend

- **Backend**
  - Node.js + Express server
  - MongoDB database with Mongoose models
  - Structured using:
    - Controllers (request handling)
    - Services (business logic)
    - Models (data layer)
    - Routes (API endpoints)
    - Utils (shared utilities)
  - Environment-based configuration using `.env`

This layered approach ensures separation of concerns, scalability, and maintainability.

---

## 🎯 What This Project Demonstrates

- REST API design
- MVC-inspired backend structure
- Service-layer abstraction
- MongoDB schema modeling with Mongoose
- Environment variable management
- Frontend-backend integration
- Webpack configuration and module bundling
- Error handling and utility abstraction
