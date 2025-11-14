# Expense Tracker – Spring Boot Backend

A full-featured Expense Tracking System built using Java Spring Boot.

## Features
- JWT Authentication (Sign-In / Sign-Up)
- Forgot & Reset Password
- Manage Income & Expenses
- Saved / Recurring Transactions
- Categories CRUD
- Monthly & Yearly Reports
- Budget Management
- Role-based Access (Admin/User)
- Pagination & Filtering

## Tech Stack
- Java 17
- Spring Boot
- Spring Security (JWT)
- Spring Data JPA (Hibernate)
- MySQL

## Project Structure
controllers/       → API Endpoints
dto/               → Request & Response DTOs
entities/          → JPA Models
services/          → Business Logic
exceptions/        → Custom Exceptions
enums/             → All Enums
dataSeeders/       → Default Roles & Transaction Types
resources/         → Config Files

## Setup
1. Add MySQL credentials in application.properties
2. Run:
   mvn spring-boot:run
3. Access:
   http://localhost:8080

## API Endpoints

### Auth
POST /auth/signup  
POST /auth/signin  
POST /auth/forgot-password  
POST /auth/reset-password  

### Transactions
POST /transactions  
GET /transactions  
PUT /transactions/{id}  
DELETE /transactions/{id}  

### Categories & Budget
CRUD /categories  
CRUD /budget  

### Reports
GET /reports/monthly  
GET /reports/yearly  

## Author
Parv Bansal
Full Stack Developer (Java & Spring Boot)
