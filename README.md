# Limi AI Technical Assessment – MERN Inventory System

## Overview

This project is a minimal full-stack application built as part of the Limi AI technical assessment. The objective was to take a basic MERN-style setup and evolve it into a more structured, scalable, and production-oriented system.

The implementation focuses on backend architecture, safe data handling, testing practices, and basic DevOps integration rather than building a full e-commerce platform.

---

## Key Features

### Intelligent Inventory Sync

* Bulk stock update API for multiple products
* Uses MongoDB transactions to prevent inconsistent updates
* Protects against overselling

### Clean Architecture

* Service Layer pattern to separate business logic from controllers
* Middleware-based validation for incoming requests
* Modular and maintainable project structure

### Unit Testing (TDD)

* Implemented using Jest
* Followed a Test-Driven Development approach
* Covers basic functionality and edge cases

### CI/CD Pipeline

* GitHub Actions workflow configured
* Automatically runs tests on every push

### Docker Support

* Backend containerized using Docker
* Ready for deployment in a containerized environment

---

## Tech Stack

**Frontend**

* React (Vite)
* Axios

**Backend**

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose

**DevOps & Testing**

* Jest
* Docker
* GitHub Actions

---

## Project Structure

```
root/
├── client-side/        # React frontend
├── server-side/        # Node.js backend
│   ├── controllers/
│   ├── services/
│   ├── middleware/
│   ├── models/
│   ├── utils/
│   └── tests/
├── .github/workflows/  # CI/CD configuration
└── README.md
```

---

## Setup Instructions

### Clone the repository

```
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

---

### Backend Setup

```
cd server-side
npm install
```

Create a `.env` file in the `server-side` directory:

```
MDB_URL=your_mongodb_connection_string
PORT=5000
```

Start the backend:

```
npm start
```

---

### Frontend Setup

```
cd client-side
npm install
npm run dev
```

---

## Running Tests

```
cd server-side
npm test
```

---

## Docker Usage

To build and run the backend in a container:

```
cd server-side
docker build -t inventory-app .
docker run -p 5000:5000 inventory-app
```

---

## CI/CD Pipeline

The CI pipeline is defined in `.github/workflows/ci.yml`.
It installs dependencies and runs the test suite automatically on every push to the main branch.

---

## Core API Endpoint

### Bulk Stock Update

```
POST /api/products/bulk-update-stock
```

**Request Body:**

```
[
  { "productId": "id1", "quantity": 2 },
  { "productId": "id2", "quantity": 1 }
]
```

This endpoint performs atomic updates using transactions to ensure data consistency.

---

## Design Decisions

* Introduced a service layer to isolate business logic and improve maintainability
* Used middleware for request validation to keep controllers minimal
* Applied transactions to guarantee consistent database updates
* Followed TDD for critical utility logic

---

## Security

* Environment variables are excluded using `.gitignore`
* Sensitive credentials are not committed to the repository

---

## Future Improvements

* Add authentication and role-based access control
* Improve UI with a component library
* Add real-time updates using WebSockets
* Deploy using a cloud provider

---

## Author

Ghazi
