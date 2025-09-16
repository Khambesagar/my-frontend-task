# Project: Butter-Insurance-Task
📌 Project Overview:

This project is a mocked full-stack style insurance dashboard built using React for the frontend.
It includes features like Login–Signup flow, Private Routes, CRUD operations, Search & Sort, and Toast notifications.
--------------------------------------
🔑 Authentication Flow:

When the app opens, the Login Page is shown first.
If the user does not have an account, they can go to the Signup Page to register.
After a successful login, the user is redirected to the Dashboard Page.
The Dashboard is a Private Route – it cannot be accessed without logging in.
The Navbar has a Logout button – when clicked, it clears the session and redirects the user back to the Login Page.
------------------------------------------------
📊 Dashboard Functionality

Product Add, Update, Delete options
Data Store in localStorage
Search by name/category
Sort by price (temporary sort, original array untouched)
Toast notifications for add/update/delete
----------------------------------
🛠️ Tech Stack:

React.js – Frontend
React Router DOM – Routing & Private Routes
Formik + Yup – Form Validation
Tailwind CSS – Styling
React Toastify – Notifications
LocalStorage – Mocked data persistence
-----------------------------------------------
## 🚀 Setup Instructions

1. Clone this repository
   git clone https://github.com/Khambesagar/my-frontend-task.git
   cd my-frontend-task

2.Install Dependencies
   npm install

3.Start the development server
  npm run dev
4.Open in Browser:
  http://localhost:5173/
-------------------------------------

## folder Structure 
/src
  /Components
    AddProduct.jsx
    UpdateProduct.jsx
    PrivateRoute.jsx
  /Pages
    Dashboard.jsx
    LoginPage.jsx
    Signup.jsx
    Navbar.jsx
  /App.jsx
  /index.jsx
  /index.css
  /main.jsx

------------------------------------
## Features..

Add Product with Formik + Yup validation

Search products by name or category

Sort products by price (ascending/descending)

Toast notifications on success

Dashboard with navigation

-----------------------------------------
💡 Reflection on AI Usage

I used ChatGPT as a coding assistant during development.

It helped me understand Formik + Yup validation and implement it correctly.

I referred to AI for ideas on search and sort logic and update data form.

The final code was implemented, tested, and customized by me.

This way, AI was used for learning and guidance, but the full project was written and structured by me.

-----------------------------------
