# PTU Learning Platform

> An online platform for managing courses, assignments, and student progress.
> the backend still on working for now 

🔗 **Frontend Repository**: [PTU Learning Platform Frontend](https://github.com/Zaki-goumri/ptu-learning-platform-frontend)  
📄 **Conception Document**: [Not available for Now](#conception-document)

---

## 🚀 Overview

The **PTU Learning Platform** is designed to facilitate the management of online courses, assignments, and student performance tracking for students. It includes features like user authentication, course management, assignment submission, and progress tracking.

---

## 🧱 Tech Stack

- **Backend Framework**: [NestJS on working ](https://nestjs.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) via [Prisma ORM](https://www.prisma.io/)
- **Authentication**: JWT (access and refresh tokens)
- **File Uploads**: Multer (for assignment submissions)
- **Notifications**: Email notifications for important events
- **API Documentation**: [Swagger](https://swagger.io/)
- **Testing**: [Jest](https://jestjs.io/)
- **Deployment**: Docker, CI/CD, Cloud platforms

---

## 🛠️ Getting Started

### Prerequisites

- Node.js
- Docker (for containerized deployment)
- PostgreSQL (or use Docker to set it up)

### Setup

```bash
# Clone the repository
git clone https://github.com/Zaki-goumri/ptu-learning-platform.git
cd ptu-learning-platform
```
## 📦 Features
- 🔐 Authentication
Email + password login with JWT tokens

  - User roles: Admin, Student, Teacher

  - Secure route protection with middleware

- 📝 Course and Quizes Management
  - Create, update, and delete courses

  - Assign teachers to courses

  - Course details: name, description, syllabus, etc.

- 📅 Assignment Management
  - Teachers can create and manage assignments

  - Students can submit assignments via file uploads (Multer)

  - Assignment due dates and grading

- 📊 Progress Tracking
  - Track students' grades and submission statuses

   - View student progress across multiple courses

   - Email notifications for assignment deadlines

- 🧪 Testing
  - Unit tests for services and controllers

  - End-to-end tests for course and assignment workflows
 

## 🧩 System Architecture
```java
Frontend (Nextjs (App router))
        |
        v
Backend (NestJS)
        |
        v
Database (PostgreSQL via Prisma)
```

## 📦 Deployment Plan
- Dockerized application (Docker Compose for service orchestration)

- CI/CD pipeline using GitHub Actions for automated testing and deployment

- Deploy to cloud platforms like AWS, GCP, or Railway

## 📘 What I've learned Learn
- NestJS framework for building scalable backends

- Database design with PostgreSQL and Prisma

- User authentication with JWT

- Handling file uploads with Multer

- Writing unit and e2e tests with Jest

- CI/CD pipelines and Docker deployment




