# 🎬 Movie Catalog — Vanilla JS

> A full-stack movie catalog application built without any frontend framework. Browse, add, edit, and delete movies through a clean interface powered by a local Express backend — all with pure vanilla JavaScript and DOM manipulation.

---

<!-- TO BE UPDATED WITH SCREENSHOTS OF THE PROJECT
## 📸 Screenshots

> _Add screenshots of the movie catalog UI here — e.g. the movie listing page, the add/edit form, and the detail view._

---
-->

## ✨ Features

- **Browse Movies** — View the full movie catalog rendered dynamically from the backend
- **Add Movies** — Submit new movies through a form with client-side DOM updates
- **Edit Movies** — Update existing movie details in place
- **Delete Movies** — Remove movies from the catalog instantly
- **Vanilla JS DOM Manipulation** — No frameworks, no libraries — pure JavaScript throughout
- **Webpack Bundling** — Frontend assets compiled and optimized via Webpack
- **Layered Backend Architecture** — Express server organized by controllers, services, models, routes, and utils
- **Test Suite** — Dedicated `challenge-testing` module with a structured test setup

---

## 🛠️ Tech Stack

| Layer      | Technology                              |
|------------|-----------------------------------------|
| Frontend   | Vanilla JavaScript, HTML, CSS, Webpack  |
| Backend    | Node.js, Express (JavaScript)           |
| Testing    | Custom test suite (`challenge-testing`) |

---

## 📁 Project Structure

```
movie-catalog-vanilla-js/
├── back/                        # Backend — Node.js + Express REST API
│   ├── src/
│   │   ├── config/              # App configuration (env, DB, etc.)
│   │   ├── controllers/         # Route handler logic
│   │   ├── models/              # Data models / schema definitions
│   │   ├── routes/              # Express route declarations
│   │   ├── services/            # Business logic layer
│   │   ├── utils/               # Utility/helper functions & error handling
│   │   └── server.js            # Express server setup
│   ├── index.js                 # Backend entry point
│   ├── .env.example             # Environment variable template
│   └── package.json
│
├── front/                       # Frontend — Vanilla JS SPA
│   ├── pages/                   # HTML page files
│   ├── public/                  # Static public assets
│   ├── scripts/                 # JavaScript modules (DOM logic, API calls)
│   ├── styles/                  # CSS stylesheets
│   ├── index.html               # App entry point
│   ├── webpack.config.js        # Webpack bundler configuration
│   └── package.json
│
├── challenge-testing/           # Test suite
│   ├── tests/                   # Test files
│   ├── index.js                 # Test runner entry point
│   └── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

---

### 1. Clone the Repository

```bash
git clone https://github.com/1LuisVargas/movie-catalog-vanilla-js.git
cd movie-catalog-vanilla-js
```

---

### 2. Set Up the Backend

```bash
cd back
npm install
```

Copy the environment variables template and fill in your values:

```bash
cp .env.example .env
```

Open `.env` and configure as needed:

```env
PORT=3000
```

Start the backend server:

```bash
node index.js
```

The API will be available at `http://localhost:3000`.

---

### 3. Run the Frontend

Open a new terminal tab/window:

```bash
cd front
npm install
npm run build
```

Then simply open `front/index.html` in your browser. Make sure the backend is running so the frontend can fetch and update movie data.

> **Tip:** For the best development experience, use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code to auto-reload on changes.

---

### 4. Run the Tests

```bash
cd challenge-testing
npm install
node index.js
```

---

## 🔌 API Endpoints

> Base URL: `http://localhost:3000`

| Method | Endpoint        | Description              |
|--------|-----------------|--------------------------|
| GET    | `/movies`       | Get all movies           |
| POST   | `/movies`       | Get a movie by ID        |

---

## 👤 Author

**Luis Vargas**
- GitHub: [@1LuisVargas](https://github.com/1LuisVargas)
- LinkedIn: [1LuisVargas](https://www.linkedin.com/in/1luisvargas/)
