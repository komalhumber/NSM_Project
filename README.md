# Neighborhood Service Marketplace (NSM)

## Project Overview

The Neighborhood Service Marketplace (NSM) is a full-stack web application that allows residents to request services and service providers to submit quotes for those requests. The platform enables a simple marketplace where users can register, log in, create service requests, and interact through a quote-based workflow.

This project was developed as part of the **Modern Web Technologies (CPAN-212)** course. The goal of the assignment was to design and implement a full-stack application using a NoSQL database and RESTful backend services.

---

## Technology Stack

### Frontend

* Angular
* Bootstrap
* TypeScript
* HTML / CSS

### Backend

* Node.js
* Express.js
* REST API architecture

### Database

* MongoDB
* Mongoose ODM

---

## System Architecture

```
Angular Frontend (Client)
        ↓
Node.js + Express REST API
        ↓
MongoDB Database
```

The Angular frontend communicates with the Express backend through REST API endpoints. The backend processes requests, performs authentication, and interacts with MongoDB to store and retrieve data.

---

## Core Features

### User Authentication

* User registration
* User login
* Session-based authentication
* Role-based access (Resident / Provider)

### Service Requests

Residents can:

* Create service requests
* Provide request title, description, and location
* View created requests

### Quotes System

Service providers can:

* View open service requests
* Submit quotes with price, message, and completion time

Residents can:

* Review quotes submitted by providers
* Accept one quote for their request

---

## Database Schema

The application uses four main MongoDB collections:

```
users
categories
serviceRequests
quotes
```

### Users Collection

Stores user information including:

* fullName
* email (unique)
* passwordHash
* role (resident or provider)

### Service Requests Collection

Stores requests created by residents including:

* title
* description
* category
* location
* status

### Quotes Collection

Stores quotes submitted by service providers including:

* requestId
* providerId
* price
* message
* daysToComplete
* status

---

## Indexing Strategy

To optimize database queries, the following indexes were implemented:

* **Unique index on users.email** to prevent duplicate registrations.
* **Text index on serviceRequests.title and description** to allow keyword search.
* **Index on quotes.requestId** to improve lookup of quotes related to a specific request.

These indexes improve performance for common queries such as searching requests and retrieving quotes.

---

## API Endpoints

### Authentication

```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
```

### Service Requests

```
POST /api/requests
GET /api/requests
GET /api/requests/:id
PATCH /api/requests/:id/status
```

### Quotes

```
POST /api/requests/:id/quotes
GET /api/requests/:id/quotes
PATCH /api/quotes/:id/accept
```

---

## How to Run the Project

### Backend

```
cd backend
npm install
node src/server.js
```

Backend runs on:

```
http://localhost:5000
```

---

### Frontend

```
cd frontend/nsm-frontend
npm install
ng serve
```

Frontend runs on:

```
http://localhost:4200
```

---

## Project Structure

```
NSM_Project
│
├ backend
│   ├ controllers
│   ├ models
│   ├ routes
│   ├ middleware
│   └ src/server.js
│
└ frontend
    └ nsm-frontend
        ├ src
        ├ angular.json
        └ package.json
```

---

## Testing

The system was tested using:

* Postman API testing
* Angular UI interactions
* MongoDB Compass to verify stored data

Test workflow included:

1. Register a resident
2. Login as resident
3. Create a service request
4. Register and login as provider
5. Submit a quote
6. Accept a quote

---

## Contributors

* **Komal**
* **Dheeraj Marathe**
* **Mohammad Maaz**

---

## Conclusion

The Neighborhood Service Marketplace demonstrates a complete full-stack application using Angular, Node.js, Express, and MongoDB. The system implements authentication, RESTful APIs, database schema design, and a functional frontend interface. This project highlights practical implementation of modern web development technologies and NoSQL database design principles.
