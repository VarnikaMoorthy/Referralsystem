# Linktree Backend with Referral System

## 📌 Project Overview
This project is a backend implementation for a **Linktree/Bento.me**-like platform with a **referral system**. Users can **register, authenticate, generate referral links**, and track **successful sign-ups**. The system is **secure, scalable, and efficient**, following best backend development practices.

## 🚀 Features
- ✅ **User Authentication** – Register, Login, JWT-based authentication, Password Reset via email.
- ✅ **Referral System** – Users get a unique referral link, which tracks sign-ups.
- ✅ **Password Management** – Secure password hashing using **bcrypt**.
- ✅ **RESTful API** – Endpoints for user management and referral tracking.
- ✅ **Security** – Protects against **SQL Injection, XSS, and CSRF**.
- ✅ **Scalability** – Uses caching and rate limiting to handle high traffic.

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT (JSON Web Token)
- **Security:** bcrypt, Helmet, CORS
- **Deployment:** https://backend-referral-system.onrender.com/
  
  NOTE: Please run the above link in Postman or Curl

## 📂 Folder Structure
/Linktree-Backend │-- /config 
 Configuration files (database, JWT secret) │-- /controllers 
 Business logic for authentication and referrals │-- /models 
 MongoDB models (User, Referral) │-- /routes 
 API route handlers │-- /middlewares 
 Middleware for authentication & validation │-- /utils 
 Helper functions │-- server.js # Main server file │-- .env 
 Environment variables (not included in repo) │-- README.md 
 Project Documentation

🔗 API Endpoints
Method	Endpoint	Description
-POST	/api/register	 --Register a new user

-POST	/api/login	 --Authenticate user & return JWT

-POST	/api/forgot-password	 --Request password reset

-GET	/api/referrals	 --Get referrals made by the logged-in user

-GET	/api/referral-stats	 --Get referral statistics
