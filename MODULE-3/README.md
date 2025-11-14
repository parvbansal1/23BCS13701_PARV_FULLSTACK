
💰 Expense Tracker – Full Stack (Java + Spring Boot)

A full-stack Expense Tracking Application built using Java Spring Boot.
It includes user authentication, budgeting, categories, transactions, reports, and more.

🚀 Features

User Authentication (Sign-Up, Sign-In, JWT)

Password Reset with email support

Manage Transactions (add/edit/delete)

Saved Transactions with frequency options

Budget Management

Categories Management

Dynamic Monthly Reports

Profile Image Upload

Role-based access (Admin, User)

Pagination for large data

Pre-loaded seed data (Roles, Transaction Types)

🏛️ Tech Stack

Backend:

Java 17

Spring Boot

Spring Security + JWT

Spring Data JPA

Hibernate

MySQL

📂 Project Structure
/controllers       → All API endpoints  
/dto               → Request & Response DTOs  
/exceptions        → Custom exception handling  
/enums             → Role, Transaction Types, Status  
/dataSeeders       → Auto-populate default app data  
/resources         → Configuration files  

▶️ Running the Project

Configure application.properties (DB username/password).

Run using:

mvn spring-boot:run


App will start on:

http://localhost:8080

📌 API Highlights

/auth/signup

/auth/signin

/transactions/*

/categories/*

/budget/*

/reports/*

👨‍💻 Author

Parv Bansal
Full-Stack Developer | Java | Spring Boot
