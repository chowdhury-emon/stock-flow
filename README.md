# StockFlow

A modern inventory and sales management system built with Next.js, TypeScript, and Firebase.

StockFlow is a full-stack web application designed to help small businesses manage products, inventory, sales, and related business data from a single dashboard.

## Features

### Authentication

* User registration
* User login
* User logout
* Authentication state management
* Protected routes

### Product Management

* Create products
* View products
* Update products
* Delete products
* Product categories
* Product images
* Search and filtering

### Inventory Management

* Track stock levels
* Increase and decrease stock
* Low-stock monitoring
* Inventory transaction history

### Sales Management

* Create sales
* Manage customers
* Track orders
* Update inventory after sales
* View sales history

### Dashboard

* Inventory overview
* Sales overview
* Revenue statistics
* Low-stock products
* Charts and reports

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Backend / Services

* Firebase Authentication
* Cloud Firestore
* Firebase Storage

### Development Tools

* ESLint
* Git
* GitHub

## Project Structure

```text
stock-flow/
├── app/
├── components/
├── lib/
├── types/
├── public/
├── .env
├── package.json
└── README.md
```

The project uses the Next.js App Router.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/chowdhury-emon/stock-flow.git
cd stock-flow
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Firebase

Create a `.env` file in the project root:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

Add the corresponding values from your Firebase project.

### 4. Run the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Development Roadmap

* [x] Next.js project setup
* [x] Firebase project setup
* [x] Firebase SDK configuration
* [x] Firebase Authentication setup
* [x] Registration
* [ ] Login
* [ ] Logout
* [ ] Authentication state
* [ ] Protected routes
* [ ] Product CRUD
* [ ] Product search and filtering
* [ ] Inventory management
* [ ] Sales management
* [ ] Dashboard
* [ ] User roles and permissions
* [ ] Firebase Storage
* [ ] Reports and analytics
* [ ] Production deployment

## Environment Variables

The following environment variables are required:

```text
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
```

> `.env` contains local configuration and should not be committed to the repository.

## Learning Goals

StockFlow is also a learning project focused on building a real-world application with Next.js and Firebase.

The project will be used to practice:

* Next.js App Router
* Server and Client Components
* TypeScript
* React state management
* Forms and validation
* Firebase Authentication
* Cloud Firestore
* Firebase Storage
* CRUD operations
* Protected routes
* URL-based search and filtering
* Loading and error states
* Server Actions
* Route Handlers
* Caching and revalidation
* Optimistic UI
* Application architecture

## Status

🚧 **In active development**

StockFlow is being developed incrementally, with features added as the project evolves.

## License

This project is currently for learning and portfolio purposes.
