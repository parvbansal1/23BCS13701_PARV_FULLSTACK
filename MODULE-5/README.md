
# Expense Tracker – Module 5 (Spring Boot Backend)

This module contains the core backend source files for the Expense Tracker application built using Java Spring Boot.

## Included Files
- `pom.xml` (Project Dependencies)
- `.gitignore`
- Spring Boot Wrapper (`mvnw`, `mvnw.cmd`)
- Security Layer (JWT):
  - AuthEntryPointJwt
  - AuthTokenFilter
  - JwtUtils
  - UserDetailsImpl
  - UserDetailsServiceImpl
  - WebSecurityConfig
- Services & Implementations:
  - Auth, User, Category, Budget
  - Transaction & TransactionType
  - SavedTransaction
  - ReportService
  - EmailNotificationService
- Interfaces for all Services

## Features
- JWT Authentication & Authorization
- Role-Based Access (Admin/User)
- Full Transaction Handling
- Category Management
- Budget Management
- Saved/Recurring Transactions
- Reporting Services
- Email-based Forgot Password Support

## Setup
1. Configure MySQL credentials in `application.properties` (stored in previous modules).
2. Build & run using:
